import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              to="/cookies"
              style={{ margin: "10px", float: "right" }}
            >
              Cookies
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
