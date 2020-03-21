import React from 'react';
import { connect } from 'react-redux';

import { toggleCreate } from '../../state/actions/toggle';
import { createItem, getItems } from '../../state/actions/items';

class CreateItem extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
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

    await this.props.createItem(item);
    this.props.getItems();
    this.clearForm();
  }

  clearForm() {
    this.refs.name.value = '';
    this.refs.brand.value = '';
    this.refs.series.value = '';
    this.refs.stock.value = '';
    this.refs.description.value = '';
    this.refs.rent.value = '';
    this.refs.buy.value = '';
  }

  render() {
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
            placeholder='Name'
          />
          <input
            className='create-form-input'
            type='text'
            ref='brand'
            placeholder='brand'
          />
          <input
            className='create-form-input'
            type='text'
            ref='series'
            placeholder='series'
          />
          <input
            className='create-form-input'
            type='number'
            ref='stock'
            placeholder='stock'
          />
          <textarea
            className='create-form-desc'
            type='text'
            ref='description'
            placeholder='description'
          />
          <input
            className='create-form-input'
            type='number'
            ref='rent'
            placeholder='rent price'
          />
          <input
            className='create-form-input'
            type='number'
            ref='buy'
            placeholder='buy price'
          />
          <div className='f-co-c-sb'>
            <button className='create-form-btn btn-green' type='submit'>
              Submit
            </button>
            <button
              className='create-form-btn btn'
              onClick={() => this.props.toggleCreate()}>
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
    createOpen: state.toggleReducer.createOpen
  };
};

export default connect(mapStateToProps, { toggleCreate, createItem, getItems })(
  CreateItem
);
