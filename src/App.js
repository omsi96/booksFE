import styles, { Title, Description, GlobalStyle } from "./styles";
import cookies from "./cookies";
import CookieList from "./Components/CookieList";
import { ThemeProvider } from "styled-components";
// const cookies = require("./cookies");

const theme = {
  mainColor: "#242424",
  backgroundColor: "##fafafb",
  pink: "#ff85a2",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Title>Cookies and beyond!</Title>
        <Description>Where cookies maniacs gather</Description>
        <CookieList cookies={cookies} />
      </ThemeProvider>
    </div>
  );
}

export default App;
