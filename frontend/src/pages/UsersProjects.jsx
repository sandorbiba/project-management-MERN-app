import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../ducks/projectsDucks";
import { connect } from "react-redux";
import ProjectLists from "../components/ProjectLists";

const UsersProjects = ({ getProjects, data, username }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div>
      <h1>
        Hello {username}!
        <span aria-label="emoji" role="img">
          {" "}
          👋
        </span>
      </h1>
      <Link to="/">
        <button>Logout</button>
      </Link>
      <Link to="/create">
        <button>New Project</button>
      </Link>
      <ProjectLists data={data} />
    </div>
  );
};

const mapDispatchToProps = { getProjects };
const mapStateToProps = ({ projects, users }) => ({
  data: projects.data,
  username: users.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersProjects);
