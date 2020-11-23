import { BooksListStyled } from "../../styles/BookStyled";
import Book from "./Book";

import AddBookButton from "../buttons/AddBookButton";
import booksStore from "../../stores/BookStore";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { SearchBar } from "../SearchBar";
import bookStore from "../../stores/BookStore";
const BooksList = () => {
  // STATES
  const [hoveredBooks, setHoveredBooks] = useState([]);
  const [oneIsHovered, setOneIsHovered] = useState(false);
  const [query, setQuery] = useState("");
  // METHODS
  const hoverOn = (index) => {
    const cloneBooks = [...hoveredBooks];
    cloneBooks[index].hovered = true;
    setHoveredBooks(cloneBooks);
    setOneIsHovered(true);
  };
  const hoverOut = (index) => {
    setHoveredBooks(hoveredBooks.map((book) => ({ ...book, hovered: false })));
    setOneIsHovered(false);
    // setHoveredBooks(false);
  };

  const filterBooksByName = (book) => {
    return book.name.toLowerCase().includes(query.toLowerCase());
  };
  useEffect(() => {
    setHoveredBooks(
      booksStore.books.map((book) => ({ ...book, hovered: false }))
    );
  }, [bookStore.books]);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <AddBookButton />
      <BooksListStyled>
        {hoveredBooks.filter(filterBooksByName).map((book, index) => (
          <div key={book.id}>
            <div
              onMouseEnter={() => hoverOn(index)}
              onMouseLeave={() => hoverOut(index)}
              key={book.id}
            >
              <Book book={book} oneIsHovered={oneIsHovered} key={book.id} />
            </div>
          </div>
        ))}
      </BooksListStyled>
    </div>
  );
};

export default observer(BooksList);
