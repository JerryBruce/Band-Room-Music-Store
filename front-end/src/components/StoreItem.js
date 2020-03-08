import React from 'react';
import sax from '../images/sax.jpg';

const StoreItem = props => {
  const images = props.images.map(image => {
    return (
      <div className='store-item f-co-c-sb' key={image.id}>
        <div className='store-item-container as-c js-c'>
          <img src={sax} alt='item' className='store-item-image' />
        </div>
        <div className='store-item-details'>
          <div className='store-item-name'>Saxophone</div>
          <div className='store-item-desc'>{image.alt_description}</div>
          <div className='store-item-price'>
            As Low as
            <br />
            49.95/Month!
          </div>
          <button className='store-item-buy'>Buy Now!</button>
        </div>
      </div>
    );
  });
  return <div className='if fw f-c-c'>{images}</div>;
};

export default StoreItem;
