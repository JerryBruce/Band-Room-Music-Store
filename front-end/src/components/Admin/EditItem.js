import React from "react";
import { connect } from "react-redux";

import { toggleEdit } from "../../state/actions/toggle";
import { editItem, getItems } from "../../state/actions/items";

class EditItem extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const item = {
      product: this.refs.product.value,
      name: this.refs.name.value,
      brand: this.refs.brand.value,
      series: this.refs.series.value,
      stock: this.refs.stock.value,
      description: this.refs.description.value,
      rent: this.refs.rent.value,
      buy: this.refs.buy.value
    };
    await this.props.editItem(item);
    this.props.getItems();
    this.props.toggleEdit();
  }

  render() {
    const current = this.props.currentItem;
    return (
      <div className="create-item f-co-c-sa">
        <h1 className="form-heading">Edit {current.name}</h1>
        <form
          className="form f-co-c-sa"
          action="submit"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="form-input"
            ref="product"
            placeholder={current.product}
            defaultValue={current.product}
          />
          <input
            className="form-input"
            type="text"
            ref="name"
            placeholder={current.name}
            defaultValue={current.name}
          />
          <input
            className="form-input"
            type="text"
            ref="brand"
            placeholder={current.brand}
            defaultValue={current.brand}
          />
          <input
            className="form-input"
            type="text"
            ref="series"
            placeholder={current.series}
            defaultValue={current.series}
          />
          <input
            className="form-input"
            type="number"
            ref="stock"
            placeholder={current.stock}
            defaultValue={current.stock}
          />
          <textarea
            className="form-message"
            type="text"
            ref="description"
            placeholder={current.description}
            defaultValue={current.description}
          />
          <input
            className="form-input"
            type="number"
            ref="rent"
            placeholder={current.rent}
            defaultValue={current.rent}
          />
          <input
            className="form-input"
            type="number"
            ref="buy"
            placeholder={current.buy}
            defaultValue={current.buy}
          />
          <div className="form-btns f-co-c-sb">
            <button className="btn-long btn-green" type="submit">
              Submit
            </button>
            <button
              className="btn-long btn-blue"
              onClick={() => this.props.toggleEdit()}
            >
              Back to Dashboard
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editOpen: state.toggleReducer.editOpen,
    currentItem: state.itemsReducer.currentItem
  };
};

export default connect(mapStateToProps, { toggleEdit, editItem, getItems })(
  EditItem
);
