import { action, makeObservable, observable } from "mobx";
import slugify from "react-slugify";
import books from "../data/books.json";

class BookStore {
  constructor(books) {
    this.books = books;
    makeObservable(this, {
      books: observable,
      createBook: action,
      deleteBook: action,
    });
  }

  createBook = (book) => {
    book.slug = slugify(book.name);
    book.id = books[books.length - 1].id + 1;
    this.books.push(book);
  };
  deleteBook = (bookId) => {
    this.books = this.books.filter((book) => book.id !== bookId);
  };
}

const bookStore = new BookStore(books);
export default bookStore;
