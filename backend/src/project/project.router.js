import express from "express";
import expressJwt from "express-jwt";
import {
  createNewProject,
  deleteProject,
  updateProject,
  getProjects,
  getProjectById,
} from "./project.controller";
const projectsRouter = express.Router();
const authenticate = expressJwt({ secret: "titkosalma" });

projectsRouter
  .use(authenticate)
  .post("/", createNewProject)
  .delete("/:id", deleteProject)
  .put("/:id", updateProject)
  .get("/", getProjects)
  .get("/:id", getProjectById);

export default projectsRouter;
