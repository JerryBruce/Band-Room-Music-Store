import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  AUTH_ERROR,
  USER_LOADING,
  USER_LOADED,
  TOKEN_RECIEVED
} from '../actions/types';

const loginReducer = (
  state = { token: null, isAuthenticated: false },
  action
) => {
  switch (action.type) {
    case TOKEN_RECIEVED:
      return {
        ...state,
        token: { headers: { Authorization: `Bearer ${action.payload}` } }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    default:
      return state;
  }
};

export default loginReducer;
