import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import { getItems } from './actions/items';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const loadFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('login');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedState = loadFromSessionStorage();

const store = createStore(
  rootReducer,
  persistedState,
  compose(applyMiddleware(thunk, logger))
);

store.subscribe(() => getItems());

export default store;
