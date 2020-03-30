import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

// const saveToSessionStorage = state => {
//   try {
//     const serializedState = JSON.stringify(state);
//     sessionStorage.setItem('login', serializedState);
//   } catch (e) {
//     console.log(e);
//   }
// };

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
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// store.subscribe(()=> saveToSessionStorage(store.getState()));

export default store;
