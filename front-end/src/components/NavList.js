import React, { Component } from 'react';

import NavLink from './NavLink';

export default class NavList extends Component {
  render() {
    return (
      <ul className='menu-list'>
        <NavLink pageName={'Home'} pageRoute={'/'} />
        <NavLink pageName={'About'} pageRoute={'/about'} />
        <NavLink pageName={'Store'} pageRoute={'/store'} />
        <NavLink pageName={'Contact'} pageRoute={'/contact'} />
        <NavLink pageName={'Gallery'} pageRoute={'/gallery'} />
        <NavLink pageName={'Login'} pageRoute={'/cato'} />
        <NavLink pageName={'Admin'} pageRoute={'/admin-view'} />
      </ul>
    );
  }
}
