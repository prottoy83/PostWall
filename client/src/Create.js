import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Create = (props) => {

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: null
    });

    const navigate = useNavigate();
    const hndChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const [image, setImage ] = useState();
    //const image = 'test.jpg'

    const hndPhoto = (e) => {
        setImage(e.target.files[0]);
        setFormData({...formData, image: e.target.files[0]})
    }

    const subForm = async (e) =>{
        e.preventDefault()

        try{
            //console.log(formData)

            await axios.post('http://localhost:3001/page', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/')

        }
        catch{
            console.log("Error submitting info")
        }
    }

    return(
        <div>
            <content className='mt-8 block '>
            <div className='flex justify-around'>
            <h1 className='font-bold text-3xl text-gray-700'>Create A Post</h1>
            <button className='bg-blue-400 text-white w-10 h-10 rounded-sm' onClick={props.func}>←</button>
            </div>

            <div className='flex flex-col items-center mt-8 space-y-2'>
                <form className="min-w-96 w-6/12 p-10 border rounded-lg block " onSubmit={subForm}>
                    <h1 className="font-semibold text-4xl text-gray-700 my-2">Post Details</h1>
                    <div className="my-8 w-full">
                        <h4 className="font-medium text-gray-700 my-1 mx-2">Title</h4>
                        <input name="title" type="text" placeholder="Enter A title" className="border h-10 w-full p-4 bg-slate-50" onChange={hndChange}/>
                    </div>
                    <div className="my-2 w-full">
                        <h4 className="font-medium text-gray-700 my-1 mx-2">Content</h4>
                        <textarea name="content" type="text" placeholder="Enter A title" className="border h-96 w-full p-4 bg-slate-50" onChange={hndChange}/>
                    </div>
                    <div className='flex justify-evenly'>

                        <div className="flex ">
                            <label className='file-upload'><p>Upload Image</p><input type="file" accept=".png, .jpg, .jpeg, .webp" name="image" onChange={hndPhoto}/></label>
                            { image != null ? 
                                <image src={URL.createObjectURL(image)} width={100}/> 
                                : <p></p>
                            }
                        </div>
                        <button className="bg-orange-600 text-gray-100 p-3 rounded-md h-12" type="submit">Submit</button>

                    </div>
                </form>
            </div>
        </content>
        </div>
    )
}

export default Create;