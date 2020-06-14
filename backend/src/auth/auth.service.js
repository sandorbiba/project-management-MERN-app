import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
const UserModel = mongoose.model("Users");

class AuthService {
  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    console.log({ salt });
    return bcrypt.hash(password, salt);
  }

  async register(userDto) {
    console.log({ userDto });
    const { username, email } = userDto;
    const password = await this.hashPassword(userDto.password);
    console.log({ password });
    const user = await new UserModel({ username, email, password }).save();
    return user;
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return { error: { message: "user not found", status: 400 } };
    }
    const matchingPassword = await bcrypt.compare(password, user.password);
    console.log({ matchingPassword });

    if (!matchingPassword) {
      return { error: { message: "wrong password", status: 400 } };
      // banki app-ban majd "user not found"-ot adok vissza, de tényleg:)
    }

    const token = jsonwebtoken.sign({ id: user._id }, "titkosalma", {
      expiresIn: "2 week",
    });
    console.log({ token });

    return { username: user.username, token };
  }
}

export default new AuthService();
