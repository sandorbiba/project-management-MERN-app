import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EditProject from "./pages/EditProject";
import ProjectDetails from "./pages/ProjectDetails";
import CreateProject from "./pages/CreateProject";
import UsersProjects from "./pages/UsersProjects";
import Form from "./pages/Form";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create" component={CreateProject} />
          <Route path="/projects/:projectId/edit" component={EditProject} />
          <Route path="/projects/:projectId" component={ProjectDetails} />
          <Route path="/projects" component={UsersProjects} />
          <Route exact path="/" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
