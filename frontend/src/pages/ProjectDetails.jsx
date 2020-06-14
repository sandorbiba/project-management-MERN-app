import React from "react";
import { Link } from "react-router-dom";

const ProjectDetails = ({ match }) => {
  const currentProject = match.params.projectId;
  return (
    <div>
      <Link to={`/${currentProject}/edit`}>
        <button>Edit</button>
      </Link>
      <button>Delete</button>
    </div>
  );
};

export default ProjectDetails;
