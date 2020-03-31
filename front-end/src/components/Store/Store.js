import React, { Component } from 'react';
import { connect } from 'react-redux';

import StoreItem from './StoreItem';
import StoreDetails from './StoreDetails';
import { getItems } from '../../state/actions/items';

class Store extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const categories = this.props.items.filter(item => {
      return item.product.includes('saxophone');
    });
    const data = categories.map(item => {
      return <h1>{item.name}</h1>;
    });
    return <div className='categories'>{data}</div>;
    // if (!props.storeOpen) {
    //   return (
    //     <div className='store'>
    //       <StoreItem />
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className='store'>
    //       <StoreDetails />
    //     </div>
    //   );
    // }
  }
}

const mapStateToProps = state => {
  return {
    storeOpen: state.toggleReducer.storeOpen,
    items: state.itemsReducer.items
  };
};

export default connect(mapStateToProps, { getItems })(Store);
