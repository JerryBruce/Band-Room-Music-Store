import {
  ADDED_TO_CART,
  REMOVED_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
} from '../actions/types';

export const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartCost: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartTotal: state.cartTotal + 1,
      };
    case REMOVED_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case INCREMENT_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.splice(action.index, 1, action.payload),
      };
    case DECREMENT_CART_ITEM:
      return {
        ...state,
        cartTotal: state.cartTotal - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
