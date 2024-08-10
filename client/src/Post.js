import {format} from 'date-fns'

const Post = (props) => {

    const date = format(props.date, 'dd-MM, yyyy | p');

    return(
        <div className="min-w-96 w-6/12 p-10 border rounded-lg block">
            <h1 className="font-bold text-3xl">{props.title}</h1>
            <p className="font-semibold text-sm text-gray-700 my-2">{date}</p>
            <p>{props.content}</p>
        </div>
    )
}

export default Post;