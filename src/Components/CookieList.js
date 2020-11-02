import styles from "../styles";
import CookieItem from "./CookieItem";

const CookiesList = ({ cookies }) => (
  <div style={styles.cardsContainer}>
    {cookies.map((cookie) => (
      <CookieItem cookie={cookie} />
    ))}
  </div>
);

export default CookiesList;
