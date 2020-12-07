import Axios from "axios";

const ROOT_URL = "http://localhost/";
const local = Axios.create({
  baseURL: ROOT_URL,
  timeout: 1000,
});

export const fetchBooks = async () => {
  try {
    const response = await local.get("books");
    console.log("BookStore -> Response\n", response.data);
    return response.data;
  } catch (e) {
    console.log("Couldn't find data. Error: ", e);
    return null;
  }
};

export const createBook = async (book) => {
  console.log("Yoo Creation", book);
  try {
    const response = await local.post("books/create/", book);
    return response.data;
  } catch (e) {
    console.log("Couldn't createBook!");
    return;
  }
};

export const deleteBook = async (books, bookId) => {
  await local.delete(`books/${bookId}`);
  books = await fetchBooks();
  return books;
};

export const updateBook = async (books, book) => {
  try {
    const response = await local.put(`books/${book.id}`, book);
    return response.data;
  } catch (e) {
    console.log("Couldn't update Book!");
    return;
  }
};
