import React from 'react';

export default function MediaIcons(props) {
  return (
    <a href={props.url} className='footer-media'>
      <img src={props.icon} alt='media' className='media-icon' />
    </a>
  );
}
