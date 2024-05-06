import { useState } from "react";

function Header({onSearchChange}) {
    const [input, setInput] = useState("");

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setInput(value);
        onSearchChange(value);
    };

    return (
        <header className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand text-white fw-bold" href="#">WD-50 Hacker News</a>
                <form className="form-inline ml-auto d-flex justify-content-center">
                    <div className="search-bar">
                        <input
                            className="form-control mr-sm-2 px-5" 
                            type="text"
                            value={input}
                            onChange={handleSearchChange}
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