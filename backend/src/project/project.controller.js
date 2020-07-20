import ProjectService from "./project.service";

export const createNewProject = async (req, res) => {
  console.log(req.body);
  const userId = req.user.id;
  try {
    if (req.body === undefined) {
      return res.status(400).send();
    }
    const newProject = req.body;
    const projects = await ProjectService.createNewProject(newProject, userId);
    res.json(projects);
  } catch (error) {
    console.log("createNewProject error", error.stack);
    return res.status(500).send();
  }
};

export const deleteProject = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send();
    }
    const _id = req.params.id;
    await ProjectService.deleteProject(_id);
    return res.send();
  } catch (error) {
    console.log("deleteProject error", error.stack);
    return res.status(500).send();
  }
};

export const getProjects = async (req, res) => {
  const userId = req.user.id;
  try {
    const Projects = await ProjectService.getProjects(userId);
    return res.json(Projects);
  } catch (error) {
    console.log("getUsers error", error.stack);
    return res.status(500).send();
  }
};

export const updateProject = async (req, res) => {
  const userId = req.user.id;
  try {
    if (!req.params.id) {
      return res.status(400).send();
    }
    if (req.body === undefined) {
      return res.status(400).send();
    }
    const _id = req.params.id;
    const newProject = req.body;
    const projects = await ProjectService.updateProject(
      newProject,
      _id,
      userId
    );
    return res.json(projects);
  } catch (error) {
    console.log("updateProject error", error.stack);
    return res.status(500).send();
  }
};

export const getProjectById = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send();
    }
    const project = await ProjectService.getProjectById(req.params.id);
    return res.json(project);
  } catch (error) {
    console.log("getProjectById error", error.stack);
    return res.status(500).send();
  }
};
