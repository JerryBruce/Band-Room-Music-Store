import {
  ITEMS_RECIEVED,
  SET_CURRENT_ITEM,
  ITEM_CREATED,
  ITEM_DELETED,
  CATEGORIES_SET,
} from '../actions/types';

const itemsReducer = (
  state = {
    items: [],
    categories: [],
    currentItem: null,
  },
  action
) => {
  switch (action.type) {
    case ITEMS_RECIEVED:
      console.log(action.payload);
      return {
        ...state,
        items: action.payload,
      };
    case CATEGORIES_SET:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: state.items.find((item) => item._id === action.payload),
      };
    case ITEM_CREATED:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ITEM_DELETED:
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.payload),
          ...state.items.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};

export default itemsReducer;
