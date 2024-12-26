import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-zinc-100 border-t py-4 sm:px-6 px-4">
      {/* Left Side */}
      <div className="flex flex-col items-center">
        <img src="/brian/healthdeptsmall.png" className="h-12" />
        <div className="font-semibold text-center">
          <p className="sm:text-lg leading-5 pt-1">HEALTH DEPT</p>
          <p className="text-xs font-bold">SOLUTIONS</p>
        </div>
      </div>
      {/* Right Side */}
      <div className="space-y-0.5 sm:text-base text-sm">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} />
          <p>(917) 473-0024</p>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>healthdeptsolutions@gmail.com</p>
        </div>
        <p>© 2025 HEALTH DEPT SOLUTIONS</p>
      </div>
    </div>
  );
};

export default Footer;
