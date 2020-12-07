import styled from "styled-components";

export const SearchBarStyled = styled.input`
  padding: 0.7rem 2rem;
  margin: 1rem auto;
  display: block;
  width: 30%;
  border-radius: 50vh;
  border: none;
  border-color: #dbdbdb;
  outline: none;
  background-color: #f5f7f8;
  font-family: "Fjalla One", sans-serif;
  font-weight: bold;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #bcc2c4;
  }
  :focus {
    width: 40%;
  }
  transition: all 0.3s ease;
`;
