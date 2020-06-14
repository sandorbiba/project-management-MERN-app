import { combineReducers } from "redux";
import UsersReducer from "./usersDucks";
import ProjectsReducer from "./projectsDucks";

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  users: UsersReducer,
});

export default rootReducer;
