import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../state/actions/login';
import Dash from './Dash';

class Login extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }
  formSubmit(e) {
    e.preventDefault();
    this.props.userLogin(this.refs.user.value, this.refs.pass.value);
  }
  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div className='admin-login f-co-c-sa'>
          <div className='admin-form f-co-c-sb '>
            <h1>Admin Login</h1>
            <div className='hr'></div>
            <form onSubmit={this.formSubmit}>
              <div className=''>
                <input
                  name='username'
                  type='text'
                  placeholder='Username'
                  className='entry'
                  ref='user'
                />
                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  className='entry'
                  ref='pass'
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
    } else {
      return <Dash />;
    }
  }
}

const mapStateToProps = state => {
  return {
    token: state.loginReducer.token,
    isAuthenticated: state.loginReducer.isAuthenticated
  };
};

export default connect(mapStateToProps, { userLogin })(Login);
