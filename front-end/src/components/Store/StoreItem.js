import React from 'react';
import { connect } from 'react-redux';

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
    const categorized = this.props.items.filter(item => {
      return item.product.includes(this.props.currentCategory);
    });
    const items = categorized.map(item => {
      return (
        <div className='store-item f-co-c-sb' key={item._id}>
          <h1 className='store-item-name js-c'>{item.name}</h1>
          <img
            src={`http://localhost:3000/items/${item._id}/small`}
            alt='item'
            className='store-item-image'
          />
          <div className='store-item-details f-co-l-sa'>
            <p className='store-item-series'>{item.series}</p>
            <div className='store-item-price'>
              As Low as
              <br />
              <span className='red'>${item.rent}/Month</span>
            </div>
            <div className='store-item-stock'>
              <span className='green'>In Stock</span>
            </div>
          </div>
          <div className='store-item-btns'>
            <button
              className='btn btn-black'
              value={item._id}
              onClick={e => this.clickHandler(e)}>
              More Details
            </button>
          </div>
        </div>
      );
    });
    return <div className='store-items if fw'>{items}</div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items,
    currentItem: state.itemsReducer.currentItem,
    storeOpen: state.toggleReducer.storeOpen,
    currentCategory: state.pageReducer.currentCategory
  };
};

export default connect(mapStateToProps, {
  getItems,
  getDetails,
  toggleStore
})(StoreItem);
