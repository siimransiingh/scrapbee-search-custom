import './App.css';
import SearchBar from './component/SearchBar';
import SearchResults from './component/SearchResults';
import { useEffect, useState } from 'react';

function App() {
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   console.log("useEffect call")
  //   fetch("http://localhost:7000/api/search")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setResults(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const handleSearch = (data) => {
    setResults(data);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search App</h1>
        <SearchBar onSearch={handleSearch} />
        <SearchResults results={results} />
      </header>
    </div>
  );
}

export default App;
