import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../state/actions/cart';

class Cart extends Component {
  render() {
    return (
      <div className='cart'>
        {this.props.cartItems.length === 0 ? (
          'Cart is empty'
        ) : (
          <div> you have {this.props.cartItems.length} items in cart</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer.cartItems
  };
};

export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);
