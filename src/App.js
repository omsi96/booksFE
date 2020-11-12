import Home from "./Components/Home";
import CookieList from "./Components/CookieList";
import { Route, Switch } from "react-router";
import { useState } from "react";
import { ChangeTheme, GlobalStyle } from "./styles";
import cookies from "./cookies";
import { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import CookieDetailsView from "./Components/CookieDetailsView";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggledTheme = (theme) => (theme === "dark" ? "light" : "dark");
  const toggleTheme = () => {
    setCurrentTheme(toggledTheme);
  };

  // DELETE
  const deleteCookie = (id) => {
    setCookiesArray(cookiesArray.filter((cookie) => cookie.id !== id));
  };

  const [cookiesArray, setCookiesArray] = useState(cookies);
  const [selectedCookie, setSelectedCookie] = useState(null);
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

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <Navbar />

        <ChangeTheme onClick={toggleTheme}>
          {`${toggledTheme(currentTheme)} mode`}
        </ChangeTheme>

        <Switch>
          <Route path="/cookies/:cookieSlug">
            <CookieDetailsView
              cookies={cookiesArray}
              deleteCookie={deleteCookie}
            />
          </Route>
          <Route path="/cookies">
            <CookieList
              cookiesArray={cookiesArray}
              deleteCookie={deleteCookie}
              setCookiesArray={setCookiesArray}
              setSelectedCookie={setSelectedCookie}
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
