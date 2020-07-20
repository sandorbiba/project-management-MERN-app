import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  kickoffDate: {
    type: Date,
    default: Date.now,
  },
  projectName: String,
  step2: String,
  step3: String,
  step4: String,
  step5: String,
  step6: String,
  step7: String,
  step8: String,
  est: Number,
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Projects = mongoose.model("Projects", ProjectSchema);

export default Projects;
