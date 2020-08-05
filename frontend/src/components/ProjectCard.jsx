import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { _id, projectName, kickoffDate } = project;
  return (
    <div>
      <h1>{projectName}</h1>
      <h4>{kickoffDate}</h4>
      <Link to={`/projects/${_id}`}>
        <button>Open</button>
      </Link>
    </div>
  );
};

export default ProjectCard;
