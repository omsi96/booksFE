import { BookImage } from "../../styles/BookStyled";
import { Redirect, useParams } from "react-router-dom";
import booksStore from "../../stores/BookStore";
import { observer } from "mobx-react";
import "../../styles/styles.css";
const BookDetailsView = () => {
  const books = booksStore.books;
  const { bookSlug } = useParams();
  let book = books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;
  console.log(bookSlug);
  console.log(book);

  return (
    <div style={{ display: "flex" }}>
      <div className="book">
        <BookImage width="50%" src={book.img} alt="" />
      </div>
      <div style={{ display: "block" }}>
        <h4>{book.name}</h4>
        <p>{`${book.price} KWD`} </p>
        <button onClick={() => booksStore.deleteBook(book.id)}>🗑</button>
        {/* <button onClick={() => booksStore.updateBook(book)}>✏️</button> */}
      </div>
    </div>
  );
};

export default observer(BookDetailsView);
