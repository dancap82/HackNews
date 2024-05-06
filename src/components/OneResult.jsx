function OneResult({ results }) {
    return (
      <div className="container mx-6 my-4">
        <ol>
          {results.map ((result) =>(
            <li key={result.objectID}>
              <span style={{ fontFamily: 'Arial, serif', fontSize: '14px', color: 'black' }}>{result.title} - </span>
              <a href={result.url} 
              target="_blank" rel="noopener noreferrer" 
              className="ml-2"
              style={{ fontFamily: 'Arial, serif', fontSize: '12px', color: 'grey' }}>{result.url}
              
              </a>
           </li>
          ))}
        </ol>
      </div>
      
    );
  }

export default OneResult;


