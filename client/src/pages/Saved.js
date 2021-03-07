import React, { useEffect, useState } from "react";
import Book from "../components/Book";

export default function Saved() {
  const [bookList, setBookList] = useState([]);

  function handleApiCall(e) {
    console.log("tbd api button call");
  }

  function loadBooks() {
    let books = fetch("/api/books/");
    books
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        setBookList(res);
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
          {bookList.map((book) => {
            return (
              <Book
                key={book._id}
                title={book.title}
                author={book.authors}
                image={book.image}
                description={book.description}
                href={book.link}
                btntext="Delete"
                onClick={handleApiCall}
              />
            );
          })}
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
