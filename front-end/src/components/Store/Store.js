import React from 'react';

import StoreItem from './StoreItem';

const Store = () => {
  return (
    <div className='store'>
      <div className='store-search'>Store Search</div>
      <StoreItem />
      <div className='store-page'>Store Pages</div>
    </div>
  );
};

export default Store;
