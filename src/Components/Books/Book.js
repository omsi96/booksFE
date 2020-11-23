/*
  Don't try to understand this code!
*/

import bookStore from "../../stores/BookStore";
import {
  BookStyled,
  BookImage,
  ShadowFooter,
  BookHeading,
} from "../../styles/BookStyled";
import "../../styles/styles.css";
import { MdDelete } from "react-icons/md";
import EditBookButton from "../buttons/EditBookButton";
import DeleteBookButton from "../buttons/DeleteBookButton";
import BookActionItem from "../buttons/BookActionItem";
import { useHistory } from "react-router";
import { observer } from "mobx-react";

const Book = ({ book, oneIsHovered }) => {
  const history = useHistory();
  const navigate = () => {
    history.push(`/books/${book.slug}`);
  };
  return (
    <BookStyled className="book" oneIsHovered={oneIsHovered} book={book}>
      <BookImage src={book.img} />
      <div
        style={{
          top: 0,
          // background: "pink",
          // zIndex: -1,
          width: " 100%",
          height: "80%",
          cursor: "pointer",
        }}
        onClick={navigate}
      ></div>
      <ShadowFooter style={{ opacity: book.hovered ? 1 : 0 }}>
        {/* <DeleteBookButton book={book} />
        <EditBookButton book={book} /> */}
        <button onClick={() => bookStore.deleteBook(book.id)}> DELETE </button>

        <BookHeading>{book.author}</BookHeading>
      </ShadowFooter>
    </BookStyled>
  );
};

export default observer(Book);
