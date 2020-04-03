import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleAll } from '../../state/actions/toggle';

class NavLink extends Component {
  render() {
    return (
      <Link to={this.props.pageRoute} onClick={() => this.props.toggleAll()}>
        <li className='menu-list-item'>{this.props.pageName}</li>
      </Link>
    );
  }
}

export default connect(null, { toggleAll })(NavLink);
