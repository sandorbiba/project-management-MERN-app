import express from "express";
import mongoose from "mongoose";
import "./user/user.model";
import "./project/project.model";
import projectsRouter from "./project/project.router";
import authRouter from "./auth/auth.router";
import bodyParser from "body-parser";

async function bootstrap() {
  await mongoose.connect("mongodb://localhost:27017/sanyi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const app = express();

  app.use(bodyParser.json());
  app.use("/auth", authRouter);
  app.use("/projects", projectsRouter);

  app.listen(5000, console.log("server is on: 5000"));
}

bootstrap();
