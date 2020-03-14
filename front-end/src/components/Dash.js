import React, { Component } from 'react';

class Dash extends Component {
  render() {
    return (
      <div className='dash f-co-c-sa'>
        <h1>User Dashboard</h1>
        <button className='prompt'>Create new Item</button>
        <button className='prompt'>Delete Item</button>
        <button className='prompt'>Update Item</button>
        <form action='submit' className='create-item if fw'>
          <label htmlFor='input'>Name</label>
          <input type='text' className='item-field' />
          <label htmlFor='input'>Brand</label>
          <input type='text' className='item-field' />
          <label htmlFor='input'>Series</label>
          <input type='text' className='item-field' />
          <label htmlFor='input'>Stock</label>
          <input type='text' className='item-field' />
          <label htmlFor='input'>Desc</label>
          <input type='text' className='item-field' />
          <label htmlFor='input'>Image</label>
          <input type='text' className='item-field' />
          <label htmlFor='input'>Rent</label>
          <input type='text' className='item-field' />
          <label htmlFor='input'>Buy</label>
          <input type='text' className='item-field' />
        </form>
      </div>
    );
  }
}

export default Dash;
