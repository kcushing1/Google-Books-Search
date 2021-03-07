import React, { useEffect } from "react";
import Book from "../components/Book";

export default function Saved() {
  function handleApiCall(e) {
    console.log("tbd api button call");
  }

  function loadBooks() {
    let books = fetch("/api/books/");
    books
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
      });
  }

  useEffect(() => loadBooks(), []);

  return (
    <div className="border p-4">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <p>Saved Books</p>
            </div>
          </div>
          <Book
            title="test title"
            author="test author"
            image="https://via.placeholder.com/150"
            btntext="Delete"
            description="skjdgnskdjng asjkghjshdf"
            href="#"
            onClick={handleApiCall}
          />
        </div>
      </div>
    </div>
  );
}
