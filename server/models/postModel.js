import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {type: String, required: true },
    content: {type: String, required: true },
    image: {type: String, required: false },
    createdAt: {type: Date, default: Date.now }
});

const Post = mongoose.model('post', postSchema)

export default Post;