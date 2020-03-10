import React from 'react';
import sax from '../../images/sax.jpg';

const StoreItem = props => {
  const items = props.items.map(items => {
    return (
      <div className='store-item f-co-c-sb' key={items._id}>
        <div className='store-item-container as-c js-c'>
          <img src={items.image} alt='item' className='store-item-image' />
        </div>
        <div className='store-item-details f-co-l-sa'>
          <div className='store-item-name'>{items.name}</div>
          <div className='store-item-price'>
            As Low as
            <br />
            <span className='red'>${items.rent}/Month</span>
          </div>
          <div className='store-item-stock'>
            <span className='green'>In Stock</span>
          </div>
          <div className='store-item-btns f-c-sa'>
            <button className='store-item-buy'> Buy Now! </button>
            <button className='store-item-info'>More Details</button>
          </div>
        </div>
      </div>
    );
  });
  return <div className='if fw f-c-c'>{items}</div>;
};

export default StoreItem;
