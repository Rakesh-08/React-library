import "./NavItem.css";

function NavItem({ title }) {
  return (
    <div className="navItemContainer">
      <p className="navItem">{title}</p>
    </div>
  );
}
export { NavItem };
