import { useState } from "react";
import styles, {
  Title,
  Description,
  GlobalStyle,
  ChangeTheme,
  CookieImage,
} from "./styles";
import cookies from "./cookies";
import CookieList from "./Components/CookieList";
import CookieDetailsView from "./Components/CookieDetailsView";
import { ThemeProvider } from "styled-components";
// const cookies = require("./cookies");

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

function App() {
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

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />

        <ChangeTheme onClick={toggleTheme}>
          {`${toggledTheme(currentTheme)} mode`}
        </ChangeTheme>
        <Title>Cookies and beyond!</Title>
        <Description>Where cookies maniacs gather</Description>

        {selectedCookie ? (
          <>
            <button
              onClick={() => setSelectedCookie(null)}
              display={selectedCookie ? "block" : "none"}
            >
              🔙
            </button>
            <CookieDetailsView
              deleteCookie={deleteCookie}
              cookie={selectedCookie}
            />
          </>
        ) : (
          <CookieList
            cookiesArray={cookiesArray}
            deleteCookie={deleteCookie}
            setCookiesArray={setCookiesArray}
            setSelectedCookie={setSelectedCookie}
          />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
