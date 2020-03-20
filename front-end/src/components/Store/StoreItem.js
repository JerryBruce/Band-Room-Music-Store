import React from 'react';
import { connect } from 'react-redux';

import StoreDetails from './StoreDetails';
import { getItems } from '../../state/actions/items';
import { getDetails } from '../../state/actions/items';
import { toggleStore } from '../../state/actions/toggle';

class StoreItem extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.props.getItems();
  }

  clickHandler(e) {
    this.props.getDetails(e.target.value);
    this.props.toggleStore();
  }

  render() {
    const items = this.props.items.map(item => {
      return (
        <div className='store-item f-co-c-sb' key={item._id}>
          <div className='store-item-container as-c js-c'>
            <img src={item.image} alt='item' className='store-item-image' />
          </div>
          <div className='store-item-details f-co-l-sa'>
            <div className='store-item-name'>{item.name}</div>
            <div className='store-item-price'>
              As Low as
              <br />
              <span className='red'>${item.rent}/Month</span>
            </div>
            <div className='store-item-stock'>
              <span className='green'>In Stock</span>
            </div>
            <div className='store-item-btns f-c-sa'>
              <button
                className='store-item-info'
                value={item._id}
                onClick={e => this.clickHandler(e)}>
                More Details
              </button>
            </div>
          </div>
        </div>
      );
    });
    return !this.props.storeOpen ? (
      <div className='if fw f-c-c'>{items}</div>
    ) : (
      <StoreDetails />
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items,
    currentItem: state.itemsReducer.currentItem,
    storeOpen: state.toggleReducer.storeOpen
  };
};

export default connect(mapStateToProps, {
  getItems,
  getDetails,
  toggleStore
})(StoreItem);
