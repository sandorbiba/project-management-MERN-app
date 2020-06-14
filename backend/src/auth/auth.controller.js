import AuthService from "./auth.service";

export const register = async (req, res) => {
  console.log(req);
  try {
    if (req.body === undefined) {
      return res.status(400).send();
    }
    const newUser = req.body;
    const user = await AuthService.register(newUser);
    return res.json(user);
  } catch (error) {
    console.log("register error", error.stack);
    return res.status(500).send();
  }
};

export const login = async (req, res) => {
  if (req.body === undefined) {
    return res.status(400).send();
  }

  const { email, password } = req.body;
  const result = await AuthService.login(email, password);

  if (result.error) {
    return res.status(result.error.status).send(result.error.message);
  }
  return res.json(result);
};
