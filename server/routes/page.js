import express from 'express'
import Post from '../models/postModel.js'
import multer from 'multer'

const router = express.Router()

router.get('/', async(req,res) => {
    try{
        const post = await Post.find();
        res.status(200).json(post)
    }catch{
        res.status(404).json({message: 'Failed to Fetch Data'})
    }
})

const storage = multer.diskStorage({
    destination: (req,file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});


router.post('/', upload.single('image'), async(req,res) => {
    const {title,content} = req.body;
    const image = req.file ? req.file.path: null;
    try{
        const newPost = new Post({title,content,image})
        const savePost = await newPost.save();
        res.status(201).json(savePost)
    }catch(e){
        console.log(e)
        res.status(409).json({error: 'Failed to Post'})
    }
})

export default router;