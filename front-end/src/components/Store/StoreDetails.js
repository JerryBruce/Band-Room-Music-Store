import React from "react";

import Rent from "./Rent";
import Buy from "./Buy";
import { connect } from "react-redux";
import { toggleStore, toggleRent, toggleBuy } from "../../state/actions/toggle";

const StoreDetails = props => {
  const item = props.currentItem;
  if (props.rentOpen) {
    return <Rent />;
  } else if (props.buyOpen) {
    return <Buy />;
  } else {
    return (
      <div className="f-co-sa detail">
        <div className="detail-hero f-co-c-sa">
          <h1 className="detail-header">{item.name}</h1>
          <img
            className="detail-img"
            src={`http://localhost:3000/items/${item._id}/small`}
            alt=""
          />
        </div>
        <div className="detail-info">
          <h3 className="detail-brand">{item.brand}</h3>
          <h3 className="detail-series">{item.series}</h3>
          <p className="detail-desc">{item.description}</p>
        </div>
        <div className="detail-prices f-co-sa">
          <h3 className="detail-price">
            Price: <span className="dollar green">${item.buy}</span>
          </h3>
          <h3>or</h3>
          <h3 className="detail-price">
            As Low as <span className="dollar green">${item.rent}</span>/Month!
          </h3>
        </div>

        <div className="detail-btns f-co-c-sa">
          <button
            className="btn-long btn-green"
            onClick={() => props.toggleRent()}
          >
            Rental Inquiry
          </button>
          <button
            className="btn-long btn-green"
            onClick={() => props.toggleBuy()}
          >
            Buy Now
          </button>
          <button
            className="btn-long btn-blue"
            onClick={() => props.toggleStore()}
          >
            Back To Store
          </button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items,
    currentItem: state.itemsReducer.currentItem,
    storeOpen: state.toggleReducer.storeOpen,
    rentOpen: state.toggleReducer.rentOpen,
    buyOpen: state.toggleReducer.buyOpen
  };
};

export default connect(mapStateToProps, { toggleStore, toggleRent, toggleBuy })(
  StoreDetails
);
