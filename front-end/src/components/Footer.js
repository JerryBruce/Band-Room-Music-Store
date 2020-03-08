import React, { Component } from 'react';
import MediaIcon from './MediaIcon';

import FB from '../images/facebook.svg';
import IG from '../images/instagram.svg';
import TW from '../images/twitter.svg';

export class Footer extends Component {
  render(props) {
    return (
      <div className='footer fix-b-l f-c-sa'>
        <div className='footer-circles f-c-c'>
          <div className='footer-img '>
            <img src='' alt='' className='profile' />
          </div>
          <div className='media-icons f-c-sb'>
            <MediaIcon icon={FB} />
            <MediaIcon icon={IG} />
            <MediaIcon icon={TW} />
          </div>
        </div>
        <div className='phone-email'>
          <div className='contact-phone'>
            Give Us a Call <br /> (900)900-9000
          </div>
          <div className='contact-email'>
            Send Us an Email <br /> Lakewaymusic@Yahoo.com
          </div>
        </div>
        <div className='links-container f-c-c'>
          <div className='links'>
            <button className='link'>Link</button>
            <button className='link'>Link</button>
            <button className='link'>Link</button>
            <button className='link'>Link</button>
            <button className='link'>Link</button>
            <button className='link'>Link</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
