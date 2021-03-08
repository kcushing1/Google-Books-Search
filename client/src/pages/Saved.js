import React, { useEffect, useState } from "react";
import Book from "../components/Book";

export default function Saved() {
  const [bookList, setBookList] = useState([]);

  function handleApiCall(e) {
    console.log("id is", e.target.id);
    let remove = fetch("/api/books/" + e.target.id, {
      method: "DELETE",
    });
    remove.then((resp) => resp.json()).then((res) => loadBooks());
    console.log("api button call remove");
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
    <div className="border p-4 mx-3">
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
                id={book._id}
                title={book.title}
                author={book.authors}
                image={book.image}
                description={book.description}
                href={book.link}
                btntext="Delete"
                onClick={handleApiCall}
                btnid={book._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
