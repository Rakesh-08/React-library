import "./Navbar.css";
import { NavItem } from "./NavItem/NavItem";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft"> Coding Masters</div>
      <div className="navbarRight">
        <NavItem title="Home" />
        <NavItem title="Blog" />
        <NavItem title="Courses" />
        <NavItem title="Contact us" />
        <NavItem title="Login/Signup" />
      </div>
    </div>
  );
}

export { Navbar };
