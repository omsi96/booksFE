import { useState } from "react";
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
      <label
        style={{ cursor: "pointer", marginRight: -200 }}
        onClick={handleClick}
      >
        ✏️
      </label>
    </>
  );
};

export default EditBookButton;
