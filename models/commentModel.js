// Import Mongoose 
const mongoose = require('mongoose')


// Route Handler 
const commentSchema = new mongoose.Schema({
    post:{ //kis post pr kiy commdent
        type:mongoose.Schema.Types.ObjectId, //post id ko store krne k liye
        ref : "Post" //reference to the post model
    },
    user: {
        type:String,
        required:true, //kya comment kiya
    },    
    body: {
        type:String,
        required:true,//kesa comment kiya
    }    
})


// Export 
module.exports = mongoose.model("Comment",commentSchema);