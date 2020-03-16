import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import toggleReducer from './toggleReducer';
import loginReducer from './loginReducer';

export const rootReducer = combineReducers({
  toggleReducer,
  loginReducer,
  form: formReducer
});
