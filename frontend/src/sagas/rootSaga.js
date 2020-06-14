import projectsSaga from "./projectsSaga";
import usersSaga from "./usersSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([projectsSaga(), usersSaga()]);
}

export default rootSaga;
