import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleNav } from '../../state/actions/toggle';

class NavLink extends Component {
  render() {
    return (
      <Link to={this.props.pageRoute} onClick={() => this.props.toggleNav()}>
        <li className='menu-list-item'>{this.props.pageName}</li>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return { navOpen: state.toggleReducer.navOpen };
};

export default connect(mapStateToProps, { toggleNav })(NavLink);
