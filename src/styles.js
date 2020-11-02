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
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    width: "300px",
    height: "200px",
    backgroundColor: "white",
    margin: "20px",
    padding: "10px",
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

export default styles;
