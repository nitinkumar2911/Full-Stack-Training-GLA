const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();
router.post("/create-todo", todoController.createTodo);
router.get("/get-todo", todoController.getAllTodo);
router.put("/update-todo/:id", todoController.updateTodo);
router.delete("/delete-todo/:id", todoController.deleteTodo);
router.get("/get-todo/:id", todoController.getById);

module.exports = router;