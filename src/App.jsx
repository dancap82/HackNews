import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Results from './components/Results.jsx'


function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('https://hn.algolia.com/api/v1/search?query=React');
        const data = await response.json();
        setResults(data.hits);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchResults();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <Header />
      <Results results={results}/>
    </div>
    
  )
}

export default App