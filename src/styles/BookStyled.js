import styled from "styled-components";

export const BookStyled = styled.div`
  cursor: pointer;
  position: relative;
  background-color: black;
  margin: 50px;
  height: 400px;
  width: 240px;
  border-radius: 25px;
  background-size: cover;
  filter: drop-shadow(6px 4px 9px rgba(134, 122, 244, 0.38));
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const BookImage = styled.img`
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

export const ShadowFooter = styled.div`
  overflow: hidden;
  position: absolute;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 4px;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.73) 100%
  );
  text-align: center;
  z-index: 299;
`;

export const BookHeading = styled.h6`
  position: relative;
  padding: 3px;
  margin: 3px;
  color: white;
`;

export const BooksListStyled = styled.div`
  display: flex;
  /* margin: 40px; */
  flex-wrap: wrap;
  /* align-items: center; */
  /* overflow-x: scroll; */
  /* overflow-y: auto; */
  /* height: 400px; */
`;
