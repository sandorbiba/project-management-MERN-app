import express from "express";
import { register, login } from "./auth.controller";
const authRouter = express.Router();

authRouter.post("/register", register).post("/login", login);

export default authRouter;
