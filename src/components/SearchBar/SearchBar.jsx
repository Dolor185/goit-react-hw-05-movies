import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const SearchBar = ({ formSubmit }) => {
  const [query, setQuery] = useState('');

  const hanldeChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please fill the field');
      return;
    }
    formSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input onChange={hanldeChange} value={query} />
        <button type="submit">Search </button>
      </label>
    </form>
  );
};

SearchBar.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
