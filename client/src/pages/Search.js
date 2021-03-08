import React, { useState } from "react";
import env from "react-dotenv";
import Book from "../components/Book";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const [search, setSearch] = useState({
    term: "",
  });

  function searchBook() {
    let key = env.BOOKS_API_KEY;
    console.log("search book function");
    if (search.term === "") {
      console.log("there is no term to search");
    } else {
      const bookTitle = fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search.term +
          "&key=" +
          key
      );
      bookTitle
        .then((resp) => resp.json())
        .then((res) => {
          console.log("woohoo");
          console.log(res);
        });
    }
  }

  function handleInputChange(e) {
    setSearch({ ...search, term: e.target.value });
    console.log(search.term);
  }

  function handleSaveBook(e) {
    console.log("this is handleSaveBook and id is ", e.target.id);
  }

  return (
    <div className="row mx-6">
      <div className="col">
        <div className="row ">
          <div className="col">
            <SearchBar inputChange={handleInputChange} SearchBtn={searchBook} />
          </div>
        </div>
        <div className="row border m-3 p-4">
          <div className="col">
            <div className="row">
              <div className="col">
                <p>Search Results</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>api info here</p>
              </div>
            </div>
            <Book
              title="test title"
              author="authors"
              image="https://via.placeholder.com/150"
              description="kjsdfhkjlsdbgfksd jdfglsdfgks kjdsfbldsf"
              btntext="Save"
              href="#"
              onClick={handleSaveBook}
              btnid="12345"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
