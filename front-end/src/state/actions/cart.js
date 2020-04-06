import { ADDED_TO_CART, REMOVED_FROM_CART } from './types';

export const addToCart = (item) => {
  return function (dispatch, getState) {
    const state = getState();
    const cartItems = state.cartReducer.cartItems;
    console.log(cartItems.length);
    if (cartItems.length === 0) {
      dispatch({ type: ADDED_TO_CART, payload: item });
    }
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i]._id === item._id) {
        console.log('item already in cart');
      } else if (!cartItems.includes(item)) {
        console.log('im the culprit');
        dispatch({ type: ADDED_TO_CART, payload: item });
      }
    }
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
