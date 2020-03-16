import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import toggle from '../../state/actions/toggle';

class NavLink extends Component {
  render() {
    return (
      <Link to={this.props.pageRoute} onClick={() => this.props.toggle()}>
        <li className='menu-list-item'>{this.props.pageName}</li>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return { isOpen: state.toggleReducer.isOpen };
};

export default connect(mapStateToProps, { toggle: toggle })(NavLink);
