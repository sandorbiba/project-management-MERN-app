import React from "react";
import ProjectForm from "../components/ProjectForm";
import { createProjects } from "../ducks/projectsDucks";
import { connect } from "react-redux";

const CreateProject = ({ createProjects, history }) => {
  return (
    <div>
      CreateProject
      <ProjectForm handleSubmit={createProjects} history={history} />
    </div>
  );
};

const mapDispatchToProps = { createProjects };

export default connect(null, mapDispatchToProps)(CreateProject);
