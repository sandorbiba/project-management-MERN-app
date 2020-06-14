import express from "express";
import { getUsers, createNewUser } from "./user.controller";
const userRouter = express.Router();

userRouter
  .get("/", createNewUser)
  .delete("/:id", deleteUser)
  .get("/", getUsers)
  .post("/", createNewUser);

export default userRouter;
