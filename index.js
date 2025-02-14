const express = require("express");
const connectDB = require("./db"); //Import database connection
const cors = require("cors");
const router = require('./routes'); //import routes

//Calling the express function
const app = express();
//Middleware

app.use(express.json());
app.use(cors());

//Connect to mongoDB
connectDB();

//Routes
app.use("/api",router); //Prefix all routes with "/api"

//Start srver
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('Server running on port ${PORT}');
});
