import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <div className="z-10 fixed top-0 w-full flex justify-between py-3 px-4 text-zinc-500 duration-300 border-b border-transparent hover:border-jpGreen backdrop-blur-md">
      {/* Logo */}
      <div className="flex-1 flex items-center">
        <Link to="/">
          <img src="jp.svg" alt="logo" className="h-4" />
        </Link>
      </div>
      {/* Nav Items */}
      <div className="flex space-x-6">
        <NavItem name="Overview" route="/" />
        <NavItem name="Resources" route="/resources" />
      </div>
      {/* Links (Github and Linkedin) */}
      <div className="flex-1 flex justify-end space-x-4">
        <a
          href="https://github.com/jpanay"
          target="_blank"
          rel="noreferrer"
          className="sm:block hidden"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-2xl cursor-pointer hover:text-jpGreen duration-300"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jpanay/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl cursor-pointer hover:text-jpGreen duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;