import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className='admin-login f-co-c-sa'>
        <div className='admin form f-co-c-sb '>
          <h1>Admin Login</h1>
          <div className='hr'></div>
          <form action='login f-co-c-sb'>
            <input type='text' className='entry' />
            <input type='password' className='entry' />
            <input type='submit' className='sub-btn' />
          </form>
          <div className='hr'></div>
        </div>
      </div>
    );
  }
}
