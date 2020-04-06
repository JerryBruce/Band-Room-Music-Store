import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleBuy } from '../../state/actions/toggle';

const Buy = (props) => {
  return (
    <div>
      <h1>Stripe Go Here</h1>
      <div className='b-c'>
        <button className='btn btn-black'>
          <Link to='/cart'>Back to Cart</Link>
        </button>
      </div>
    </div>
  );
};

export default connect(null, { toggleBuy })(Buy);
