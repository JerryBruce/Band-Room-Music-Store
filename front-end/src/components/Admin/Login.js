import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import userLogin from '../../state/actions/login';

class Login extends Component {
  formSubmit = formValues => {
    userLogin(formValues);
  };

  render() {
    return (
      <div className='admin-login f-co-c-sa'>
        <div className='admin-form f-co-c-sb '>
          <h1>Admin Login</h1>
          <div className='hr'></div>
          <form onSubmit={this.props.handleSubmit(this.formSubmit)}>
            <div className=''>
              <Field
                name='username'
                component='input'
                type='text'
                placeholder='Username'
                className='entry'
              />
              <Field
                name='password'
                component='input'
                type='password'
                placeholder='Password'
                className='entry'
              />
            </div>
            <button type='submit' className='sub-btn'>
              Submit
            </button>
          </form>
          <div className='hr'></div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login'
})(Login);
