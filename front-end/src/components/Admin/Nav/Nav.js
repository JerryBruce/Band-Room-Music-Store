import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavList from './NavList';
import { toggleNav, toggleCart } from '../../state/actions/toggle';

export class Nav extends Component {
  render() {
    console.log(this.props.cartItems.length);
    return (
      <div className='nav f-c-sb'>
        <div className='menu f-c-c' onClick={() => this.props.toggleNav()}>
          <div className='nav-icon'></div>
        </div>
        <div className='logo'></div>
        <div className='cart-img' onClick={() => this.props.toggleCart()}>
          {this.props.cartItems.length > 0 ? (
            <div className='cart-count f-c-c'>
              {this.props.cartItems.length}
            </div>
          ) : (
            ''
          )}
        </div>
        {this.props.navOpen && <NavList />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navOpen: state.toggleReducer.navOpen,
    cartItems: state.cartReducer.cartItems
  };
};

export default connect(mapStateToProps, { toggleNav, toggleCart })(Nav);
