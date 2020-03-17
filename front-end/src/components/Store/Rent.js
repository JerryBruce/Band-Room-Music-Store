import React from 'react';
import { connect } from 'react-redux';

import { toggleRent } from '../../state/actions/toggle';

const Rent = props => {
  return (
    <div>
      <h1>Tell Us Stuff</h1>
      <form action='submit' className='rentalform'>
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <textarea name='' id='' cols='30' rows='10'></textarea>
        <button>Submit</button>
      </form>
      <button onClick={() => props.toggleRent()}>Close</button>
    </div>
  );
};

export default connect(null, { toggleRent })(Rent);
