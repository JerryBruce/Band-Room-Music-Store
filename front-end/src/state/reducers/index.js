import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import toggleReducer from './toggleReducer';
import loginReducer from './loginReducer';
import errorReducer from './errorReducer';

export const rootReducer = combineReducers({
  toggleReducer,
  loginReducer,
  errorReducer,
  form: formReducer
});
