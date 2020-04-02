import React, { Component } from 'react';
import { connect } from 'react-redux';

import StoreItem from './StoreItem';
import StoreDetails from './StoreDetails';
import DropDown from './DropDown';
import Cart from './Cart';

const Store = props => {
  if (!props.storeOpen) {
    return (
      <div className='store'>
        <Cart />
        <DropDown />
        <StoreItem />
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
    categories: state.itemsReducer.categories
  };
};

export default connect(mapStateToProps)(Store);
