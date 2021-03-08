import React from "react";

export default function SearchBar({ inputChange, SearchBtn, placeholder }) {
  return (
    <div className="row border text-left mx-3">
      <div className="col">
        <form>
          <div className="form-group p-2">
            <label>Search Books (title, author, key words)</label>
            <input
              type="text"
              className="form-control"
              id="search-title"
              placeholder={placeholder}
              onChange={inputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-info mb-2"
            onClick={SearchBtn}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
