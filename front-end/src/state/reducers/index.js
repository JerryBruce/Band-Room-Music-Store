import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';
import loginReducer from './loginReducer';
import itemsReducer from './itemsReducer';

export const rootReducer = combineReducers({
  toggleReducer,
  loginReducer,
  itemsReducer
});
