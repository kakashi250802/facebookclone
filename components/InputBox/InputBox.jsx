/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db,storage } from "../../firebase";
import firebase from "firebase";
function InputBox() {
  const { data: session, status } = useSession();
  const inputRef = useRef(null);
  const FilepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  
  const removeImage = () => {
    setImageToPost(null);
  };
  
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection('posts')
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadtask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, 'data_url');
          removeImage();

          uploadtask.on(
            "state_change",
            null,
            err => console.error(err),
            () => {
              storage.ref("posts").child(doc.id).getDownloadURL().then(url => {
                console.log(url)  
                db.collection("posts").doc(doc.id).set({
                      postImage: url,
                    },
                    { merge: true })
                  });
            }
          );
        }
      });
    inputRef.current.value = "";
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 
                    focus:outline-none"
            ref={inputRef}
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform
                        hover:scale-105 cursor-pointer
                    "
          >
            <img src={imageToPost} className="h-10 object-contain" alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div
        onClick={() => FilepickerRef.current.click()}
        className="flex justify-evenly mt-3 p-2 border-t"
      >
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
          <input
            ref={FilepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Felling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
