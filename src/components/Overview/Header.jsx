import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const OverviewHeader = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-8">
        {/* Headshot */}
        <img
          src="headshot.jpg"
          alt="logo"
          className="h-32 custom-drop-shadow rounded-full"
        />
        {/* Main Info (Name, Title, and Location) */}
        <div className="space-y-2">
          {/* Name */}
          <h1 className="text-4xl font-medium text-center">Jason Panay</h1>
          {/* Title and Location */}
          <div className="text-center">
            <h2 className="text-lg">Full Stack Software Engineer</h2>
            <div className="flex justify-center items-center space-x-2 text-zinc-400">
              <FontAwesomeIcon icon={faMapLocationDot} className="text-xs" />
              <p className="text-sm ">New York, New York</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewHeader;
