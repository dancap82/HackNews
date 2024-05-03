import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header.jsx'
import OneResult from './components/OneResult.jsx'
import Footer from './components/Footer.jsx'
import { useState, useEffect } from 'react'



function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

    useEffect(() => {
        fetchData();
      }, [query]
    );

  const fetchData = async () => {
    try {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
      const data = await response.json();
      setResults(data.hits);
    } catch (error) {
        console.error('Error fetching data:', error);
      }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };


  return (
    <div>
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <OneResult results={results} />
      <Footer />
    </div>
    
  )
}

export default App




