import { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
// import bookStore from "../../stores/BookStore";
import NewBookModal from "../Modals/NewBookModal";
import "../../styles/styles.css";

const EditBookButton = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      console.log("I am clicking edit button !");
      console.log(e);
      openModal();
    } else {
      return;
    }
  };
  return (
    <>
      <NewBookModal isOpen={isOpen} closeModal={closeModal} oldBook={book} />

      <label onClick={handleClick}>✏️</label>
    </>
  );
};

// <div>
// <AiTwotoneEdit
//   onClick={(e) => {
//     e.stopPropagation();

//     console.log("I'm trying to open");
//     // openModal();
//   }}
//   color="white"
//   size="2.5em"
//   className="book-action-item"
// />
// {/* <NewBookModal isOpen={isOpen} closeModal={closeModal} oldBook={book} /> */}
// </div>

export default EditBookButton;
