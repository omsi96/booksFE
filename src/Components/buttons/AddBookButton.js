import { useState } from "react";
import { BsFilePlus } from "react-icons/bs";
import NewBookModal from "../Modals/NewBookModal";

const AddBookButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <BsFilePlus
        size="3em"
        className="float-right"
        onClick={openModal}
        style={{ margin: "20px", cursor: "pointer" }}
      />
      <NewBookModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddBookButton;
