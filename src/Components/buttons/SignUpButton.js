import React, { useState } from "react";
import SignUpModal from "../Modals/SignUpModal";
const SignUpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <SignUpModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <button onClick={() => setIsOpen(true)}>Sign up</button>
    </div>
  );
};

export default SignUpButton;
