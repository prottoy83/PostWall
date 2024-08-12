import {format} from 'date-fns'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Post = (props) => {

    const date = format(props.date, 'dd-MM, yyyy | p');
    const [image, setImage] = useState(null);

    // Use useEffect to update image when props.image changes
    useEffect(() => {
        if (props.image != null) {
            setImage(`http://localhost:3001/${props.image}`);
        } else {
            setImage(null);
        }
    }, [props.image]);

    const [menuOp, setmenuOp] = useState(true);

    const switchMenu = () => {
        console.log("clicked")
        setmenuOp(!menuOp)
    }

    const deletePost = () => {
        const postID = props.id;
        axios.delete('http://localhost:3001/page/'+postID)
        window.location.reload();
    }

    //console.log(props.title, props.image)
    return(
        <div className="min-w-96 w-6/12 p-10 border rounded-lg block">
            <div className='block w-full h-10'>
                <h1 className="font-bold text-3xl float-left">{props.title}</h1>
                <div className='float-end'>
                    <button data-popover-target="menu" onClick={switchMenu}>
                    <svg className="w-6 h-6 text-white dark:text-gray-800 font-extrabold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" strokeWidth="2" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                    </svg>
                    </button>

                    <ul role="menu" data-popover="menu" data-popover-placement="bottom" hidden={menuOp}
                        className="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                        <li role="menuitem"
                        className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                            <button onClick={deletePost}>Delete</button>
                        </li>
                        
                    </ul>
                </div>
                
            </div>
            <p className="font-semibold text-sm text-gray-700 my-2">{date}</p>
            {image != null ? <img src={image} alt="Uploaded" /> : <p></p>}
            <p>{props.content}</p>
        </div>
    )
}

export default Post;