import styled from "styled-components";

export const BookStyled = styled.div`
  position: relative;
  background-color: black;
  margin: 50px;
  height: 400px;
  width: 240px;
  border-radius: 25px;
  overflow: visible;
  background-size: cover;
  filter: ${(props) =>
    props.book.hovered
      ? "drop-shadow(22px 8px 18px rgba(134, 122, 244, 0.58))"
      : "drop-shadow(6px 4px 9px rgba(134, 122, 244, 0.38))"};
  transition: all 0.4s ease;
  filter: ${(props) => {
    if (props.oneIsHovered && !props.book.hovered) {
      return "blur(8px)";
    }
    if (!props.oneIsHovered || (props.oneIsHovered && props.book.hovered)) {
      return "blur(0px)";
    }
  }};
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
  object-fit: cover;
  overflow: hidden;
`;

export const ShadowFooter = styled.div`
  /* display: none; */
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 4px;
  bottom: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.73) 60%
  );
  text-align: center;
  z-index: 299;
  transition: all 0.5s ease;
`;

export const BookHeading = styled.h6`
  position: relative;
  padding: 3px;
  margin: 3px;
  color: white;
  font-weight: bold;
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

export const BookItem = styled.img`
  &:hover {
    transform: scale(1.2);
  }
`;
