import { BooksListStyled } from "../../styles/BookStyled";
import Book from "./Book";
import { Link } from "react-router-dom";
import AddBookButton from "../buttons/AddBookButton";
import booksStore from "../../stores/BookStore";
import { observer } from "mobx-react";
import { useState } from "react";
const BooksList = () => {
  const books = booksStore.books.map((book) => ({ ...book, hovered: false }));
  const [hoveredBooks, setHoveredBooks] = useState(books);
  const [oneIsHovered, setOneIsHovered] = useState(false);
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

  return (
    <div>
      <AddBookButton />
      <BooksListStyled>
        {hoveredBooks.map((book, index) => (
          <Link to={`/books/${book.slug}`}>
            <div
              onMouseEnter={() => hoverOn(index)}
              onMouseLeave={() => hoverOut(index)}
            >
              <Book book={book} oneIsHovered={oneIsHovered} />
            </div>
          </Link>
        ))}
      </BooksListStyled>
    </div>
  );
};

export default observer(BooksList);
