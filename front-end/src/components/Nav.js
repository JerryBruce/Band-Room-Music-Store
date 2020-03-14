import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavList from './NavList';
import { toggle } from '../actions/toggle';

export class Nav extends Component {
  render() {
    return (
      <div className='nav f-c-sb'>
        <div className='logo'>The Band Room Music Store</div>
        <div className='menu f-c-c' onClick={() => this.props.toggle()}>
          <div className='nav-icon'></div>
        </div>
        {this.props.isOpen && <NavList />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isOpen: state.toggleReducer.isOpen };
};

export default connect(mapStateToProps, { toggle: toggle })(Nav);
