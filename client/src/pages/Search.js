import React, { useState } from "react";
import env from "react-dotenv";
import Book from "../components/Book";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const [search, setSearch] = useState({
    term: "",
    placeholder: "Search Book",
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
    if (search.term === "") {
      setSearch({
        ...search,
        placeholder: "You forgot to type in a search term, silly goose!",
      });
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
          console.log(res);
          const searchResults = res.items.map((book, index) => {
            function findImage() {
              if (!book.volumeInfo.imageLinks) {
                return "https://via.placeholder.com/150";
              } else {
                return book.volumeInfo.imageLinks.thumbnail;
              }
            }
            let thisImage = findImage();

            const searched = {
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              link: book.volumeInfo.infoLink,
              image: thisImage,
              description: book.volumeInfo.description,
              indexId: index,
            };
            return searched;
          });
          setBookResponse(searchResults);
          setPreSearch({ searched: true });
          setSearch({ ...search, placeholder: "Search Book" });
        });
    }
  }

  function handleInputChange(e) {
    setSearch({ ...search, term: e.target.value });
  }

  function handleSaveBook(e) {
    let idx = parseInt(e.target.id);
    let bookObject = {
      title: bookResponse[idx].title,
      authors: bookResponse[idx].authors,
      description: bookResponse[idx].description,
      image: bookResponse[idx].image,
      link: bookResponse[idx].link,
    };
    const saveBook = fetch("/api/books/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookObject),
    });
    saveBook
      .then((resp) => resp.json)
      .then((res) => {
        console.log("saved book");
      });
  }

  return (
    <div className="row mx-6">
      <div className="col">
        <div className="row ">
          <div className="col">
            <SearchBar
              inputChange={handleInputChange}
              SearchBtn={searchBook}
              placeholder={search.placeholder}
            />
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
