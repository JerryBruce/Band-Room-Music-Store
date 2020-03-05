import React from "react";

export default function MediaIcons(props) {
  return (
    <div className="footer-media">
      <img src={props.icon} alt="" className="media-icon" />
    </div>
  );
}
