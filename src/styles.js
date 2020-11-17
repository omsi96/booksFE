import styled, { createGlobalStyle } from "styled-components";
export const Title = styled.h1`
  text-align: center;
  color: purple;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;
export const Description = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Paragraph = styled.p`
  color: ${(props) => props.theme.mainColor};
`;

export const Card = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  margin: 20px;
  padding: 10px;
  border-style: solid;
  border-width: 0.5px;
  border-color: #0f0f0f5f;

  .cookie-price {
    color: ${(props) => props.theme.pink};
  }

  h4 {
    color: black;
  }
`;

export const CookieImage = styled.img`
  position: relative;
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const styles = {
  background: {
    backgroundImage: 'url("https://wallpaperaccess.com/full/1277890.jpg")',
    width: "100vw",
    height: "100vh",
    repeat: "noRepeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
  },
  title: {
    color: "white",
    fontSize: "30px",
  },

  cookieImage: {
    position: "relative",
    width: "100%",
    height: "50%",
    objectFit: "cover",
  },
  text: {
    textAlign: "center",
  },
};

export const ChangeTheme = styled.button`
  color: ${(props) => props.theme.mainColor};
  background: ${(props) => props.theme.backgroundColor};
  padding: 10px;
  /* margin: 10px; */
`;

export default styles;
