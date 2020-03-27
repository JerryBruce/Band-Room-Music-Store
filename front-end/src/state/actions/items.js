import {
  ITEMS_RECIEVED,
  ITEM_DELETED,
  ITEM_UPDATED,
  ITEM_RECIEVED,
  ITEM_CREATED
} from "./types";
import { local } from "../../api";
import Axios from "axios";

export const getItems = () => {
  return async function(dispatch) {
    const res = await local.get("/items");
    dispatch({ type: ITEMS_RECIEVED, payload: res.data });
  };
};

export const getDetails = item => {
  return {
    type: ITEM_RECIEVED,
    payload: item
  };
};

export const createItem = (item, image) => {
  return async function(dispatch, getState) {
    const state = getState();
    const Authorization = state.loginReducer.header.headers.Authorization;
    const fd = new FormData();
    fd.append("image", image);
    const options = {
      headers: {
        Authorization
      },
      data: item,
      method: "POST",
      url: "http://localhost:3000/items"
    };
    const imageOptions = {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data"
      }
    };
    const res = await Axios(options);
    await local.patch(`/items/${res.data._id}/image`, fd, imageOptions);
    dispatch({ type: ITEM_CREATED, payload: res.data });
  };
};

export const editItem = item => {
  return async function(dispatch, getState) {
    const state = getState();
    const Authorization = state.loginReducer.header.headers.Authorization;
    const id = state.itemsReducer.currentItem._id;
    const options = {
      headers: {
        Authorization
      },
      data: item
    };
    const res = await local.patch(`/items/${id}`, null, options);
    dispatch({ type: ITEM_UPDATED });
  };
};

export const editImage = image => {
  return async function(dispatch, getState) {
    const state = getState();
    const Authorization = state.loginReducer.header.headers.Authorization;
    const current = state.itemsReducer.currentItem._id;
    const fd = new FormData();
    fd.append("image", image);
    const imageOptions = {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data"
      }
    };
    await local.patch(`/items/${current}/image`, fd, imageOptions);
    dispatch({ type: ITEM_UPDATED });
  };
};

export const deleteItem = item => {
  return async function(dispatch, getState) {
    const state = getState();
    const header = {
      headers: {
        Authorization: state.loginReducer.header.headers.Authorization,
        "Content-Type": "application/json"
      }
    };
    const res = await local.delete(`/items/${item}`, header);
    console.log(res);
    dispatch({
      type: ITEM_DELETED,
      payload: item
    });
  };
};
