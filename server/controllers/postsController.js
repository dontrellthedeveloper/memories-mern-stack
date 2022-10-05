import express from 'express';
import mongoose from 'mongoose';

import Post from '../models/Post.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        console.log(posts)

        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new Post({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await Post.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export default router;