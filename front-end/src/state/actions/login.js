import { local } from '../../api';
import {
  LOGIN_SUCCESS,
  TOKEN_RECIEVED,
  LOGOUT_SUCCESS
} from '../actions/types';
import Axios from 'axios';

export const userLogin = (user, pass) => {
  const body = { username: user, password: pass };
  return async function(dispatch) {
    const res = await local.post('/admin/login', body);
    const loginObject = {
      loginReducer: {
        token: res.data.token,
        isAuthenticated: true,
        header: { Authorization: `Bearer ${res.data.token}` }
      }
    };
    const serializedLogin = JSON.stringify(loginObject);
    sessionStorage.setItem('login', serializedLogin);
    dispatch({ type: TOKEN_RECIEVED, payload: res.data });
    dispatch(tokenSend());
  };
};

export const tokenSend = () => {
  return async function(dispatch, getState) {
    const state = getState();
    const Authorization = state.loginReducer.header.Authorization;
    const options = {
      headers: {
        Authorization
      },
      method: 'GET',
      url: 'http://localhost:3000/admin'
    };
    await Axios(options);
    dispatch({ type: LOGIN_SUCCESS });
  };
};

export const logOut = () => {
  return async function(dispatch, getState) {
    const state = getState();
    const Authorization = state.loginReducer.header.Authorization;
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/admin/logout',
      headers: { Authorization }
    };
    await Axios(options);
    sessionStorage.setItem('login', '');
    dispatch({ type: LOGOUT_SUCCESS });
  };
};
