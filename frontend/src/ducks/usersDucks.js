const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const REGISTER = "REGISTER";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const Types = {
  LOGIN,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
};

const initialState = { username: "", token: null };

export default function UsersReducer(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case LOGIN_SUCCESS:
      const { username, token } = action.payload;
      return { username, token };
    default:
      return state;
  }
}

export const login = (payload) => ({ type: LOGIN, payload });
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const register = (payload) => ({ type: REGISTER, payload });
export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const Actions = {
  login,
  loginSuccess,
  register,
  registerSuccess,
};
