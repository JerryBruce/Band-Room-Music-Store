import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <div className='contact f-co-c-sa'>
        <h1 className='contact-heading'>Send Us a Message</h1>
        <form action='submit' className='form f-c-c'>
          <input type='text' className='form-name ' placeholder='Full Name' />
          <input type='text' className='form-email as-fs' placeholder='Email' />
          <input
            type='text'
            className='form-phone'
            placeholder='Phone Number'
          />
          <input type='text' className='form-address' placeholder='Address' />
          <textarea
            name='message'
            id=''
            cols='30'
            rows='10'
            className='form-message'
            placeholder='Message'></textarea>
          <input type='submit' className='form-submit' />
        </form>
      </div>
    );
  }
}

export default Contact;
