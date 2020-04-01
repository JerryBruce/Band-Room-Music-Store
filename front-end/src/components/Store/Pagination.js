import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPageNumbers } from '../../state/actions/pagination';

class Pagination extends Component {
  render() {
    this.props.pageNumbers.map(num => {
      return (
        <li>
          <a href='!#'>{num}</a>
        </li>
      );
    });
  }
}
const mapStateToProps = state => {
  return {
    currentPage: state.pageReducer.currentPage,
    itemsPerPage: state.pageReducer.itemsPerPage,
    pageNumbers: state.pageReducer.pageNumbers
  };
};

export default connect(mapStateToProps, {})(Pagination);
