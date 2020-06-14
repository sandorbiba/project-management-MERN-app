import { call, put, takeLatest } from "redux-saga/effects";
import { Types, Actions } from "../ducks/projectsDucks";
import axios from "axios";

function* getProjects(action) {
  try {
    const { data } = yield call(axios.get, "/projects");
    yield console.log(data);
    yield put(Actions.getProjectsSuccess(data));
  } catch (e) {
    yield console.log("getProjects", e);
  }
}

function* getProjectsById(action) {
  try {
    const { data } = yield call(axios.get, `/projects/${action.payload}`);
    yield console.log(data);
    yield put(Actions.getProjectsByIdSuccess(data));
  } catch (e) {
    yield console.log("getProjectsById", e);
  }
}

function* editProjectsById(action) {
  try {
    const { data } = yield call(
      axios.put,
      `/projects/${action.payload.id}`,
      action.payload
    );
    yield console.log(data);
    yield put(Actions.editProjectsByIdSuccess(data));
  } catch (e) {
    yield console.log("editProjectsById", e);
  }
}

function* createProjects(action) {
  try {
    const { data } = yield call(axios.post, "/projects", action.payload);
    yield put(Actions.createProjectsSuccess(data));
  } catch (e) {
    yield console.log("createProjects", e);
  }
}

function* deleteProjects(action) {
  try {
    const { data } = yield call(axios.delete, `/projects/${action.payload}`);
    yield console.log(data);
    yield put(Actions.deleteProjectsSuccess(data));
  } catch (e) {
    yield console.log("deleteProjects", e);
  }
}

export default function* projectsSaga() {
  yield takeLatest(Types.GET_PROJECTS, getProjects);
  yield takeLatest(Types.GET_PROJECTS_BY_ID, getProjectsById);
  yield takeLatest(Types.EDIT_PROJECTS_BY_ID, editProjectsById);
  yield takeLatest(Types.CREATE_PROJECTS_SUCCESS, createProjects);
  yield takeLatest(Types.DELETE_PROJECTS_SUCCESS, deleteProjects);
}
