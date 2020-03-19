import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateItem from './CreateItem';
import { logOut } from '../../state/actions/login';
import { toggleCreate } from '../../state/actions/toggle';

class Dash extends Component {
  render() {
    console.log(this.props);
    if (!this.props.createOpen) {
      return (
        <div className='dash f-co-c-sa'>
          <button className='addItem' onClick={() => this.props.toggleCreate()}>
            Add Item
          </button>
          <button className='logout' onClick={() => this.props.logOut()}>
            Logout
          </button>
        </div>
      );
    } else {
      return <CreateItem />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    createOpen: state.toggleReducer.createOpen
  };
};

export default connect(mapStateToProps, { logOut, toggleCreate })(Dash);
