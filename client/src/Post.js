import {format} from 'date-fns'
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

    console.log(props.title, props.image)
    return(
        <div className="min-w-96 w-6/12 p-10 border rounded-lg block">
            <h1 className="font-bold text-3xl">{props.title}</h1>
            <p className="font-semibold text-sm text-gray-700 my-2">{date}</p>
            {image != null ? <img src={image} alt="Uploaded" /> : <p></p>}
            <p>{props.content}</p>
        </div>
    )
}

export default Post;