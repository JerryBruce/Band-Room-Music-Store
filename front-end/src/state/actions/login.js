import store from '../redux-store';

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

    localStorage.setItem('token', res.data.token);
    dispatch({ type: TOKEN_RECIEVED, payload: res.data });
    const state = getState();
    dispatch(tokenSend(state.loginReducer.header));
  };
};

export const tokenSend = header => {
  return async function(dispatch) {
    const res = await local.get('/admin', header);
    dispatch({ type: LOGIN_SUCCESS });
    console.log(res);
  };
};

export const logOut = () => {
  const state = store.getState();
  const header = state.loginReducer.header;
  return async function(dispatch) {
    const res = await local.post('/admin/logout', null, header);
    dispatch({ type: LOGOUT_SUCCESS });
    localStorage.setItem('token', '');
    console.log(res);
  };
};
