import styles, { Card, CookieImage, Paragraph } from "../styles";
const CookieItem = ({ cookie }) => (
  <div>
    <Card>
      <CookieImage src={cookie.img} alt="Cookie image" />
      <h4 className="h4">{cookie.name}</h4>
      <Paragraph className="cookie-price">{cookie.price}</Paragraph>
    </Card>
  </div>
);

export default CookieItem;
