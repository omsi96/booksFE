import { Link } from "react-router-dom";
import { Card, CookieImage, Paragraph } from "../styles";
const CookieItem = ({ cookie, deleteCookie }) => (
  <div>
    <Card>
      <Link to={`/cookies/${cookie.slug}`}>
        <CookieImage src={cookie.img} alt="Cookie image" />
      </Link>
      <h4 className="h4">{cookie.name}</h4>
      <Paragraph className="cookie-price">{cookie.price}</Paragraph>
      <button onClick={() => deleteCookie(cookie.id)} style={{ fontSize: 30 }}>
        🗑
      </button>
    </Card>
  </div>
);

export default CookieItem;
