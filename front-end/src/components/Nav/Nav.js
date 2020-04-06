import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavList from './NavList';
import { toggleNav, toggleCart } from '../../state/actions/toggle';

export class Nav extends Component {
  render() {
    return (
      <div className='nav f-c-sb'>
        <div className='menu f-c-c' onClick={() => this.props.toggleNav()}>
          <div className='nav-icon'></div>
        </div>
        <div className='logo'></div>
        <Link to='/cart'>
          <div className='cart-img'>
            {this.props.cartTotal > 0 && (
              <div className='cart-count f-c-c'>{this.props.cartTotal}</div>
            )}
          </div>
        </Link>
        {this.props.navOpen && <NavList />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navOpen: state.toggleReducer.navOpen,
    cartItems: state.cartReducer.cartItems,
    cartTotal: state.cartReducer.cartTotal,
  };
};

export default connect(mapStateToProps, { toggleNav, toggleCart })(Nav);
