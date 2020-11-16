import { BookImage, BookStyled } from "../../styles/BookStyled";
import { Redirect, useParams } from "react-router-dom";

const BookDetailsView = ({ books, deleteBook }) => {
  const { bookSlug } = useParams();
  let book = books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;
  console.log(bookSlug);
  console.log(book);
  return (
    <div style={{ display: "flex" }}>
      <BookStyled>
        <BookImage width="50%" src={book.img} alt="" />
      </BookStyled>
      <div style={{ display: "block" }}>
        <h4>{book.name}</h4>
        <p>{book.price}</p>
        <button onClick={() => deleteBook(book.id)}>🗑</button>
      </div>
    </div>
  );
};

export default BookDetailsView;
