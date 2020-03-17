import React from 'react';

import Rent from './Rent';
import Buy from './Buy';
import { connect } from 'react-redux';
import { toggleStore, toggleRent, toggleBuy } from '../../state/actions/toggle';

const StoreDetails = props => {
  const item = props.currentItem;
  if (props.rentOpen) {
    return <Rent />;
  } else if (props.buyOpen) {
    return <Buy />;
  } else {
    return (
      <div className=''>
        <h1>{item.name}</h1>
        <img src={item.image} alt='' />
        <h3>{item.brand}</h3>
        <h3>{item.series}</h3>
        <p>{item.description}</p>
        <h3>{item.buy}</h3>
        <h3>{item.rent}</h3>
        <button onClick={() => props.toggleRent()}>Rental Inquiry</button>
        <button onClick={() => props.toggleBuy()}>Buy Now</button>
        <button onClick={() => props.toggleStore()}>Back To Store</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items,
    currentItem: state.itemsReducer.currentItem,
    storeOpen: state.toggleReducer.storeOpen,
    rentOpen: state.toggleReducer.rentOpen,
    buyOpen: state.toggleReducer.buyOpen
  };
};

export default connect(mapStateToProps, { toggleStore, toggleRent, toggleBuy })(
  StoreDetails
);
