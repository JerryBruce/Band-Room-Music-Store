import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  TOKEN_RECIEVED
} from '../actions/types';

const loginReducer = (
  state = {
    token: null,
    header: null,
    isAuthenticated: false,
    tokens: null
  },
  action
) => {
  switch (action.type) {
    case TOKEN_RECIEVED:
      return {
        ...state,
        header: {
          headers: { Authorization: `Bearer ${action.payload.token}` }
        },
        token: action.payload.token
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        header: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export default loginReducer;
