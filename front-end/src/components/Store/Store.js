import React from "react";
import { connect } from "react-redux";

import StoreItem from "./StoreItem";
import StoreDetails from "./StoreDetails";

const Store = props => {
  if (!props.storeOpen) {
    return (
      <div className="store">
        <div className="store-search">Store Search</div>
        <StoreItem />
        <div className="store-page">Store Pages</div>
      </div>
    );
  } else {
    return (
      <div className="store">
        <StoreDetails />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    storeOpen: state.toggleReducer.storeOpen
  };
};

export default connect(mapStateToProps)(Store);
