import jwt from 'jsonwebtoken';

import { local } from '../../api';
import setAuthorizationToken from '../../api/utils/setAuthorizationToken';

const userLogin = formValues => {
  const request = local
    .post('/admin/login', formValues)
    .then(response => {
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      console.log(jwt.decode(token));
    })
    .catch(error => {
      console.log(error);
    });
  return {
    type: 'LOGIN',
    payload: request
  };
};

export default userLogin;
