import { ITEMS_RECIEVED, ITEM_DELETED, ITEM_UPDATED } from './types';
import { ITEM_RECIEVED } from './types';
import { ITEM_CREATED } from './types';
import { local } from '../../api';

export const getItems = () => {
  return async function(dispatch) {
    const res = await local.get('/items');
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
    fd.append('image', image);
    const options = {
      headers: {
        Authorization
      },
      data: item
    };
    const imageOptions = {
      headers: {
        Authorization,
        'Content-Type': 'multipart/form-data'
      }
    };
    const res = await local.post('/items', null, options);
    const upload = await local.patch(
      `/items/${res.data._id}/image`,
      fd,
      imageOptions
    );
    dispatch({ type: ITEM_CREATED, payload: res.data });
  };
};

export const editItem = item => {
  return async function(dispatch, getState) {
    const state = getState();
    const id = state.itemsReducer.currentItem._id;
    const options = {
      headers: {
        Authorization: state.loginReducer.header.headers.Authorization
      },
      data: item
    };
    await local.patch(`/items/${id}`, null, options);
    dispatch({
      type: ITEM_UPDATED,
      payload: item
    });
  };
};

export const deleteItem = item => {
  return async function(dispatch, getState) {
    const state = getState();
    const header = {
      headers: {
        Authorization: state.loginReducer.header.headers.Authorization,
        'Content-Type': 'application/json'
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
