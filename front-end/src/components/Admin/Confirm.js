import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleConfirm } from '../../state/actions/toggle';
import { getDetails, deleteItem, getItems } from '../../state/actions/items';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  async clickHandler(e) {
    await this.props.deleteItem(e.target.value);
    this.props.getItems();
    this.props.toggleConfirm();
  }

  render() {
    return (
      <div className='confirm fix-c'>
        <div className='confirm-body f-co-c-c'>
          <p>Are you sure you want to delete {this.props.currentItem.name}</p>
          <div className='confirm-btn'>
            <button
              className='confirm-btn-del'
              value={this.props.currentItem._id}
              onClick={e => this.clickHandler(e)}>
              Delete
            </button>
            <button
              className='confirm-btn-can'
              onClick={() => this.props.toggleConfirm()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentItem: state.itemsReducer.currentItem
  };
};

export default connect(mapStateToProps, {
  deleteItem,
  getDetails,
  toggleConfirm,
  getItems
})(Confirm);
