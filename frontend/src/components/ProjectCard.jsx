import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const currentProjectId = 6;
  return (
    <div>
      <h1>Project Name</h1>
      <Link to={`/${currentProjectId}`}>
        <button>Open</button>
      </Link>
    </div>
  );
};

export default ProjectCard;
