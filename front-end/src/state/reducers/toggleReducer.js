import {
  TOGGLE_NAV,
  TOGGLE_STORE,
  TOGGLE_BUY,
  TOGGLE_RENT
} from '../actions/types';

const toggleReducer = (
  state = { navOpen: false, storeOpen: false, buyOpen: false, rentOpen: false },
  action
) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return { ...state, navOpen: !state.navOpen };
    case TOGGLE_STORE:
      return { ...state, storeOpen: !state.storeOpen };
    case TOGGLE_BUY:
      return { ...state, buyOpen: !state.buyOpen };
    case TOGGLE_RENT:
      return { ...state, rentOpen: !state.rentOpen };
    default:
      return state;
  }
};

export default toggleReducer;
