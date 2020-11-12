import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

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
// const cookies = require("./cookies");

const Home = () => {
  return (
    <div>
      <Title>Cookies and beyond!</Title>
      <Description>Where cookies maniacs gather</Description>
    </div>
  );
};

export default Home;
