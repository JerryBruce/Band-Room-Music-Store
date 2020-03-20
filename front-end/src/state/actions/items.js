import { ITEMS_RECIEVED, ITEM_DELETED } from './types';
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

export const createItem = item => {
  return async function(dispatch, getState) {
    const state = getState();
    const headers = {
      Authorization: state.loginReducer.header.headers.Authorization,
      'Content-Type': 'application/json'
    };
    const options = {
      headers,
      data: item
    };
    console.log(options);
    const res = await local.post('/items', null, options);
    console.log(res);
    dispatch({ type: ITEM_CREATED, payload: res.data });
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
