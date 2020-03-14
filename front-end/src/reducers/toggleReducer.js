import { TOGGLE_MENU } from '../actions/types';

const toggleReducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isOpen: !state.isOpen };
    default:
      return { ...state, isOpen: false };
  }
};

export default toggleReducer;
