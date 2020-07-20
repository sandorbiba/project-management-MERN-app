import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../ducks/projectsDucks";
import { connect } from "react-redux";
import ProjectLists from "../components/ProjectLists";

const UsersProjects = ({ getProjects, data }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

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
      <ProjectLists data={data} />
    </div>
  );
};

const mapDispatchToProps = { getProjects };
const mapStateToProps = ({ projects }) => ({ data: projects.data });

export default connect(mapStateToProps, mapDispatchToProps)(UsersProjects);
