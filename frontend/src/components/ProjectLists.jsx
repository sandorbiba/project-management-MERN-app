import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectLists = ({ data }) => {
  return (
    <div>
      {data ? (
        <div>
          {data.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      ) : (
        <p>Projectless</p>
      )}
    </div>
  );
};

export default ProjectLists;
