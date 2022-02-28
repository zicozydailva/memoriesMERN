const Post = require('../models/Post');

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createPost = async (req, res) => {
    try {
        const {title, message, creator} = req.body
        if(!title || !message || !creator) {
            res.status(401).json("Name, Message and Creator fields are required!")
        }
        const post = await Post.create(req.body)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deletePost = async (req, res) => {
    try {
       await Post.findByIdAndDelete({_id: req.params.id})
    } catch (error) {
        res.status(500).json(error)
    }
}

const likePost = async (req, res) => {
    try {
       const {id} = req.params
       const post = await Post.findById(id)
       const tempPost = await Post.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true})
       res.json(tempPost)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getAllPosts, likePost, deletePost, createPost}