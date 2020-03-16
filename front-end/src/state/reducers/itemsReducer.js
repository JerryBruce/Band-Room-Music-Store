import { ITEMS_RECIEVED, ITEM_RECIEVED } from '../actions/types';

const itemsReducer = (
  state = {
    items: [],
    currentItem: null
  },
  action
) => {
  switch (action.type) {
    case ITEMS_RECIEVED:
      return {
        ...state,
        items: action.payload
      };
    case ITEM_RECIEVED:
      return {
        ...state,
        currentItem: state.items.find(item => item._id === action.payload)
      };
    default:
      return state;
  }
};

export default itemsReducer;
