import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between py-2 px-4 text-zinc-500 duration-300 border-b border-transparent hover:border-jpGreen">
      {/* Logo */}
      <div className="flex-1 flex items-center">
        <Link to="/">
          <img src="jp.svg" alt="logo" className="h-4" />
        </Link>
      </div>
      {/* Nav Items */}
      <div className="flex space-x-6">
        <NavItem name="Overview" route="/" />
        <NavItem name="Experience" route="/experience" />
        <NavItem name="Resources" route="/resources" />
      </div>
      {/* TBD */}
      <div className="flex-1 flex justify-end">
        <p>TBD</p>
      </div>
    </div>
  );
};

export default Nav;
