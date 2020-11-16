import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import BooksList from "../Components/Books/BooksList";
import styles, {
  Title,
  Description,
  GlobalStyle,
  ChangeTheme,
  CookieImage,
} from "../styles";
import cookies from "../cookies";
import CookieList from "./CookieList";
import CookieDetailsView from "./CookieDetailsView";
import { ThemeProvider } from "styled-components";
import Book from "./Books/Book";
import books from "../data/books.json";

const Home = () => {
  return (
    <div>
      <Title>Cookies and beyond!</Title>
      <Description>Where cookies maniacs gather</Description>

      {/* <BooksList books={books} /> */}
    </div>
  );
};

export default Home;
