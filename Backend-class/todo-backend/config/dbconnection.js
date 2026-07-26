const mongoose = require("mongoose");
async function dbConnect(){
    try{
        const response = await mongoose.connect("mongodb://localhost:27017/todo") ;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
module.exports = dbConnect;