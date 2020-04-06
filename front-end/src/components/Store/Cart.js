import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getItems } from '../../state/actions/items';
import { addToCart, removeFromCart, decrement } from '../../state/actions/cart';

class Cart extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  handleChange(e) {
    if (e.target.name === 'increment') {
      this.props.addToCart();
    } else {
      this.props.decrement();
    }
  }

  render() {
    return (
      <div className='cart'>
        <h1>Cart</h1>
        {this.props.cartTotal === 0 ? (
          <h3>Cart Is Empty</h3>
        ) : (
          <div> you have {this.props.cartTotal} items in cart</div>
        )}
        {this.props.cartTotal != 0 && (
          <div>
            <ul>
              {this.props.cartItems.map((item) => (
                <li key={item._id}>
                  <p className='cart-item-name'>
                    {item.name} x {item.count}
                  </p>
                  <button
                    className='btn-red'
                    value={item._id}
                    onClick={(e) => this.props.removeFromCart(e.target.value)}>
                    X
                  </button>
                  <button
                    name='increment'
                    onClick={(e) => this.handleChange(e)}>
                    +
                  </button>
                  <button
                    name='decrement'
                    onClick={(e) => this.handleChange(e)}>
                    -
                  </button>
                </li>
              ))}
            </ul>
            <div className='b-c'>
              <button className='btn btn-red'>
                <Link to='/checkout'>Check Out</Link>
              </button>
            </div>
          </div>
        )}
        <div className='b-c'>
          <button className='btn btn-black'>
            <Link to='/'>Close</Link>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartTotal: state.cartReducer.cartTotal,
    items: state.itemsReducer.items,
    cartItems: state.cartReducer.cartItems,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  decrement,
  getItems,
})(Cart);
