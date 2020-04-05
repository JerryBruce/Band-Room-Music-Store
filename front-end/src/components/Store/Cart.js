import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getItems } from '../../state/actions/items';
import { addToCart, removeFromCart, decrement } from '../../state/actions/cart';

class Cart extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  handleChange(e) {
    console.log(e.target.value);
    const item = this.props.items.find(item => item._id === e.target.value);
    console.log(item);
    if (e.target.name === 'increment') {
      this.props.addToCart(item);
    } else {
      this.props.decrement(item);
    }
  }

  render() {
    return (
      <div className='cart'>
        {this.props.cartItems.length === 0 ? (
          'Cart is empty'
        ) : (
          <div> you have {this.props.cartItems.length} items in cart</div>
        )}
        {this.props.cartItems.length > 0 && (
          <div>
            <ul>
              {this.props.cartItems.map(item => (
                <li key={item._id}>
                  <p className='cart-item-name'>
                    {item.name} x {item.count}
                  </p>
                  <button
                    className='btn-red'
                    value={item._id}
                    onClick={e => this.props.removeFromCart(e.target.value)}>
                    X
                  </button>
                  <button
                    value={item._id}
                    name='increment'
                    onClick={e => this.handleChange(e)}>
                    +
                  </button>
                  <button
                    value={item._id}
                    name='decrement'
                    onClick={e => this.handleChange(e)}>
                    -
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer.cartItems,
    items: state.itemsReducer.items
  };
};

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  decrement,
  getItems
})(Cart);
