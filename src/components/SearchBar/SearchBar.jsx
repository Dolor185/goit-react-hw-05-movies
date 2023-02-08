import { useState } from 'react';
export const SearchBar = ({ formSubmit }) => {
  const [query, setQuery] = useState('');

  const hanldeChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmit(query);
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
