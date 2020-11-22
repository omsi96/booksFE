import React from "react";
import "../../styles/styles.css";
const BookActionItem = ({ action, children, position }) => {
  return (
    <div
      onClick={() => action()}
      className="book-control-item"
      color="white"
      size="1.5em"
    >
      {children}
    </div>
  );
};

export default BookActionItem;
