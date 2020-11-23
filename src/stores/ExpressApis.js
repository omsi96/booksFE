import Axios from "axios";

const ROOT_URL = "http://localhost";
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

export const createBook = async (books, book) => {
  console.log("Yoo Creation");
  const response = await local.post("books/create/", book);
  console.log("Yoo Creation 2");

  if (response.status === 201) {
    console.log("Creation with fetch books succeeded!");
    const book = response.data;
    return books.push(book);
  } else {
    console.log("Couldn't createBook!");
    return books;
  }
};

export const deleteBook = async (books, bookId) => {
  await local.delete(`books/${bookId}`);
  books = await fetchBooks();
  return books;
};

export const updateBook = async (books, book) => {
  await local.put(`books/${book.id}`);
};
