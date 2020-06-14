import React from "react";
import { Link } from "react-router-dom";
import ProjectLists from "../components/ProjectLists";

const UsersProjects = () => {
  return (
    <div>
      <h1>
        Hello Username!
        <span aria-label="emoji" role="img">
          👋
        </span>
      </h1>
      <button>Logout</button>
      <Link to="/create">
        <button>New Project</button>
      </Link>
      <ProjectLists />
    </div>
  );
};

export default UsersProjects;
