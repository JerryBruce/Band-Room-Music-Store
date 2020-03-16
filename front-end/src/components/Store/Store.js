import React, { Component } from 'react';

import { local } from '../../api';
import StoreItem from './StoreItem';
import StoreDetails from './StoreDetails';

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
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
    const response = await local.get('/items');
    this.setState({ items: response.data });
    console.log(this.state.items);
  }

  render() {
    return (
      <div className='store'>
        <div className='store-search'>Store Search</div>
        <StoreItem items={this.state.items} />
        <div className='store-page'>Store Pages</div>
        <StoreDetails />
      </div>
    );
  }
}

export default Store;
