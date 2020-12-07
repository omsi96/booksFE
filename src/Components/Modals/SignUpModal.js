import { useState } from "react";
import Modal from "react-modal";
import { AuthButtonStyled } from "../../styles/Buttons";
import authorStore from "../../stores/AuthStore";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const SignupModal = ({ closeModal, isOpen }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Yoo");
    if (await authorStore.signUp(user)) {
      closeModal();
    } else {
      console.log("ERROR");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signup Modal"
    >
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="name"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <AuthButtonStyled className="btn float-right" type="submit">
          Sign up
        </AuthButtonStyled>
      </form>
    </Modal>
  );
};

export default SignupModal;
