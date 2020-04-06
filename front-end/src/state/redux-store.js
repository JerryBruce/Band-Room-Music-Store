import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { initialState } from './reducers/cartReducer';

const setCart = (state) => {
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
    if (cartState === null || undefined)
      return {
        cartReducer: {
          cartItems: initialState.cartItems,
          cartTotal: initialState.cartTotal,
          cartCost: initialState.cartCost,
        },
      };
    console.log(cartState);
    return JSON.parse(cartState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const loadAuth = () => {
  try {
    const authState = sessionStorage.getItem('login');
    if (authState === null || undefined) {
      return { loginReducer: {} };
    }
    return JSON.parse(authState);
  } catch (e) {
    console.log(e);
    return { loginReducer: {} };
  }
};

const cart = loadCart();
const auth = loadAuth();

const combineState = () => {
  let persisted = {
    loginReducer: auth.loginReducer,
    cartReducer: cart.cartReducer,
  };
  if (persisted === undefined) {
    return (persisted = {});
  }
  return persisted;
};

const state = combineState();
console.log(state);

const store = createStore(
  rootReducer,
  state,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => setCart({ cartReducer: store.getState().cartReducer }));

export default store;
