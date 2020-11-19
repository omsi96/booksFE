import { NavLink } from "react-router-dom";
import globalStore from "../stores/GlobalStore";
import Logo from "./Logo";

import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";

const Navbar = ({ theme, toggle }) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ margin: "10px", float: "right" }}
        >
          <Logo />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-item nav-link active"
              to="/books"
              style={{ margin: "10px", float: "right" }}
            >
              Books
            </NavLink>
          </div>
          <div className="pull-right ">
            <ToggleButton
              isDark={globalStore.theme === "dark"}
              onChange={() => globalStore.toggleTheme()}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
