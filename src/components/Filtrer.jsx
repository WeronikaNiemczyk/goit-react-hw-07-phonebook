import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setStatusFilter } from '../redux/filterSlice';
import { getFilter } from '../redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search Contacts"
      value={filter}
      onChange={handleChange}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
