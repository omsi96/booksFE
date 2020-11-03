import styles, { Card, CookieImage } from "../styles";
const CookieItem = ({ cookie }) => (
  <div>
    <Card>
      <CookieImage src={cookie.img} alt="Cookie image" />
      <h4 style={styles.text}>{cookie.name}</h4>
      <p className="cookie-price">{cookie.price}</p>
    </Card>
  </div>
);

export default CookieItem;
