import { BooksListStyled } from "../../styles/BookStyled";
import { BsFilePlus } from "react-icons/bs";
import Book from "./Book";
import { Link } from "react-router-dom";

const BooksList = ({ books, deleteBook, setSelectedBook, selectedBook }) => {
  return (
    <>
      <BsFilePlus size="3em" />
      <BooksListStyled>
        {books.map((book) => (
          <Link to={`/books/${book.slug}`}>
            <Book book={book} />
          </Link>
        ))}
      </BooksListStyled>
    </>
  );
};

export default BooksList;
