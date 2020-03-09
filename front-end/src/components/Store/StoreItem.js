import React from "react";
import sax from "../../images/sax.jpg";

const StoreItem = props => {
  const images = props.images.map(image => {
    return (
      <div className="store-item f-co-c-sb" key={image.id}>
        <div className="store-item-container as-c js-c">
          <img src={sax} alt="item" className="store-item-image" />
        </div>
        <div className="store-item-details f-co-l-sa">
          <div className="store-item-name">Saxophone</div>
          <div className="store-item-price">
            As Low as
            <br />
            <span className="red">$49.95/Month</span>
          </div>
          <div className="store-item-stock">
            <span className="green">In Stock</span>
          </div>
          <div className="store-item-btns f-c-sa">
            <button className="store-item-buy"> Buy Now! </button>
            <button className="store-item-info" onClick={props.openDetails}>
              More Details
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <div className="if fw f-c-c">{images}</div>;
};

export default StoreItem;
