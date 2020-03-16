import { local } from '../../api';
import {
  LOGIN_SUCCESS,
  TOKEN_RECIEVED,
  LOGOUT_SUCCESS
} from '../actions/types';

export const userLogin = (user, pass) => {
  const body = { username: user, password: pass };

  return async function(dispatch, getState) {
    const res = await local.post('/admin/login', body);

    dispatch({ type: TOKEN_RECIEVED, payload: res.data.token });
    const state = getState();
    dispatch(tokenSend(state.loginReducer.token));
  };
};

export const tokenSend = token => {
  return async function(dispatch) {
    const res = await local.get('/admin', token);
    dispatch({ type: LOGIN_SUCCESS });
  };
};

export const logOut = () => {
  return console.log('hi');
};
