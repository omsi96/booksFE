import "../../styles/styles.css";
import BookActionItem from "./BookActionItem";
import { MdDelete } from "react-icons/md";
import bookStore from "../../stores/BookStore";

const DeleteBookButton = ({ book }) => {
  return (
    <BookActionItem
      action={() => {
        console.log("Yoo, you deleting ?", book.id);
        bookStore.deleteBook(book.id);
      }}
    >
      <MdDelete color="white" size="1.5em" />
    </BookActionItem>
  );
};

export default DeleteBookButton;
