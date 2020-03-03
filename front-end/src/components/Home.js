import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='hero'>
          <img src='' alt='hero' className='hero-img' />
        </div>
        <div className='tag'>
          <h2 className='heading-tag'>Tag Line</h2>
          <p className='tag-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus, quos. Dicta cum beatae adipisci, aperiam eos,
            voluptas nam dolore quaerat, totam iusto iure ab similique minima
            officia maxime. Velit, possimus?
          </p>
        </div>
        <div className='cta flex center-space-a'>
          <button className='btn-cta'>Call To Action</button>
          <button className='btn-cta'>Call To Action</button>
        </div>
      </div>
    );
  }
}

export default Home;
