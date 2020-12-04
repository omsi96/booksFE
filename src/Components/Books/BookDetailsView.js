import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import booksStore from "../../stores/BookStore";
import "../../styles/styles.css";
import EditBookButton from "../buttons/EditBookButton";
import DeleteBookButton from "../buttons/DeleteBookButton";
const BookDetailsView = () => {
  const books = booksStore.books;
  console.log("I am at details and I'm looking for a book", books);
  const { bookSlug } = useParams();
  let book = books.find((book) => book.slug === bookSlug);
  console.log("**** FOUND book", bookSlug);
  if (!book) return <Redirect to="/books" />;
  console.log(bookSlug);
  console.log(book);

  return (
    <div className="book-details">
      <div className="book-details-div-display">
        <img className="book-image-display" src={book.image} alt="" />
      </div>
      <div>
        <h4>{book.name}</h4>
        <p>{`${book.price} KWD`} </p>
        <DeleteBookButton book={book} />
        <EditBookButton book={book} />
      </div>
    </div>
  );
};

export default observer(BookDetailsView);
