import {
  TOGGLE_NAV,
  TOGGLE_STORE,
  TOGGLE_RENT,
  TOGGLE_BUY,
  TOGGLE_CREATE,
  TOGGLE_ALL,
  TOGGLE_CONFIRM,
  TOGGLE_EDIT,
  TOGGLE_EDIT_IMAGE,
  TOGGLE_CART
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

export const toggleConfirm = () => {
  return {
    type: TOGGLE_CONFIRM
  };
};

export const toggleEditImage = () => {
  return {
    type: TOGGLE_EDIT_IMAGE
  };
};

export const toggleEdit = () => {
  return {
    type: TOGGLE_EDIT
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  };
};
