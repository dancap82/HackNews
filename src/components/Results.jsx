import OneResult from './OneResult';
import { useEffect, useState } from 'react'

function Results() {

const [results, setResults] = useState([{title: 'This is the title', url: 'thisistheurl.com'}, {title: 'This is the title', url: 'thisistheurl.com'}, {title: 'This is the title', url: 'thisistheurl.com'}]);


  return (
    <div className="container-fluid mt-3 h-50 d-flex justify-content-center align-items-center">
      <div className="border border-dark bg-secondary" style={{ width: '75%', height: '75%' }}>
        <ul className="list-group">
          {/* Map over results array and render OneResult component */}
          {results.map((result, index) => (
            <OneResult key={index} title={result.title} link={result.url} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Results;