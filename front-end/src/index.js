import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './state/redux-store';
import setAuthorizationToken from './api/utils/setAuthorizationToken';

setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
