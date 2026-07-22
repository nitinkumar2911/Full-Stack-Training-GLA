const express = require("express");

const app = express();
const mongoose = require("mongoose");


app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World");
});


app.post("/user", (req, res) => {
    const { name, rollNo } = req.body;

    console.log("Name of user is:", name);
    console.log("Roll number of user is:", rollNo);

    res.send("User created successfully");
});

// Start Server
app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});

mongoose.connect("mongodb://localhost:27017/Nitin")
.then(()=>{
    console.log("MongoDB connected successfully");

}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
});