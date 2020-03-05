import React, { Component } from "react";
import MediaIcon from "./MediaIcon";
import FB from "../images/facebook.svg";
import IG from "../images/instagram.svg";
import TW from "../images/twitter.svg";

export class Footer extends Component {
  render(props) {
    return (
      <div className="footer flex abs-bot center-space-a">
        <div className="footer-circles">
          <div className="footer-img ">
            <img src="" alt="" className="profile" />
          </div>
          <div className="media-icons flex center_space">
            <MediaIcon icon={FB} />
            <MediaIcon icon={IG} />
            <MediaIcon icon={TW} />
          </div>
        </div>
        <div className="contact">
          <div className="contact-phone">
            Give Us a Call <br /> (900)900-9000
          </div>
          <div className="contact-email">
            Send Us an Email <br /> Email@Email.com
          </div>
        </div>
        <div className="links">
          <button className="link">Link</button>
          <button className="link">Link</button>
          <button className="link">Link</button>
          <button className="link">Link</button>
          <button className="link">Link</button>
          <button className="link">Link</button>
        </div>
      </div>
    );
  }
}

export default Footer;
