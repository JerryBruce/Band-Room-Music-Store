import React from "react";

export default function MediaIcons(props) {
  return (
    <a href={props.url} className="footer-media">
      {props.icon}
    </a>
  );
}
