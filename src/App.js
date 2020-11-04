import { useState } from "react";
import styles, { Title, Description, GlobalStyle } from "./styles";
import cookies from "./cookies";
import CookieList from "./Components/CookieList";
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
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />

        <button onClick={toggleTheme}> TOGGLE </button>
        <Title>Cookies and beyond!</Title>
        <Description>Where cookies maniacs gather</Description>
        <CookieList cookies={cookies} />
      </ThemeProvider>
    </div>
  );
}

export default App;
