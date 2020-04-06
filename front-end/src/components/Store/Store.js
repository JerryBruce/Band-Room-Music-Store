import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StoreItem from './StoreItem';
import StoreDetails from './StoreDetails';
import DropDown from './DropDown';
import { toggleCart } from '../../state/actions/toggle';

const Store = (props) => {
  if (!props.storeOpen) {
    return (
      <div className='store'>
        <DropDown />
        <StoreItem />
        <div className='b-c'>
          <button className='btn-long btn-red'>
            <Link to='/cart'>Go To Cart</Link>
          </button>
        </div>
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

const mapStateToProps = (state) => {
  return {
    storeOpen: state.toggleReducer.storeOpen,
    categories: state.itemsReducer.categories,
    cartOpen: state.toggleReducer.cartOpen,
  };
};

export default connect(mapStateToProps, { toggleCart })(Store);
