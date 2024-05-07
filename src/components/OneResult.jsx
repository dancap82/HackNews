function OneResult({ results }) {
  return (
    <div className="container mx-6 my-4">
      <ol>
        {results.map ((result) =>(
          <li key={result.objectID}>
            <span style={{ fontWeight: 'bold', fontFamily: 'Arial, serif', fontSize: '15px', color: 'black' }}>{result.title} - </span>
            <a href={result.url}
              target="_blank" rel="noopener noreferrer"
              className="ml-2"
              style={{ fontFamily: 'Arial, serif', fontSize: '15px', color: 'grey' }}>{result.url}
            </a>
            <div>
              <span style={{  fontFamily: 'Arial, serif', fontSize: '14px', color: 'grey' }}> Author: {result.author} | Date created ({result.created_at})
              </span>
            </div>
         </li>
        ))}
      </ol>
    </div>
  );
}

export default OneResult;


