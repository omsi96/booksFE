import { useState } from "react";
import { ListWrapper } from "../styles";
import CookieItem from "./CookieItem";
import { SearchBar } from "./SearchBar";
const CookiesList = ({ cookiesArray }) => {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBar setQuery={setQuery} />

      <ListWrapper>
        {cookiesArray
          .filter((cookie) => {
            console.log("I'm filtering based on query", query);
            return cookie.name.toLowerCase().includes(query.toLowerCase());
          })
          .map((cookie) => (
            <CookieItem cookie={cookie} key={cookie.id} />
          ))}
      </ListWrapper>
    </>
  );
};

export default CookiesList;
