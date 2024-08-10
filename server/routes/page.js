import express from 'express'
import Post from '../models/postModel.js'

const router = express.Router()

router.get('/', async(req,res) => {
    try{
        const post = await Post.find();
        res.status(200).json(post)
    }catch{
        res.status(404).json({message: 'Failed to Fetch Data'})
    }
})

router.post('/', async(req,res) => {
    const {title,content,image} = req.body;
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