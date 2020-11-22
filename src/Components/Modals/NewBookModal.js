import { useState } from "react";
import Modal from "react-modal";
import booksStore from "../../stores/BookStore";

const NewBookModal = ({ isOpen, closeModal, oldBook }) => {
  const [book, setBook] = useState(
    { ...oldBook } ?? {
      name: "",
      author: "",
      img: "",
      description: "",
      price: 0,
    }
  );

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(book);
    // Should make sure that the book has been created!
    oldBook ? booksStore.updateBook(book) : booksStore.createBook(book);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeModal()}
      contentLabel="New Book Modal"
    >
      <h3>New Book</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              value={book.name}
            />
          </div>
          <div className="col-6">
            <label>Author</label>
            <input
              required
              type="Author"
              className="form-control"
              name="author"
              onChange={handleChange}
              value={book.author}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              required
              type="number"
              min="1"
              className="form-control"
              name="price"
              onChange={handleChange}
              value={book.price}
            />
          </div>
          <div className="col-6">
            <label>Description</label>
            <input
              required
              type="text"
              className="form-control"
              name="description"
              onChange={handleChange}
              value={book.description}
            />
          </div>
          <div className="col-12">
            <label>Image</label>
            <input
              required
              type="text"
              className="form-control"
              name="img"
              onChange={handleChange}
              value={book.img}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              {oldBook ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default NewBookModal;
