/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

  import {
    ThumbUpIcon,
    ChatAltIcon,
    ShareIcon,
  } from "@heroicons/react/outline";
function Post({ name, message, email, timestamp, image, postImage }) {
  // const data= new Date ((timestamp).toDate()).toLocaleString()
  var date = new Date();
  async (timestamp) => {
    date = timestamp.toDate();
  };
  // var date = new Date(timestamp);
  var data =
    date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate() + "/";
  data +=
    date.getUTCMonth() < 10
      ? `0${date.getUTCMonth()}`
      : date.getUTCMonth() + "/";
  data +=
    date.getUTCFullYear() < 10
      ? `0${date.getUTCFullYear()}`
      : date.getUTCFullYear() + ", ";
  data +=
    date.getUTCHours() < 10
      ? `0${date.getUTCHours()}`
      : date.getUTCHours() + ":";
  data +=
    date.getUTCMinutes() < 10
      ? `0${date.getUTCMinutes()}`
      : date.getUTCMinutes() + ":";
  data +=
    date.getUTCSeconds() < 10
      ? `0${date.getUTCSeconds()}`
      : date.getUTCSeconds();

  // console.log(data)

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp? (
              <p className="text-xs text-gray-400">

              {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ):(
              <p className="text-xs text-gray-400">Loading</p>
            )
             }
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white ">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      {/* footer of post */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div  className="inputIcon rounded-none rounded-bl-2xl">
            <ThumbUpIcon className="h-4"/>
            <p className="text-xs sm:text-base">Like</p>
        </div>
        <div  className="inputIcon rounded-none">
            <ChatAltIcon className="h-4"/>
            <p className="text-xs sm:text-base">Like</p>
        </div>
        <div  className="inputIcon rounded-none rounded-br-2xl">
            <ShareIcon className="h-4"/>
            <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
