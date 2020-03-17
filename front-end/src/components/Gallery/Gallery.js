import React, { Component } from 'react';

import GalleryList from './GalleryList';
import { unsplash } from '../../api';

export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    this.getImages();
  }

  async getImages() {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: 'marching band',
        per_page: '35'
      }
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  }

  render() {
    return (
      <div className='gallery f-co-c-c'>
        <h1>Gallery</h1>
        <GalleryList images={this.state.images} />
      </div>
    );
  }
}

export default Gallery;
