import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';
import loginReducer from './loginReducer';
import itemsReducer from './itemsReducer';
import pageReducer from './pageReducer';

export const rootReducer = combineReducers({
  toggleReducer,
  loginReducer,
  itemsReducer,
  pageReducer
});
