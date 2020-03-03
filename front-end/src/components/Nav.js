import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return (
      <div className='nav flex center_space'>
        <div className='logo'>The Band Room Music Store</div>
        <div className='menu flex center'>
          <div className='icon'></div>
        </div>
      </div>
    );
  }
}

export default Nav;
