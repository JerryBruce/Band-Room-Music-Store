import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavList from './NavList';
import { toggleNav } from '../../state/actions/toggle';

export class Nav extends Component {
  render() {
    return (
      <div className='nav f-c-sb'>
        <div className='logo'>The Band Room Music Store</div>
        <div className='menu f-c-c' onClick={() => this.props.toggleNav()}>
          <div className='nav-icon'></div>
        </div>
        {this.props.navOpen && <NavList />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { navOpen: state.toggleReducer.navOpen };
};

export default connect(mapStateToProps, { toggleNav })(Nav);
