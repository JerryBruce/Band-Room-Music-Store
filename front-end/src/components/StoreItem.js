import React from 'react';

const StoreItem = props => {
  const images = props.images.map(image => {
    return (
      <div className='store-item if' key={image.id}>
        <div className='store-item-container as-c'>
          <img src={image.urls.small} alt='item' className='store-item-image' />
        </div>
        <div className='store-item-desc'></div>
      </div>
    );
  });
  return <div className=''>{images}</div>;
};

export default StoreItem;
