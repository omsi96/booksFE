import slugify from "react-slugify";
import jsonBooks from "../data/books.json";
import _ from "lodash";
export const fetchBooks = async () => {
  return jsonBooks;
};

export const createBook = async (books, book) => {
  book.slug = slugify(book.name);
  book.id = books[books.length - 1].id + 1;
  books.push(book);
  return books;
};

export const deleteBook = async (books, bookId) => {
  return [...books].filter((book) => book.id !== bookId);
};

export const updateBook = async (books, book) => {
  return _.extend(
    books.find((_book) => book.id === _book.id),
    book
  );
};
