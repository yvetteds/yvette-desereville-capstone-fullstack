import express from "express";
import * as projectControllers from "../controllers/projects-controller.js";

const router = express.Router();

router
  .route("/")
  .get(projectControllers.getAllProjects)
  .post(projectControllers.addProject);

router
  .route("/:projectId")
  .get(projectControllers.getSingleProject)
  .delete(projectControllers.deleteProjectById)
  .put(projectControllers.editProject);

router
  .route("/:projectId/todo")
  .get(projectControllers.getToDo)
  .post(projectControllers.addTodoItem);

router
  .route("/:projectId/todo/:id")
  .put(projectControllers.editTodo)
  .delete(projectControllers.deleteTodoItem);

export default router;
