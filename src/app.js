const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const Post = require('./model/post.model');

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/create-post', upload.single('image'), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer);

    const createdPost = await Post.create({
        image: result.url,
        caption: req.body.caption
    });
    
    return res.status(201).json({
        message: 'Post created successfully',
        post: createdPost
    });
});

module.exports = app;