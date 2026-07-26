const express = require("express");
const dbConnect = require("./config/dbconnection");
const todoRoutes = require("./routes/todo.routes");


dbConnect();
const app = express();
app.use(express.json());
app.use("/api/v1", todoRoutes);
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Todo Backend</h1>");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000: http://localhost:3000");
});