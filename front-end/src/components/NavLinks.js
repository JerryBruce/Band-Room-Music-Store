import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLinks() {
  return (
    <ul className='menu-list'>
      <Link to='/'>
        <li className='menu-list-item'>Home</li>
      </Link>

      <Link to='/store'>
        <li className='menu-list-item'>Store</li>
      </Link>

      <Link to='/about'>
        <li className='menu-list-item'>About</li>
      </Link>

      <Link to='/contact'>
        <li className='menu-list-item'>Contact</li>
      </Link>

      <Link to='/gallery'>
        <li className='menu-list-item'>Gallery</li>
      </Link>
    </ul>
  );
}
