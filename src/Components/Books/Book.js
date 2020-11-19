import bookStore from "../../stores/BookStore";
import {
  BookStyled,
  BookImage,
  ShadowFooter,
  BookHeading,
} from "../../styles/BookStyled";
import { MdDelete } from "react-icons/md";
import EditBookButton from "../buttons/EditBookButton";
const Book = ({ book, oneIsHovered }) => {
  return (
    <BookStyled className="book" oneIsHovered={oneIsHovered} book={book}>
      <BookImage src={book.img} />
      <ShadowFooter style={{ opacity: book.hovered ? 1 : 0 }}>
        <MdDelete
          style={{ position: "absolute", top: "50px", margin: "12px" }}
          onClick={() => bookStore.deleteBook(book.id)}
          color="white"
          size="1.5em"
        />
        <EditBookButton book={book} />
        <BookHeading>{book.author}</BookHeading>
      </ShadowFooter>
    </BookStyled>
  );
};

export default Book;
