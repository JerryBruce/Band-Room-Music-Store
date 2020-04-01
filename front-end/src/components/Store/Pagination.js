import React from 'react';
import { connect } from 'react-redux';

const Pagination = props => {
  props.pageNumbers.map(num => {
    return (
      <li>
        <a href='!#'>{num}</a>
      </li>
    );
  });
};
const mapStateToProps = state => {
  return {
    pageNumbers: state.pageReducer.pageNumbers
  };
};

export default connect(mapStateToProps)(Pagination);
