import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../state/actions/login';
import Dash from './Dash';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      pass: ''
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setPass = this.setPass.bind(this);
  }
  setUser(e) {
    this.setState({ user: e.target.value });
  }
  setPass(e) {
    this.setState({ pass: e.target.value });
  }
  formSubmit(e) {
    e.preventDefault();
    this.props.userLogin(this.state.user, this.state.pass);
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
                  onChange={this.setUser}
                />
                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  className='entry'
                  onChange={this.setPass}
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
