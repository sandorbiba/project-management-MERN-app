import React from "react";
import ProjectForm from "../components/ProjectForm";
import { editProjectsById } from "../ducks/projectsDucks";
import { connect } from "react-redux";

const EditProject = ({ editProjectsById, data, match, history }) => {
  const currentProjectId = match.params.projectId;
  const currentProject = data.find(({ _id }) => _id === currentProjectId);
  return (
    <div>
      EditProject
      <ProjectForm
        _id={currentProjectId}
        currentProject={currentProject}
        handleSubmit={editProjectsById}
        history={history}
      />
    </div>
  );
};

const mapDispatchToProps = { editProjectsById };
const mapStateToProps = ({ projects }) => ({ data: projects.data });

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
