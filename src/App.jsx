
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import OneResult from './components/OneResult.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
      const data = await response.json();
      setResults(data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div>
      <Header onSearchChange={handleChange} />
      <OneResult results={results} />
      <Footer />
    </div>
  );
}

export default App;




