import {
  BookStyled,
  BookImage,
  ShadowFooter,
  BookHeading,
} from "../../styles/BookStyled";
const Book = ({ book }) => {
  return (
    <BookStyled book={book}>
      <BookImage src={book.img} />
      <ShadowFooter>
        <BookHeading>{book.author}</BookHeading>
      </ShadowFooter>
    </BookStyled>
  );
};

export default Book;
