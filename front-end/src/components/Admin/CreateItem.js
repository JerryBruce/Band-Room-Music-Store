import React from 'react';
import { connect } from 'react-redux';

import { toggleCreate } from '../../state/actions/toggle';
import { createItem } from '../../state/actions/items';

class CreateItem extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const item = {
      name: this.refs.name.value,
      brand: this.refs.brand.value,
      series: this.refs.series.value,
      stock: this.refs.stock.value,
      description: this.refs.description.value,
      image: this.refs.img.value,
      rent: this.refs.rent.value,
      buy: this.refs.buy.value
    };

    this.props.createItem(item);
  }

  render() {
    return (
      <div className='dash f-co-c-sa'>
        <form
          className='f-co-c-sa'
          action='submit'
          onSubmit={this.handleSubmit}>
          <input type='text' ref='name' placeholder='Name' />
          <input type='text' ref='brand' placeholder='brand' />
          <input type='text' ref='series' placeholder='series' />
          <input type='number' ref='stock' placeholder='stock' />
          <textarea type='text' ref='description' placeholder='description' />
          <input type='text' ref='img' placeholder='image URL' />
          <input type='number' ref='rent' placeholder='rent price' />
          <input type='number' ref='buy' placeholder='buy price' />
          <button type='submit'>Submit</button>
        </form>
        <button onClick={() => this.props.toggleCreate()}>
          Back to Dashboard
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    createOpen: state.toggleReducer.createOpen
  };
};

export default connect(mapStateToProps, { toggleCreate, createItem })(
  CreateItem
);
