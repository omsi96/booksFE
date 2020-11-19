import { BooksListStyled } from "../../styles/BookStyled";
import Book from "./Book";
import { Link } from "react-router-dom";
import AddBookButton from "../buttons/AddBookButton";
import booksStore from "../../stores/BookStore";
import { observer } from "mobx-react";
import { useState } from "react";
import { SearchBar } from "../SearchBar";
const BooksList = () => {
  const books = booksStore.books.map((book) => ({ ...book, hovered: false }));
  // STATES
  const [hoveredBooks, setHoveredBooks] = useState(books);
  const [oneIsHovered, setOneIsHovered] = useState(false);
  const [query, setQuery] = useState("");
  // METHODS
  const hoverOn = (index) => {
    console.log("Mouse entered!");
    const cloneBooks = [...hoveredBooks];
    cloneBooks[index].hovered = true;
    setHoveredBooks(cloneBooks);
    setOneIsHovered(true);
  };
  const hoverOut = (index) => {
    console.log("Mouse Left!");
    setHoveredBooks(hoveredBooks.map((book) => ({ ...book, hovered: false })));
    setOneIsHovered(false);

    // setHoveredBooks(false);
  };

  const filterBooksByName = (book) => {
    return book.name.toLowerCase().includes(query.toLowerCase());
  };

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <AddBookButton />
      <BooksListStyled>
        {hoveredBooks.filter(filterBooksByName).map((book, index) => (
          <Link to={`/books/${book.slug}`} key={book.id}>
            <div
              onMouseEnter={() => hoverOn(index)}
              onMouseLeave={() => hoverOut(index)}
              key={book.id}
            >
              <Book book={book} oneIsHovered={oneIsHovered} key={book.id} />
            </div>
          </Link>
        ))}
      </BooksListStyled>
    </div>
  );
};

export default observer(BooksList);
