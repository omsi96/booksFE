import bookStore from "../../stores/BookStore";
import {
  BookStyled,
  BookImage,
  ShadowFooter,
  BookHeading,
} from "../../styles/BookStyled";
import { MdDelete } from "react-icons/md";
import EditBookButton from "../buttons/EditBookButton";
import BookActionItem from "../buttons/BookActionItem";
const Book = ({ book, oneIsHovered }) => {
  return (
    <BookStyled className="book" oneIsHovered={oneIsHovered} book={book}>
      <BookImage src={book.img} />
      <ShadowFooter style={{ opacity: book.hovered ? 1 : 0 }}>
        {/* <BookActionItem
          action={() => bookStore.deleteBook(book.id)}
          position="right"
        >
          <MdDelete color="white" size="1.5em" />
        </BookActionItem> */}
        <BookActionItem>
          <EditBookButton
            book={book}
            style={{ position: "absolute", right: "0px" }}
          />
        </BookActionItem>
        <BookHeading>{book.author}</BookHeading>
      </ShadowFooter>
    </BookStyled>
  );
};

export default Book;
