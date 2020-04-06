import React from 'react';
import { connect } from 'react-redux';

import { toggleRent } from '../../state/actions/toggle';
import { notify } from '../../state/actions/notify';

class Rent extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();

    const inquiry = {
      first: this.refs.first.value,
      last: this.refs.last.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
      address: this.refs.address.value,
      message: this.refs.message.value,
      subject: `Inquiry for ${this.props.currentItem.name}`,
    };

    await this.props.notify(inquiry);
    this.props.toggleRent();
  }
  render() {
    return (
      <div className='inquiry f-co-c-sa'>
        <h1>Inquiry for {this.props.currentItem.name}</h1>
        <form
          action='submit'
          className='rental-form f-co-c-sa'
          onSubmit={this.handleSubmit}>
          <input
            className='form-input'
            placeholder='First Name'
            name='firstname'
            type='text'
            ref='first'
          />
          <input
            className='form-input'
            placeholder='Last Name'
            name='lastname'
            type='text'
            ref='last'
          />
          <input
            className='form-input'
            placeholder='Phone Number'
            name='phone'
            type='phone'
            ref='phone'
          />
          <input
            className='form-input'
            placeholder='Email Address'
            name='email'
            type='email'
            ref='email'
          />
          <input
            className='form-input'
            placeholder='Mailing Address'
            name='address'
            type='address'
            ref='address'
          />
          <textarea
            className='form-message'
            placeholder='Inquiry Message'
            name=''
            id=''
            cols='30'
            rows='10'
            ref='message'></textarea>
          <div className='form-btns f-co-c-sb'>
            <button className='btn-long btn-red'>Submit</button>
            <button
              className='btn-long btn-black'
              onClick={() => this.props.toggleRent()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.itemsReducer.currentItem,
  };
};

export default connect(mapStateToProps, { toggleRent, notify })(Rent);
