const GET_PROJECTS = "GET_PROJECTS";
const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS";
const GET_PROJECTS_BY_ID = " GET_PROJECTS_BY_ID";
const GET_PROJECTS_BY_ID_SUCCESS = "GET_PROJECTS_BY_ID_SUCCESS";
const EDIT_PROJECTS_BY_ID = "EDIT_PROJECTS_BY_ID";
const EDIT_PROJECTS_BY_ID_SUCCESS = "EDIT_PROJECTS_BY_ID_SUCCESS";
const CREATE_PROJECTS = "CREATE_PROJECTS";
const CREATE_PROJECTS_SUCCESS = "CREATE_PROJECTS_SUCCESS";
const DELETE_PROJECTS = "DELETE_PROJECTS";
const DELETE_PROJECTS_SUCCESS = "DELETE_PROJECTS_SUCCESS";

export const Types = {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_BY_ID,
  GET_PROJECTS_BY_ID_SUCCESS,
  EDIT_PROJECTS_BY_ID,
  EDIT_PROJECTS_BY_ID_SUCCESS,
  CREATE_PROJECTS,
  CREATE_PROJECTS_SUCCESS,
  DELETE_PROJECTS,
  DELETE_PROJECTS_SUCCESS,
};

const initialState = { data: [], currentProject: null };

export default function ProjectsReducer(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case DELETE_PROJECTS_SUCCESS:
      return {
        data: state.data.filter((project) => project !== action.payload),
      };
    case GET_PROJECTS_BY_ID_SUCCESS:
      return { ...state, currentProject: action.payload };
    case GET_PROJECTS_SUCCESS:
    case EDIT_PROJECTS_BY_ID_SUCCESS:
    case CREATE_PROJECTS_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const getProjects = (payload) => ({ type: GET_PROJECTS, payload });
export const getProjectsSuccess = (payload) => ({
  type: GET_PROJECTS_SUCCESS,
  payload,
});

export const getProjectsById = (payload) => ({
  type: GET_PROJECTS_BY_ID,
  payload,
});
export const getProjectsByIdSuccess = (payload) => ({
  type: GET_PROJECTS_BY_ID_SUCCESS,
  payload,
});

export const editProjectsById = (payload) => ({
  type: EDIT_PROJECTS_BY_ID,
  payload,
});
export const editProjectsByIdSuccess = (payload) => ({
  type: EDIT_PROJECTS_BY_ID_SUCCESS,
  payload,
});

export const createProjects = (payload) => ({
  type: CREATE_PROJECTS,
  payload,
});
export const createProjectsSuccess = (payload) => ({
  type: CREATE_PROJECTS_SUCCESS,
  payload,
});

export const deleteProjects = (payload) => ({
  type: DELETE_PROJECTS,
  payload,
});
export const deleteProjectsSuccess = (payload) => ({
  type: DELETE_PROJECTS_SUCCESS,
  payload,
});

export const Actions = {
  getProjects,
  getProjectsSuccess,
  getProjectsById,
  getProjectsByIdSuccess,
  editProjectsById,
  editProjectsByIdSuccess,
  createProjects,
  createProjectsSuccess,
  deleteProjects,
  deleteProjectsSuccess,
};
