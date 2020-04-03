import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import StoreItem from './StoreItem';
import StoreDetails from './StoreDetails';
import DropDown from './DropDown';
import Cart from './Cart';
import { toggleCart } from '../../state/actions/toggle';

const Store = props => {
  Modal.setAppElement('#root');
  if (!props.storeOpen) {
    return (
      <div className='store'>
        <DropDown />
        <StoreItem />
        <Modal isOpen={props.cartOpen}>
          <h1>Cart</h1>
          <p>Cart Items</p>
          <Cart />
          <button>Check Out</button>
          <button onClick={() => props.toggleCart()}>Close</button>
        </Modal>
      </div>
    );
  } else {
    return (
      <div className='store'>
        <StoreDetails />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    storeOpen: state.toggleReducer.storeOpen,
    categories: state.itemsReducer.categories,
    cartOpen: state.toggleReducer.cartOpen
  };
};

export default connect(mapStateToProps, { toggleCart })(Store);
