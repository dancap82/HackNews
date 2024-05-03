function OneResult({ title, link }) {
    return (
      <li className="list-group-item">
        <div>
          <span>{title}</span>
          <a href={link} target="_blank" rel="noopener noreferrer" className="ml-2">{link}</a>
        </div>
      </li>
    );
  }

export default OneResult;