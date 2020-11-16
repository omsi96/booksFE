import Home from "./Components/Home";
import { Route, Switch } from "react-router";
import { useState } from "react";
import { ChangeTheme, GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import BookDetailsView from "./Components/Books/BookDetailsView";
import BooksList from "./Components/Books/BooksList";
import books from "./data/books.json";

const App = () => {
  // THEME SELECTION
  const theme = {
    light: {
      mainColor: "#242424",
      backgroundColor: "##fafafb",
      pink: "#ff85a2",
    },
    dark: {
      mainColor: "#fafafb",
      backgroundColor: "#242424",
      pink: "#ff85a2",
    },
  };
  const toggledTheme = (theme) => (theme === "dark" ? "light" : "dark");
  const toggleTheme = () => {
    setCurrentTheme(toggledTheme);
  };

  // STATES
  const [currentTheme, setCurrentTheme] = useState("light");
  const [booksArray, setBooksArray] = useState(books);
  const [selectedBook, setSelectedBook] = useState(null);

  /// ENVIRONMENT STATES METHODS
  // DELETE
  const deleteBook = (id) => {
    setBooksArray(booksArray.filter((book) => book.id !== id));
  };

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <Navbar />

        <ChangeTheme onClick={toggleTheme}>
          {`${toggledTheme(currentTheme)} mode`}
        </ChangeTheme>

        {/* 
        *
        *
        ROUTER 
        *
        *
        *
        */}
        <Switch>
          <Route path="/books/:bookSlug">
            <BookDetailsView books={booksArray} deleteBook={deleteBook} />
          </Route>
          <Route path="/books">
            <BooksList
              books={booksArray}
              deleteBook={deleteBook}
              setSelectedBook={setSelectedBook}
              selectedBook={selectedBook}
            />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
