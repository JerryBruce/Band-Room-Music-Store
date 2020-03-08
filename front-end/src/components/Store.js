import React, { Component } from 'react';

import unsplash from '../api/unsplash';
import StoreItem from './StoreItem';

export class Store extends Component {
  state = { images: [] };

  componentDidMount() {
    this.getImages();
  }

  async getImages() {
    const response = await unsplash.get('/search/photos', {
      params: { query: 'instruments' }
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className='store'>
        <div className='store-search'>Store Search</div>
        <StoreItem images={this.state.images} />
        <div className='store-page'>Store Pages</div>
      </div>
    );
  }
}

export default Store;
