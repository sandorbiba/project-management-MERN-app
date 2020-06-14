import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  createDate: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model("Users", UserSchema);

export default Users;
