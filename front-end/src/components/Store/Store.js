import React, { Component } from 'react';

import api from '../../api/api';
import StoreItem from './StoreItem';
import StoreDetails from './StoreDetails';

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [], detailsOpen: false };
    this.openDetails = this.openDetails.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  openDetails() {
    const details = document.querySelector('.store-details');
    if (!this.state.detailsOpen) {
      details.classList.add('isOpen');
      this.setState({
        detailsOpen: true
      });
    } else {
      details.classList.remove('isOpen');
      this.setState({
        detailsOpen: false
      });
    }
  }

  async getImages() {
    const response = await api.get('/items');
    console.log(response);
  }

  render() {
    return (
      <div className='store'>
        <div className='store-search'>Store Search</div>
        <StoreItem images={this.state.images} openDetails={this.openDetails} />
        <div className='store-page'>Store Pages</div>
        <StoreDetails />
      </div>
    );
  }
}

export default Store;
