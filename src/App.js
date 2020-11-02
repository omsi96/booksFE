import styles from "./styles";
import cookies from "./cookies";
import CookieList from "./Components/CookieList";
// const cookies = require("./cookies");

function App() {
  return (
    <div style={styles.background}>
      <h1 style={styles.title}>Cookie Shop!</h1>
      <CookieList cookies={cookies} />
    </div>
  );
}

export default App;
