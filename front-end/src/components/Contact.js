import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <div className='contact f-co-c-sa'>
        <h1 className='contact-heading'>Send Us a Message</h1>
        <form action='submit' className='contact-form f-c-c'>
          <input
            type='text'
            className='contact-form-name '
            placeholder='Full Name'
          />
          <input
            type='text'
            className='contact-form-email as-fs'
            placeholder='Email'
          />
          <input
            type='text'
            className='contact-form-phone'
            placeholder='Phone Number'
          />
          <input
            type='text'
            className='contact-form-address'
            placeholder='Address'
          />
          <textarea
            name='message'
            id=''
            cols='30'
            rows='10'
            className='contact-form-message'
            placeholder='Message'></textarea>
          <input type='submit' className='contact-form-submit' />
        </form>
      </div>
    );
  }
}

export default Contact;
