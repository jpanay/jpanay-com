import { Link, useLocation } from "react-router-dom";

const NavItem = ({ name, route }) => {
  const location = useLocation();

  return (
    <Link to={route}>
      <p
        className={`duration-200 hover:text-jpGreen ${
          location.pathname === route ? "text-jpGreen" : ""
        }`}
      >
        {name}
      </p>
    </Link>
  );
};

export default NavItem;
