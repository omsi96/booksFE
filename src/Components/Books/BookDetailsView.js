import { BookImage } from "../../styles/BookStyled";
import { Redirect, useParams } from "react-router-dom";
import booksStore from "../../stores/BookStore";
import { observer } from "mobx-react";
import "../../styles/styles.css";
import EditBookButton from "../buttons/EditBookButton";
import DeleteBookButton from "../buttons/DeleteBookButton";
const BookDetailsView = () => {
  const books = booksStore.books;
  const { bookSlug } = useParams();
  let book = books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;
  console.log(bookSlug);
  console.log(book);

  return (
    <div className="book-details">
      <div className="book-details-div-display">
        <img className="book-image-display" src={book.img} alt="" />
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
