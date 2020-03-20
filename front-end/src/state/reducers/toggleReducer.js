import {
  TOGGLE_NAV,
  TOGGLE_STORE,
  TOGGLE_BUY,
  TOGGLE_RENT,
  TOGGLE_CREATE,
  TOGGLE_ALL,
  TOGGLE_CONFIRM
} from '../actions/types';

const toggleReducer = (
  state = {
    navOpen: false,
    storeOpen: false,
    buyOpen: false,
    rentOpen: false,
    createOpen: false,
    confirmOpen: false
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_ALL:
      return {
        ...state,
        navOpen: false,
        storeOpen: false,
        buyOpen: false,
        rentOpen: false,
        createOpen: false,
        confirmOpen: false
      };
    case TOGGLE_NAV:
      return { ...state, navOpen: !state.navOpen };
    case TOGGLE_STORE:
      return { ...state, storeOpen: !state.storeOpen };
    case TOGGLE_BUY:
      return { ...state, buyOpen: !state.buyOpen };
    case TOGGLE_RENT:
      return { ...state, rentOpen: !state.rentOpen };
    case TOGGLE_CREATE:
      return { ...state, createOpen: !state.createOpen };
    case TOGGLE_CONFIRM:
      return { ...state, confirmOpen: !state.confirmOpen };
    default:
      return state;
  }
};

export default toggleReducer;
