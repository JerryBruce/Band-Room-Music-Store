import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../state/actions/login';

class Dash extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='dash'>
        <button className='logout' onClick={() => this.props.logOut()}>
          Logout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.loginReducer.isAuthenticated };
};

export default connect(mapStateToProps, { logOut: logOut })(Dash);
