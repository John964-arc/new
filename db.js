const mongoose = require("mongoose");

const dburl = "mongodb+srv://johnik_07:07johnik@cluster0.9n7a8.mongodb.net/"
const connectDB = async ()=>{
    try{
        await mongoose.connect(dburl);
        console.log("MongoDB connected successfully");

    }catch (err){
        console.log("MongoDB connection Error:",err);
        process.exit(1);

        }
    };
    module.exports = connectDB;
