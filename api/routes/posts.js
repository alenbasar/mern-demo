const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET back all the posts
router.get('/', async (req, res) => {
  // res.send('We are on posts');
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ error: error });
  }
});

// GET back specific posts
router.get('/:postID', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID);
    res.json(post);
  } catch (error) {
    res.json({ error: error });
  }
});

// Submits a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ error: error });
  }
});

// DELETE post
router.delete('/:postID', async (req, res) => {
  try {
    await Post.remove({ _id: req.params.postID });
    res.json({ message: 'post deleted' });
  } catch (error) {
    res.json({ error: error });
  }
});

// UPDATE post
router.patch('/:postID', async (req, res) => {
  try {
    const newPost = await Post.updateOne(
      { _id: req.params.postID },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(newPost);
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
