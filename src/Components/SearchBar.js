import { SearchBarStyled } from "../styles/SearchBarStyled";

export const SearchBar = ({ setQuery }) => (
  <SearchBarStyled
    placeholder="Search for a cookie name"
    onChange={(event) => {
      setQuery(event.target.value);
      console.log(("Query", event.target.value));
    }}
  />
);
