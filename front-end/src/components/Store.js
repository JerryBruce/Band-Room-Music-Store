import React, { Component } from "react";

import StoreItem from "./StoreItem";

export class Store extends Component {
  render() {
    return (
      <div className="store ib">
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </div>
    );
  }
}

export default Store;
