import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavLink extends Component {
  closeMenu() {
    console.log("menu closed");
  }

  render() {
    return (
      <Link to={this.props.pageRoute} onClick={this.closeMenu}>
        <li className="menu-list-item">{this.props.pageName}</li>
      </Link>
    );
  }
}
