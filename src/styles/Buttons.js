import styled from "styled-components";

export const PrimaryButton = styled.button`
  color: white;
  background-color: #c2a792;
  border: none;
  padding: 6px 15px;
  border-radius: 0.5vh;
`;
export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.pink};
  color: ${(props) => props.theme.backgroundColor};
`;
