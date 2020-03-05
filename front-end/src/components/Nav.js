import React, { Component } from 'react';
import NavLinks from './NavLinks';

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const navBtn = document.querySelector('.menu');
    const navList = document.querySelector('.menu-list');
    if (!this.state.menuOpen) {
      navBtn.classList.add('isOpen');
      navList.classList.add('isOpen');
      this.setState({
        menuOpen: true
      });
    } else {
      navBtn.classList.remove('isOpen');
      navList.classList.remove('isOpen');
      this.setState({
        menuOpen: false
      });
    }
  }

  render() {
    return (
      <div className='nav f-c-sb'>
        <div className='logo'>The Band Room Music Store</div>
        <div className='menu f-c-c' onClick={this.toggleMenu}>
          <div className='nav-icon'></div>
        </div>
        <NavLinks
          status={{
            isOpen: this.state.menuOpen,
            toggleMenu: this.toggleMenu.bind(this)
          }}
        />
      </div>
    );
  }
}

export default Nav;
