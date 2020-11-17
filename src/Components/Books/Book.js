import {
  BookStyled,
  BookImage,
  ShadowFooter,
  BookHeading,
} from "../../styles/BookStyled";
const Book = ({ book, oneIsHovered }) => {
  return (
    <BookStyled oneIsHovered={oneIsHovered} book={book}>
      <BookImage src={book.img} />
      <ShadowFooter style={{ opacity: book.hovered ? 1 : 0 }}>
        <BookHeading>{book.author}</BookHeading>
      </ShadowFooter>
    </BookStyled>
  );
};

export default Book;
