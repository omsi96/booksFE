import Home from "./Components/Home";
import { Route, Switch } from "react-router";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import BookDetailsView from "./Components/Books/BookDetailsView";
import BooksList from "./Components/Books/BooksList";
import { observer } from "mobx-react";
import globalStore from "./stores/GlobalStore";

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

  // STATES

  return (
    <>
      <ThemeProvider theme={theme[globalStore.theme]}>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/books/:bookSlug">
            <BookDetailsView />
          </Route>
          <Route path="/books">
            <BooksList />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default observer(App);
