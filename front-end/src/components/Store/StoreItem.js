import React from "react";
import { connect } from "react-redux";

import StoreDetails from "./StoreDetails";
import { getItems } from "../../state/actions/items";
import { getDetails } from "../../state/actions/items";
import { toggleStore } from "../../state/actions/toggle";

class StoreItem extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.props.getItems();
    console.log(this.props.items);
  }

  clickHandler(e) {
    this.props.getDetails(e.target.value);
    this.props.toggleStore();
  }

  render() {
    const items = this.props.items.map(item => {
      return (
        <div className="store-item f-co-c-sb" key={item._id}>
          <div className="store-item-container as-c js-c">
            <h1 className="store-item-name js-c">{item.name}</h1>
            <img
              src={`http://localhost:3000/items/${item._id}/small`}
              alt="item"
              className="store-item-image"
            />
          </div>
          <div className="store-item-details f-co-l-sa">
            <p className="store-item-series">{item.series}</p>
            <div className="store-item-price">
              As Low as
              <br />
              <span className="red">${item.rent}/Month</span>
            </div>
            <div className="store-item-stock">
              <span className="green">In Stock</span>
            </div>
            <div className="store-item-btns f-c-sa">
              <button
                className="btn-long btn-black"
                value={item._id}
                onClick={e => this.clickHandler(e)}
              >
                More Details
              </button>
            </div>
          </div>
        </div>
      );
    });
    return <div className="if fw f-c-c">{items}</div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items,
    currentItem: state.itemsReducer.currentItem,
    storeOpen: state.toggleReducer.storeOpen
  };
};

export default connect(mapStateToProps, {
  getItems,
  getDetails,
  toggleStore
})(StoreItem);
