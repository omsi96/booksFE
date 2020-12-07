/*
  Don't try to understand this code!
*/

import {
  BookStyled,
  BookImage,
  ShadowFooter,
  BookHeading,
} from "../../styles/BookStyled";
import "../../styles/styles.css";

import EditBookButton from "../buttons/EditBookButton";
import DeleteBookButton from "../buttons/DeleteBookButton";
import { useHistory } from "react-router";
import { observer } from "mobx-react";

const Book = ({ book, oneIsHovered }) => {
  const history = useHistory();
  const navigate = () => {
    console.log("NAVIGATING:", book);
    history.push(`/books/${book.slug}`);
  };
  return (
    <BookStyled className="book" oneIsHovered={oneIsHovered} book={book}>
      <BookImage src={book.image} />
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
      <ShadowFooter style={{ opacity: 1 }}>
        <DeleteBookButton book={book} />
        <EditBookButton book={book} />
        <BookHeading>{book.author}</BookHeading>
      </ShadowFooter>
    </BookStyled>
  );
};

export default observer(Book);
