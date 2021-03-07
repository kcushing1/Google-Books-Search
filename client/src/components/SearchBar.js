import React from "react";

export default function SearchBar() {
  return (
    <div className="row border text-left">
      <div className="col">
        <form>
          <div className="form-group p-2">
            <label>Search Book Titles</label>
            <input
              type="text"
              className="form-control"
              id="search-title"
              placeholder="Title"
            />
          </div>
          <button type="button" className="btn btn-info mb-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
