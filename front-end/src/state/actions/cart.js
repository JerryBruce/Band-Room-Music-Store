import {
  ADDED_TO_CART,
  REMOVED_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM
} from './types';

export const addToCart = item => {
  return function(dispatch, getState) {
    let state = getState();
    const cartItems = state.cartReducer.cartItems;
    let itemInCart = false;
    cartItems.map(obj => {
      if (obj._id === item._id) {
        itemInCart = true;
        item.count++;
        const index = state.cartReducer.cartItems.findIndex(
          product => product._id === item._id
        );
        dispatch({ type: INCREMENT_CART_ITEM, index, payload: item });
        state = getState();
      }
      return item;
    });
    if (!itemInCart) {
      item.count = 1;
      dispatch({ type: ADDED_TO_CART, payload: item });
      state = getState();
    }
    return item;
  };
};

export const decrement = item => {
  return function(dispatch, getState) {
    let state = getState();
    if (item.count > 1) {
      item.count--;
    }
    const index = state.cartReducer.cartItems.findIndex(
      product => product.id === item.id
    );
    dispatch({ type: DECREMENT_CART_ITEM, index, payload: item });
    state = getState();
  };
};

export const removeFromCart = id => {
  return function(dispatch, getState) {
    let state = getState();
    const items = state.cartReducer.cartItems.filter(item => item._id !== id);
    dispatch({ type: REMOVED_FROM_CART, payload: items });
    state = getState();
  };
};
