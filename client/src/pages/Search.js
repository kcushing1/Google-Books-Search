import React, { useState } from "react";
import env from "react-dotenv";
import Book from "../components/Book";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const [search, setSearch] = useState({
    term: "",
  });
  const [bookResponse, setBookResponse] = useState([
    {
      title: "",
      authors: [],
      link: "",
      image: "",
      description: "",
      indexId: "",
    },
  ]);
  const [preSearch, setPreSearch] = useState({ searched: false });

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
          const searchResults = res.items.map((book, index) => {
            const searched = {
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              link: book.volumeInfo.infoLink,
              image:
                book.volumeInfo.imageLinks.thumbnail ||
                "https://via.placeholder.com/150",
              description: book.volumeInfo.description,
              indexId: index,
            };
            return searched;
          });
          setBookResponse(searchResults);
          setPreSearch({ searched: true });
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

            {preSearch.searched && (
              <div>
                {bookResponse.map((book) => {
                  return (
                    <Book
                      key={book.indexId}
                      title={book.title}
                      author={book.authors}
                      image={book.image}
                      description={book.description}
                      btntext="Save"
                      href={book.link}
                      onClick={handleSaveBook}
                      btnid={book.indexId}
                    />
                  );
                })}{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
