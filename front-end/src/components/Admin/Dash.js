import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditItem from './EditItem';
import CreateItem from './CreateItem';
import Confirm from './Confirm';
import { logOut } from '../../state/actions/login';
import {
  toggleCreate,
  toggleConfirm,
  toggleEdit
} from '../../state/actions/toggle';
import { getItems, getDetails } from '../../state/actions/items';

class Dash extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  async handleEdit(e) {
    await this.props.getDetails(e.target.value);
    this.props.toggleEdit();
  }

  async handleDelete(e) {
    await this.props.getDetails(e.target.value);
    this.props.toggleConfirm();
  }
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const items = this.props.items.map(item => {
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
          <div className='item-btns f-co-c-sb'>
            <button
              disabled={this.props.confirmOpen}
              className='btn btn-black'
              value={item._id}
              onClick={e => this.handleEdit(e)}>
              Edit Item
            </button>
            <button
              disabled={this.props.confirmOpen}
              className='btn btn-red'
              value={item._id}
              onClick={e => this.handleDelete(e)}>
              Delete Item
            </button>
          </div>
        </div>
      );
    });
    if (!this.props.createOpen && !this.props.editOpen) {
      return (
        <div className='dash f-co-c-sa'>
          {this.props.confirmOpen ? <Confirm /> : ''}
          <div className='dash-btns f-co-c-sa'>
            <button
              className='btn-long btn-black'
              onClick={() => this.props.toggleCreate()}>
              Add Item
            </button>
            <button
              className='btn-long btn-black'
              onClick={() => this.props.logOut()}>
              Logout
            </button>
          </div>
          <div className='store-items if fw'>{items}</div>
        </div>
      );
    } else if (this.props.createOpen && !this.props.editOpen) {
      return <CreateItem />;
    } else if (!this.props.createOpen && this.props.editOpen) {
      return <EditItem />;
    } else return <h1>something went bad</h1>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    createOpen: state.toggleReducer.createOpen,
    items: state.itemsReducer.items,
    confirmOpen: state.toggleReducer.confirmOpen,
    editOpen: state.toggleReducer.editOpen
  };
};

export default connect(mapStateToProps, {
  logOut,
  toggleCreate,
  getItems,
  getDetails,
  toggleConfirm,
  toggleEdit
})(Dash);
