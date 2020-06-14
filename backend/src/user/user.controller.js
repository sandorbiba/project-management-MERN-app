import UserService from "./user.service";

export const createNewUser = async (req, res) => {
  try {
    if (req.body === undefined) {
      return res.status(400).send();
    }
    const newUser = req.body;
    const user = await UserService.createNewUser(newUser);
    return res.json(user);
  } catch (error) {
    console.log("createNewUser error", error.stack);
    return res.status(500).send();
  }
};

/* export const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    await UserService.deleteUser(_id);
    res.send("deleted");
  } catch (error) {
    console.log("deleteUser error", error.stack);
    res.status(500).send();
  }
}; */

export const getUsers = async (req, res) => {
  try {
    const Users = await UserService.getUsers();
    return res.json(Users);
  } catch (error) {
    console.log("getUsers error", error.stack);
    return res.status(500).send();
  }
};
