import { Title, Description } from "../styles";
import { PrimaryButton } from "../styles/Buttons";
import banner from "../assets/readers-banner.svg";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#F3E7DD",
          width: "100%",
          padding: 50,
          zIndex: -2,
          borderRadius: "10px",
        }}
      >
        <img
          style={{
            position: "absolute",
            height: "200px",
            top: "10%",
            right: 50,
            zIndex: -1,
          }}
          src={banner}
          alt="reader banner"
        />
        <div style={{ width: "50%" }}>
          <h2 style={{ color: "purple" }}>Build your library</h2>
          <p style={{ color: "gray" }}>
            Buy two selected books nd get one for free
          </p>
          <PrimaryButton>View all</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
