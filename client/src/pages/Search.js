import React from "react";
import SearchBar from "../components/SearchBar";

export default function Search() {
  return (
    <div className="row mx-6">
      <div className="col">
        <div className="row ">
          <div className="col">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>results</p>
          </div>
        </div>
      </div>
    </div>
  );
}
