import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentCategory } from '../../state/actions/pagination';

class DropDown extends Component {
  setCurrentCategory(e) {
    e.preventDefault();
    this.props.setCurrentCategory(e.target.value);
  }
  render() {
    const category = this.props.categories.map((item) => {
      return (
        <option key={item} className='category-link' value={item}>
          {item}
        </option>
      );
    });
    return (
      <div className='category-dd'>
        <label htmlFor='categories'>Choose a Product Category</label>
        <select
          name='categories'
          id='categories'
          onChange={(e) => this.setCurrentCategory(e)}>
          <option value='featured'>Select</option>
          {category}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.itemsReducer.categories,
  };
};

export default connect(mapStateToProps, { setCurrentCategory })(DropDown);
