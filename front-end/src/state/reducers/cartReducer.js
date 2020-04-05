import {
  ADDED_TO_CART,
  REMOVED_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM
} from '../actions/types';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADDED_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case REMOVED_FROM_CART:
      return {
        ...state,
        cartItems: action.payload
      };
    case INCREMENT_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.splice(action.index, 1, action.payload)
      };
    case DECREMENT_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.splice(action.index, 1, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
