import {
  ADDED_TO_CART,
  REMOVED_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM
} from './types';
import { setCart } from '../redux-store';

export const addToCart = item => {
  return function(dispatch, getState) {
    let state = getState();
    const cartItems = state.cartReducer.cartItems;
    let itemInCart = false;
    cartItems.map(merch => {
      if (merch._id === item._id) {
        itemInCart = true;
        item.count++;
        dispatch({ type: INCREMENT_CART_ITEM, payload: item });
        state = getState();
      }
    });
    if (!itemInCart) {
      item.count = 1;
      dispatch({ type: ADDED_TO_CART, payload: item });
      state = getState();
    }
    setCart(state.cartReducer);
  };
};

export const decrement = item => {
  return function(dispatch, getState) {
    let state = getState();
    if (item.count > 1) {
      const stateItem = state.cartReducer.cartItems.find(
        product => product._id === item._id
      );
      stateItem.count--;
    }
    dispatch({ type: DECREMENT_CART_ITEM });
    state = getState();
    setCart(state.cartReducer);
  };
};

export const removeFromCart = id => {
  return function(dispatch, getState) {
    let state = getState();
    const items = state.cartReducer.cartItems.filter(item => item._id != id);
    dispatch({ type: REMOVED_FROM_CART, payload: items });
    state = getState();
    setCart(state.cartReducer);
  };
};
