import mongoose from "mongoose";
const UserModel = mongoose.model("Users");

class UserService {
  async createNewUser(userDto) {
    const user = await new UserModel(userDto).save();
    return user;
  }

  /*   deleteUser(_id) {
    return UserModel.findByIdAndRemove(_id);
  }
 */
  getUsers() {
    return UserModel.find();
  }
}

export default new UserService();
