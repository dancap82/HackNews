import { useState } from 'react';

function Header({ handleSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <header className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">WD-50 Hacker News</a>
        <form className="form-inline ml-auto d-flex justify-content-center" onSubmit={handleSubmit}>
          <div className="search-bar">
            <input
              className="form-control mr-sm-2 px-5"
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search stories by title, url or author"
            />
          </div>
          <div className="input-group-append">
            <button type="submit" className="mx-1 btn btn-outline-success text-white">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;