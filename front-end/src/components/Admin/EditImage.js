import React from "react";
import { connect } from "react-redux";

import { editImage, getItems } from "../../state/actions/items";
import { toggleEditImage } from "../../state/actions/toggle";

class EditImage extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();

    const image = this.refs.image.files[0];
    await this.props.editImage(image);
    this.props.getItems();
    this.props.toggleEditImage();
  }
  render() {
    return (
      <div>
        <form
          action="submit"
          encType="multipart/form-data"
          className="form"
          onSubmit={this.handleSubmit}
        >
          <input type="file" className="form-input" name="image" ref="image" />
          <button className="btn-long btn-green" type="submit">
            Submit
          </button>
          <button
            className="btn-long btn-blue"
            onClick={() => this.props.toggleEditImage()}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { editImage, getItems, toggleEditImage })(
  EditImage
);
