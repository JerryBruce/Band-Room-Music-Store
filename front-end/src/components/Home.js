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
              <h2 className='tag-heading'>
                Our Rent to Own Policy is the Best Around
              </h2>
            </div>
            <div className='f-co-c-sa'>
              <button className='btn btn-red'>
                <Link to='/about'>More Details</Link>
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
