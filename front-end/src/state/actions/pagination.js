import {
  SET_CURRENT_CATEGORY,
  SET_PAGE_ITEMS,
  SET_CURRENT_PAGE,
  SET_PAGE_NUMBERS
} from './types';

export const setCurrentCategory = category => {
  return {
    type: SET_CURRENT_CATEGORY,
    payload: category
  };
};

export const getCurrentItems = () => {
  return function(getState) {
    const allState = getState();
    const state = allState.itemsReducer;
    const indexOfLastItem = state.currentPage * state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - state.itemsPerPage;
    const currentItems = state.items.slice(indexOfFirstItem, indexOfLastItem);
    return {
      type: SET_PAGE_ITEMS,
      payload: currentItems
    };
  };
};

export const getPageNumbers = () => {
  return function(getState) {
    const allState = getState();
    const state = allState.itemsReducer;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(state.items / state.itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return {
      type: SET_PAGE_NUMBERS,
      payload: pageNumbers
    };
  };
};

export const changePage = number => {
  return {
    type: SET_CURRENT_PAGE,
    payload: number
  };
};
