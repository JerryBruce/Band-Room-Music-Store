import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateItem from './CreateItem';
import { logOut } from '../../state/actions/login';
import { toggleCreate } from '../../state/actions/toggle';
import { getItems, deleteItem, getDetails } from '../../state/actions/items';

class Dash extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.props.getItems();
  }

  async clickHandler(e) {
    await this.props.deleteItem(e.target.value);
    this.props.getItems();
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
              <button className='store-item-info' value={item._id}>
                Edit Item
              </button>
              <button value={item._id} onClick={e => this.clickHandler(e)}>
                Delete Item
              </button>
            </div>
          </div>
        </div>
      );
    });
    if (!this.props.createOpen) {
      return (
        <div className='dash f-co-c-sa'>
          <button className='addItem' onClick={() => this.props.toggleCreate()}>
            Add Item
          </button>
          <button className='logout' onClick={() => this.props.logOut()}>
            Logout
          </button>
          <div className='if fw f-c-c'>{items}</div>
        </div>
      );
    } else {
      return <CreateItem />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    createOpen: state.toggleReducer.createOpen,
    currentItem: state.itemsReducer.currentItem,
    items: state.itemsReducer.items
  };
};

export default connect(mapStateToProps, {
  logOut,
  toggleCreate,
  getItems,
  deleteItem,
  getDetails
})(Dash);
