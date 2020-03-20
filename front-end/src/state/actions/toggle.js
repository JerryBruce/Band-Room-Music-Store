import {
  TOGGLE_NAV,
  TOGGLE_STORE,
  TOGGLE_RENT,
  TOGGLE_BUY,
  TOGGLE_CREATE,
  TOGGLE_ALL
} from './types';

export const toggleAll = () => {
  return {
    type: TOGGLE_ALL
  };
};

export const toggleNav = () => {
  return {
    type: TOGGLE_NAV
  };
};

export const toggleStore = () => {
  return {
    type: TOGGLE_STORE
  };
};

export const toggleBuy = () => {
  return {
    type: TOGGLE_BUY
  };
};

export const toggleRent = () => {
  return {
    type: TOGGLE_RENT
  };
};

export const toggleCreate = () => {
  return {
    type: TOGGLE_CREATE
  };
};
