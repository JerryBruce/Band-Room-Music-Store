import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div className="contact f-c-c">
        <form action="submit" className="contact-form f-co-c-sa">
          <input type="text" className="form-name" />
          <input type="text" className="form-email" />
          <input type="text" className="form-phone" />
          <input type="text" className="form-address" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className="form-message"
          ></textarea>
          <input type="submit" className="form-submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
