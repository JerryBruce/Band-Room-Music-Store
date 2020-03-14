import React from 'react';
import GalleryListItem from './GalleryListItem';

export default function GalleryList(props) {
  const image = props.images.map(image => {
    return (
      <GalleryListItem image={image} key={image.id} className='img-list-img' />
    );
  });
  return <div className='gallery-list'>{image}</div>;
}
