const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: String, 
    caption: String,
})

const Post = mongoose.model('Post', postSchema); // here Post is the name of the collection in the database. '

module.exports = Post; 


/*
 post = {
    image: string, 
    caption: string
 }
 
 user=> {
    name: string,
    email: string,
    password: string,
    posts: [post1, post2, post3]
    }
*/