import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      return;
    }
  
    try {
      const response = await axios.get('http://localhost:7000/api/search', {
        params: {
          search: searchTerm,
        },
      });
      onSearch(response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('Bad Request: Invalid search term or other client error.');
        // Show an error message on the frontend UI
      } else {
        console.log('Error occurred:', error.message);
      }
    }
  };


  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
