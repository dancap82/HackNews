function OneResult({ results }) {
    return (
      <div className="container mx-6 my-4">
        <ul>
          {results.map ((result) =>(
            <li key={result.objectID}>
              <span>{result.title} - </span>
              <a href={result.url} target="_blank" rel="noopener noreferrer" className="ml-2">{result.url}</a>
           </li>
          ))}
        </ul>
      </div>
      
    );
  }

export default OneResult;


