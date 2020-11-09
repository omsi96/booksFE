import { Card, CookieImage, Paragraph } from "../styles";
const CookieItem = ({ cookie, deleteCookie, setSelectedCookie }) => (
  <div>
    <Card onClick={() => setSelectedCookie(cookie)}>
      <CookieImage src={cookie.img} alt="Cookie image" />
      <h4 className="h4">{cookie.name}</h4>
      <Paragraph className="cookie-price">{cookie.price}</Paragraph>
      <button
        onClick={() => deleteCookie(cookie.id)}
        style={{ "font-size": 30 }}
      >
        🗑
      </button>
    </Card>
  </div>
);

export default CookieItem;
