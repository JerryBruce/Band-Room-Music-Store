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
              <h2 className='tag-heading'>Tag Line</h2>
              <p className='tag-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, quos. Dicta cum beatae adipisci, aperiam eos,
                voluptas nam dolore quaerat, totam iusto iure ab similique
                minima officia maxime. Velit, possimus?
              </p>
            </div>
            <div className='f-co-c-sa'>
              <button className='btn btn-red'>
                <Link to='/store'>See Our Store</Link>
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
