import { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
// import bookStore from "../../stores/BookStore";
import NewBookModal from "../Modals/NewBookModal";

const EditBookButton = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <AiTwotoneEdit
        style={{
          position: "absolute",
          top: "50px",
          right: "0px",
          margin: "12px",
        }}
        onClick={openModal}
        color="white"
        size="1.5em"
      />
      <NewBookModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default EditBookButton;
