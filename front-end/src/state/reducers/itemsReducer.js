import {
  ITEMS_RECIEVED,
  ITEM_RECIEVED,
  ITEM_CREATED,
  ITEM_DELETED
} from "../actions/types";

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
        items: [...state.items, action.payload]
      };
    case ITEM_DELETED:
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.payload),
          ...state.items.slice(action.payload + 1)
        ]
      };
    default:
      return state;
  }
};

export default itemsReducer;
