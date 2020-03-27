import store from "../redux-store";

import { local } from "../../api";
import {
  LOGIN_SUCCESS,
  TOKEN_RECIEVED,
  LOGOUT_SUCCESS
} from "../actions/types";

export const userLogin = (user, pass) => {
  const body = { username: user, password: pass };

  return async function(dispatch) {
    const res = await local.post("/admin/login", body);

    sessionStorage.setItem("token", res.data.token);
    sessionStorage.setItem("isAuthenticated", true);
    dispatch({ type: TOKEN_RECIEVED, payload: res.data });
    dispatch(tokenSend());
  };
};

export const tokenSend = () => {
  return async function(dispatch, getState) {
    const state = getState();
    const header = state.loginReducer.header;
    const res = await local.get("/admin", header);
    console.log(res);
    dispatch({ type: LOGIN_SUCCESS });
  };
};

export const logOut = () => {
  const state = store.getState();
  const header = state.loginReducer.header;
  return async function(dispatch) {
    await local.post("/admin/logout", null, header);
    dispatch({ type: LOGOUT_SUCCESS });
    sessionStorage.setItem("token", "");
  };
};
