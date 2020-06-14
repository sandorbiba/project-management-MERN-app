import mongoose from "mongoose";
const ProjectModel = mongoose.model("Projects");

class ProjectService {
  async createNewProject(projectDto) {
    const user = await new ProjectModel(projectDto).save();
    return user;
  }

  deleteProject(_id) {
    return ProjectModel.findByIdAndRemove(_id);
  }

  getProjects() {
    return ProjectModel.find();
  }

  getProjectById(_id) {
    return ProjectModel.findById(_id);
  }

  async updateProject(projectDto, _id) {
    const result = await ProjectModel.findOneAndUpdate(
      { _id: _id },
      { $set: projectDto },
      { new: true }
    );
    if (!result) {
      return { error: "not found" };
    }
    return result;
  }
}

export default new ProjectService();
