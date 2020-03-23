import React from "react";
import { connect } from "react-redux";

import { toggleRent } from "../../state/actions/toggle";

const Rent = props => {
  return (
    <div className="inquiry f-co-c-sa">
      <h1>Inquiry for {props.currentItem.name}</h1>
      <form action="submit" className="rental-form f-co-c-sa">
        <input
          className="form-input"
          placeholder="First Name"
          name="firstname"
          type="text"
        />
        <input
          className="form-input"
          placeholder="Last Name"
          name="lastname"
          type="text"
        />
        <input
          className="form-input"
          placeholder="Phone Number"
          name="phone"
          type="phone"
        />
        <input
          className="form-input"
          placeholder="Email Address"
          name="email"
          type="email"
        />
        <input
          className="form-input"
          placeholder="Mailing Address"
          name="address"
          type="address"
        />
        <textarea
          className="form-message"
          placeholder="Inquiry Message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div className="form-btns f-co-c-sb">
          <button className="btn-long btn-green">Submit</button>
          <button
            className="btn-long btn-blue"
            onClick={() => props.toggleRent()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentItem: state.itemsReducer.currentItem
  };
};

export default connect(mapStateToProps, { toggleRent })(Rent);
