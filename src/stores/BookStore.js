import Axios from "axios";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
// import books from "../data/books.json";
import _ from "lodash";
class BookStore {
  constructor() {
    makeAutoObservable(this);
  }
  books = [];
  fetchBooks = async () => {
    console.log("Fetching za books");
    try {
      const response = await Axios.get("http://localhost/books");
      console.log("BookStore -> Response\n", response);
      this.books = response.data;
    } catch (e) {
      console.log("BookStore -> Response\n", this.books);
      this.books = null;
    }
  };

  createBook = (book) => {
    book.slug = slugify(book.name);
    book.id = this.books[this.books.length - 1].id + 1;
    this.books.push(book);
  };
  deleteBook = (bookId) => {
    this.books = this.books.filter((book) => book.id !== bookId);
  };

  updateBook = (book) => {
    // TODO:COMPLETE THIS TASK!
    _.extend(
      this.books.find((_book) => book.id === _book.id),
      book
    );
  };
}

const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
