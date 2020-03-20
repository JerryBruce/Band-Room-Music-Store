import React from 'react';
import { connect } from 'react-redux';

import { toggleEdit } from '../../state/actions/toggle';
import { editItem, getItems } from '../../state/actions/items';

class EditItem extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const item = {
      name: this.refs.name.value,
      brand: this.refs.brand.value,
      series: this.refs.series.value,
      stock: this.refs.stock.value,
      description: this.refs.description.value,
      rent: this.refs.rent.value,
      buy: this.refs.buy.value
    };

    await this.props.editItem(item);
    this.props.getItems();
    this.props.toggleEdit();
  }

  render() {
    const current = this.props.currentItem;
    return (
      <div className='create-item f-co-c-sa'>
        <form
          className='create-form f-co-c-sa'
          action='submit'
          onSubmit={this.handleSubmit}>
          <input
            className='create-form-input'
            type='text'
            ref='name'
            placeholder={current.name}
          />
          <input
            className='create-form-input'
            type='text'
            ref='brand'
            placeholder={current.brand}
          />
          <input
            className='create-form-input'
            type='text'
            ref='series'
            placeholder={current.series}
          />
          <input
            className='create-form-input'
            type='number'
            ref='stock'
            placeholder={current.stock}
          />
          <textarea
            className='create-form-desc'
            type='text'
            ref='description'
            placeholder={current.description}
          />
          <input
            className='create-form-input'
            type='number'
            ref='rent'
            placeholder={current.rent}
          />
          <input
            className='create-form-input'
            type='number'
            ref='buy'
            placeholder={current.buy}
          />
          <div className='f-co-c-sb'>
            <button className='create-form-btn btn-green' type='submit'>
              Submit
            </button>
            <button
              className='create-form-btn btn'
              onClick={() => this.props.toggleEdit()}>
              Back to Dashboard
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editOpen: state.toggleReducer.editOpen,
    currentItem: state.itemsReducer.currentItem
  };
};

export default connect(mapStateToProps, { toggleEdit, editItem, getItems })(
  EditItem
);
