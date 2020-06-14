import express from "express";
import {
  createNewProject,
  deleteProject,
  updateProject,
  getProjects,
  getProjectById,
} from "./project.controller";
const projectsRouter = express.Router();

projectsRouter
  .post("/", createNewProject)
  .delete("/:id", deleteProject)
  .put("/:id", updateProject)
  .get("/", getProjects)
  .get("/:id", getProjectById);

export default projectsRouter;
