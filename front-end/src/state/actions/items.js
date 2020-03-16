import { ITEMS_RECIEVED } from './types';
import { ITEM_RECIEVED } from './types';
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
