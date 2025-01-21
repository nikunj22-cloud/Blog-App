
//create post and fetch the data from post is the work of postcontroller.js
const Post = require("../models/postModel") //import modal

exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;//fetch the post data
        const post = new Post({title, body });//initilize post object
        const savedPost = await post.save();

        res.json({
            post : savedPost
        })
    }
    catch(err){
        return res.status(400).json({
            error : "Error While Creating Post"
        })
    }
}

exports.getAllPosts = async (req, res) => {
    try{
        // const posts = await Post.find();
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            data : posts,
        })
    }
    catch(err)
    {
        return res.status(400).json({
            error : "Error while Fetching Post "
        })
    }
}