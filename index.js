
//server bna liya
const express = require('express'); //yeh express ko import kr rha hai
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000; 

// middleware 
app.use(express.json());

//route ko import route ki file blog.js ko
const blog = require('./routes/blog');

// mount  the blog
app.use("/api/v1",blog);

// data base se connection establish
const dbConnect = require('./config/database');
dbConnect();

// Start Server  or app ko activate kr liya
app.listen(4000,()=>{
    console.log(`App is Running at the",${4000}`);
})

// Default Route 
app.get('/', (req,res) => {
    res.send(`<h1>HomePage</h1>`)
    //this is home page
})