const mongoose = require("mongoose"); // mongoose ko import kiya for connection establishment

require("dotenv").config();//jo bhi env file k ander configuration h na usko yeh load kr dega process wale object k ander

const ConnectwithDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error);
        //iska matlab kya h ?
        process.exit(1);
    } )
};

module.exports = ConnectwithDB; //yeh export krega ConnectwithDB ko