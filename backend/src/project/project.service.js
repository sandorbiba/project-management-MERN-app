import mongoose from "mongoose";
const ProjectModel = mongoose.model("Projects");

class ProjectService {
  async createNewProject(projectDto, _user) {
    const project = await new ProjectModel({ ...projectDto, _user }).save();
    return project;
  }

  deleteProject(_id) {
    return ProjectModel.findByIdAndRemove(_id);
  }

  getProjects(userId) {
    return ProjectModel.find({ _user: userId });
  }

  getProjectById(_id) {
    return ProjectModel.findById(_id);
  }

  async updateProject(projectDto, _id, userId) {
    const result = await ProjectModel.findOneAndUpdate(
      { _id: _id },
      { $set: projectDto },
      { new: true }
    );
    if (!result) {
      return { error: "not found" };
    }
    return this.getProjects(userId);
  }
}

export default new ProjectService();
