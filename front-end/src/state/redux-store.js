import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import { getItems } from './actions/items';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

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

const store = createStore(
  rootReducer,
  (cart, auth),
  compose(applyMiddleware(thunk, logger))
);

export default store;
