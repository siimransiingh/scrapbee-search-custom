import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <a href={result.url} target="_blank" rel="noopener noreferrer">
              {result.url}
            </a>
            <p>
                {result.descripton}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
