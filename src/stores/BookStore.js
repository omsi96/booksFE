import Axios from "axios";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import books from "../data/books.json";

class BookStore {
  constructor(books) {
    this.books = books;
    makeAutoObservable(this);
  }

  fetchBooks = async () => {
    console.log("Fetching za books");
    const response = await Axios.get("http://localhost/books");
    console.log("BookStore -> Response\n", response);
  };

  createBook = (book) => {
    book.slug = slugify(book.name);
    book.id = books[books.length - 1].id + 1;
    this.books.push(book);
  };
  deleteBook = (bookId) => {
    this.books = this.books.filter((book) => book.id !== bookId);
  };

  updateBook = (book) => {
    // TODO:COMPLETE THIS TASK!
  };
}

const bookStore = new BookStore(books);
bookStore.fetchBooks();
export default bookStore;
