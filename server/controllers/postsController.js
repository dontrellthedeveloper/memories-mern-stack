import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
    try {
         const posts = await Post.find();

         console.log(posts)

        res.status(200).json(posts)

    } catch (e) {
        res.status(404).json({message: e.message})
    }
};

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new Post(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (e) {
        res.status(409).json({message: e.message})
    }
};