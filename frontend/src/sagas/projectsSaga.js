import { call, put, takeLatest } from "redux-saga/effects";
import { Types, Actions } from "../ducks/projectsDucks";
import AxiosService from "./axiosService";

const axios = new AxiosService();

function* getProjects(action) {
  try {
    const { data } = yield call(axios.axiosService.get, "/projects");
    yield put(Actions.getProjectsSuccess(data));
  } catch (e) {
    yield console.log("getProjects", e);
  }
}

function* getProjectsById(action) {
  try {
    const { data } = yield call(
      axios.axiosService.get,
      `/projects/${action.payload}`
    );
    yield put(Actions.getProjectsByIdSuccess(data));
  } catch (e) {
    yield console.log("getProjectsById", e);
  }
}

function* editProjectsById(action) {
  const { project, history } = action.payload;
  try {
    const { data } = yield call(
      axios.axiosService.put,
      `/projects/${project._id}`,
      project
    );
    yield put(Actions.editProjectsByIdSuccess(data));
    history.push("/projects");
  } catch (e) {
    yield console.log("editProjectsById", e);
  }
}

function* createProjects(action) {
  const { project, history } = action.payload;
  try {
    const { data } = yield call(axios.axiosService.post, "/projects", project);
    //yield put(Actions.createProjectsSuccess(data));
    history.push("/projects");
  } catch (e) {
    yield console.log("createProjects", e);
  }
}

function* deleteProjects(action) {
  const { currentProjectId, history } = action.payload;
  try {
    const { data } = yield call(
      axios.axiosService.delete,
      `/projects/${currentProjectId}`
    );
    yield put(Actions.deleteProjectsSuccess(data));
    history.push("/projects");
  } catch (e) {
    yield console.log("deleteProjects", e);
  }
}

export default function* projectsSaga() {
  yield takeLatest(Types.GET_PROJECTS, getProjects);
  yield takeLatest(Types.GET_PROJECTS_BY_ID, getProjectsById);
  yield takeLatest(Types.EDIT_PROJECTS_BY_ID, editProjectsById);
  yield takeLatest(Types.CREATE_PROJECTS, createProjects);
  yield takeLatest(Types.DELETE_PROJECTS, deleteProjects);
}
