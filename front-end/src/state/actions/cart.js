import { ADDED_TO_CART, REMOVED_FROM_CART } from './types';

export const addToCart = item => {
  return async function(dispatch, getState) {
    console.log(item);
    await dispatch({
      type: ADDED_TO_CART,
      payload: item
    });
    const state = getState();
    const serializedCart = JSON.stringify(state.cartReducer.cartItems);
    localStorage.setItem('cart', serializedCart);
  };
};

export const removeFromCart = id => {
  return {
    type: REMOVED_FROM_CART,
    payload: { id }
  };
};
