import { BooksListStyled } from "../../styles/BookStyled";
import Book from "./Book";

import AddBookButton from "../buttons/AddBookButton";

import { observer } from "mobx-react";
import { useState } from "react";
import { SearchBar } from "../SearchBar";
import bookStore from "../../stores/BookStore";
const BooksList = () => {
  // STATES
  const [query, setQuery] = useState("");
  // METHODS

  const filterBooksByName = (book) => {
    return book.name.toLowerCase().includes(query.toLowerCase());
  };

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <AddBookButton />
      <BooksListStyled>
        {bookStore.books?.filter(filterBooksByName).map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </BooksListStyled>
    </div>
  );
};

export default observer(BooksList);
