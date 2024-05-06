import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
<<<<<<< HEAD
import Results from './components/Results.jsx'
=======
import OneResult from './components/OneResult.jsx'
import Footer from './components/Footer.jsx'
import { useState, useEffect } from 'react'

>>>>>>> dev


function App() {
  const [results, setResults] = useState([]);

<<<<<<< HEAD
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
=======
    useEffect(() => {
        fetchData();
      }, []
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

>>>>>>> dev

  return (
    <div>
      <Header />
<<<<<<< HEAD
      <Results results={results}/>
=======
      <OneResult results={results} />
      <Footer />
>>>>>>> dev
    </div>
    
  )
}

<<<<<<< HEAD
export default App
=======
export default App




>>>>>>> dev
