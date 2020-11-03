import styles, { ListWrapper } from "../styles";
import CookieItem from "./CookieItem";

const CookiesList = ({ cookies }) => (
  <ListWrapper>
    {cookies.map((cookie) => (
      <CookieItem cookie={cookie} />
    ))}
  </ListWrapper>
);

export default CookiesList;
