import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavLink extends Component {
  closeMenu() {
    document.querySelector('.menu-list').classList.remove('isOpen');
    document.querySelector('.menu').classList.remove('isOpen');
  }

  render() {
    return (
      <Link to={this.props.pageRoute} onClick={this.closeMenu}>
        <li className='menu-list-item'>{this.props.pageName}</li>
      </Link>
    );
  }
}
