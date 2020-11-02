import styles from "../styles";
const CookieItem = ({ cookie }) => (
  <div>
    <div style={styles.card}>
      <img style={styles.cookieImage} src={cookie.img} alt="" />
      <h4 style={styles.text}>{cookie.name}</h4>
      <p style={styles.text}>{cookie.price}</p>
    </div>
  </div>
);

export default CookieItem;
