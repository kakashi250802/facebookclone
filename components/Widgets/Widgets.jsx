import {SearchIcon} from '@heroicons/react/outline'
import {DotsHorizontalIcon, VideoCameraIcon} from '@heroicons/react/solid'
import Contact from './../Contact/Contact';
function Widgets() {
    const contacts =[
        {src:"https://firebasestorage.googleapis.com/v0/b/facebook-ver2-e1e50.appspot.com/o/posts%2FWlIcV5JeSNWlPBw70vkY?alt=media&token=d432ebdf-4aa2-46db-80ab-3fc466b4da2d", name:"Bé yêu của anh"},
        {src:"https://firebasestorage.googleapis.com/v0/b/facebook-ver2-e1e50.appspot.com/o/posts%2FWlIcV5JeSNWlPBw70vkY?alt=media&token=d432ebdf-4aa2-46db-80ab-3fc466b4da2d", name:"Bé yêu của anh"},
        {src:"https://firebasestorage.googleapis.com/v0/b/facebook-ver2-e1e50.appspot.com/o/posts%2FWlIcV5JeSNWlPBw70vkY?alt=media&token=d432ebdf-4aa2-46db-80ab-3fc466b4da2d", name:"Bé yêu của anh"},
        {src:"https://firebasestorage.googleapis.com/v0/b/facebook-ver2-e1e50.appspot.com/o/posts%2FWlIcV5JeSNWlPBw70vkY?alt=media&token=d432ebdf-4aa2-46db-80ab-3fc466b4da2d", name:"Bé yêu của anh"},
        {src:"https://firebasestorage.googleapis.com/v0/b/facebook-ver2-e1e50.appspot.com/o/posts%2FWlIcV5JeSNWlPBw70vkY?alt=media&token=d432ebdf-4aa2-46db-80ab-3fc466b4da2d", name:"Bé yêu của anh"},
        {src:"https://firebasestorage.googleapis.com/v0/b/facebook-ver2-e1e50.appspot.com/o/posts%2FWlIcV5JeSNWlPBw70vkY?alt=media&token=d432ebdf-4aa2-46db-80ab-3fc466b4da2d", name:"Bé yêu của anh"},
        {src:"https://firebasestorage.googleapis.com/v0/b/facebook-ver2-e1e50.appspot.com/o/posts%2FWlIcV5JeSNWlPBw70vkY?alt=media&token=d432ebdf-4aa2-46db-80ab-3fc466b4da2d", name:"Bé yêu của anh"},
    ]
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6"/>
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>
            {contacts.map(contact =>(
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
        </div>
    )
}

export default Widgets
