import { ITEMS_RECIEVED, ITEM_RECIEVED, ITEM_CREATED } from '../actions/types';

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
    case ITEM_CREATED:
      return {
        ...state,
        items: state.items.push(action.payload)
      };
    default:
      return state;
  }
};

export default itemsReducer;
