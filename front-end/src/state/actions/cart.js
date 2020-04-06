import {
  ADDED_TO_CART,
  REMOVED_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
} from './types';

export const addToCart = (item) => {
  return function (dispatch) {
    dispatch({ type: ADDED_TO_CART, payload: item });
  };
};

export const decrement = (item) => {
  return function (dispatch) {
    if (item.count > 1) {
      item.count--;
    }
    dispatch({ type: DECREMENT_CART_ITEM });
  };
};

export const removeFromCart = (id) => {
  return function (dispatch, getState) {
    let state = getState();
    const items = state.cartReducer.cartItems.filter((item) => item._id !== id);
    dispatch({ type: REMOVED_FROM_CART, payload: items });
    state = getState();
  };
};
