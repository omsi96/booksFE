import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import * as LocalHost from "./ExpressApis";
import * as LocalStorage from "./LocalStorage";
class BookStore {
  books = [];
  constructor() {
    makeObservable(this, {
      books: observable,
      fetchBooks: action,
      createBook: action,
      deleteBook: action,
      updateBook: action,
    });
  }
  // CHANGE THIS HERE TO ANY OTHER HOST LIKE FIREBASE ...
  API = LocalHost;
  fetchBooks = async () => {
    console.log("Fetching za books");
    this.books = await this.API.fetchBooks();
  };

  createBook = async (book) => {
    this.books = await this.API.createBook(this.books, book);
  };
  deleteBook = async (bookId) => {
    this.books = await this.API.deleteBook(this.books, bookId);
    await this.fetchBooks();
  };

  updateBook = async (book) => {
    await this.API.updateBook(this.books, book);
    this.books = await this.API.fetchBooks();
  };
}

const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;
