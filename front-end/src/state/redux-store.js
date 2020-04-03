import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const setCart = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadCart = () => {
  try {
    const cartState = localStorage.getItem('cart');
    if (cartState === null) return undefined;
    return JSON.parse(cartState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const loadAuth = () => {
  try {
    const authState = sessionStorage.getItem('login');
    if (authState === null) return undefined;
    return JSON.parse(authState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const cart = loadCart();
const auth = loadAuth();

const combineState = () => {
  try {
    const persisted = {
      loginReducer: auth.loginReducer,
      cartReducer: cart
    };
    if (persisted === undefined) return (persisted = {});
    return persisted;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const state = combineState();

const store = createStore(
  rootReducer,
  state,
  compose(applyMiddleware(thunk, logger))
);

export default store;
