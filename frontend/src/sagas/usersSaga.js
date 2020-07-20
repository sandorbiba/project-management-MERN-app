import { call, put, takeLatest } from "redux-saga/effects";
import { Types, Actions } from "../ducks/usersDucks";
import AxiosService from "./axiosService";

const axios = new AxiosService();

function* login(action) {
  const { email, password, history } = action.payload;

  try {
    const { data } = yield call(axios.axiosService.post, "/auth/login", {
      email,
      password,
    });
    const { username, token } = data;
    axios.refresh(token);
    yield put(Actions.loginSuccess({ username, token }));
    history.push("/projects");
  } catch (e) {
    yield console.log("login", e);
  }
}

function* register(action) {
  const { email, password, username, history } = action.payload;
  try {
    yield call(axios.axiosService.post, "/auth/register", {
      email,
      password,
      username,
    });
    history.push("/login");
  } catch (e) {
    yield console.log("login", e);
  }
}

export default function* usersSaga() {
  yield takeLatest(Types.REGISTER, register);
  yield takeLatest(Types.LOGIN, login);
}
