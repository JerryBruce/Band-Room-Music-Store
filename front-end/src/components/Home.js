import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Store from './Store/Store';

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='hero'>
          <div className='hero-content f-co-l-sa'>
            <div className='tag'>
              <h2 className='tag-heading'>Our Gurantee</h2>
              <p className='tag-text'>
                At the Band Room we gurantee that our prices and payment plans
                won't be beaten. Our mission is to get affordable instruments in
                the hands of priceless children. Contact us on our generous rent
                to own options today.
              </p>
            </div>
            <div className='f-co-c-sa'>
              <button className='btn btn-red'>
                <Link to='/store'>Contact Us</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='featured-items'>
          <Store />
        </div>
      </div>
    );
  }
}

export default Home;
