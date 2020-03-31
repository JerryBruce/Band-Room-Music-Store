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
      product: this.refs.product.value,
      name: this.refs.name.value,
      brand: this.refs.brand.value,
      series: this.refs.series.value,
      stock: this.refs.stock.value,
      description: this.refs.description.value,
      rent: this.refs.rent.value,
      buy: this.refs.buy.value
    };
    const image = this.refs.image.files[0];

    await this.props.createItem(item, image);
    this.clearForm();
  }

  clearForm() {
    this.refs.product.value = '';
    this.refs.name.value = '';
    this.refs.brand.value = '';
    this.refs.series.value = '';
    this.refs.stock.value = '';
    this.refs.description.value = '';
    this.refs.rent.value = '';
    this.refs.buy.value = '';
    this.refs.image.value = '';
  }

  render() {
    return (
      <div className='create-item f-co-c-sa'>
        <form
          className='form f-co-c-sa'
          action='submit'
          onSubmit={this.handleSubmit}
          encType='multipart/form-data'>
          <input
            type='text'
            className='form-input'
            ref='product'
            placeholder='product type'
          />
          <input
            className='form-input'
            type='text'
            ref='name'
            placeholder='Name'
          />
          <input
            className='form-input'
            type='text'
            ref='brand'
            placeholder='brand'
          />
          <input
            className='form-input'
            type='text'
            ref='series'
            placeholder='series'
          />
          <input
            className='form-input'
            type='number'
            ref='stock'
            placeholder='stock'
          />
          <textarea
            className='form-message'
            type='text'
            ref='description'
            placeholder='description'
          />
          <input
            className='form-input'
            type='number'
            ref='rent'
            placeholder='rent price'
          />
          <input
            className='form-input'
            type='number'
            ref='buy'
            placeholder='buy price'
          />
          <input type='file' className='form-input' name='image' ref='image' />
          <div className='f-co-c-sb form-btns'>
            <button className='btn-long btn-green' type='submit'>
              Submit
            </button>
            <button
              className='btn-blue btn-long'
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
