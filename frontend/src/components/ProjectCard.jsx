import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { _id, projectName, kickoffDate } = project;
  return (
    <div>
      <h1>{projectName}</h1>
      <h1>{kickoffDate}</h1>
      <Link to={`/projects/${_id}`}>
        <button>Open</button>
      </Link>
    </div>
  );
};

export default ProjectCard;
