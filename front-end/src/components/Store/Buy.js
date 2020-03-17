import React from 'react';
import { connect } from 'react-redux';

import { toggleBuy } from '../../state/actions/toggle';

const Buy = props => {
  return (
    <div>
      <h1>Stripe Go Here</h1>
      <button onClick={() => props.toggleBuy()}>Close</button>
    </div>
  );
};

export default connect(null, { toggleBuy })(Buy);
