import React, { Component } from 'react';

export default class GalleryListItem extends Component {
  render() {
    return (
      <div className='gallery-img-container'>
        <img
          className='gallery-img'
          ref={this.imageRef}
          src={this.props.image.urls.small}
          alt={this.props.image.description}
        />
      </div>
    );
  }
}
