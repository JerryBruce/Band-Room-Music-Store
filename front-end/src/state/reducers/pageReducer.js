import {
  SET_CURRENT_CATEGORY,
  SET_PAGE_ITEMS,
  SET_CURRENT_PAGE,
  SET_PAGE_NUMBERS
} from '../actions/types';

const pageReducer = (
  state = {
    currentCategory: 'featured',
    currentPage: 1,
    itemsPerPage: 10,
    currentItems: [],
    pageNumbers: []
  },
  action
) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload
      };
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload
      };
    }
    case SET_PAGE_ITEMS:
      return {
        ...state,
        currentItems: action.payload
      };

    case SET_PAGE_NUMBERS:
      return {
        ...state,
        pageNumbers: action.payload
      };
    default:
      return state;
  }
};

export default pageReducer;
