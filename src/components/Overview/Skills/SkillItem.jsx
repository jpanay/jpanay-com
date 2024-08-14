import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare as faSquareRegular } from "@fortawesome/free-regular-svg-icons";

const SkillItem = ({ skill }) => {
  const levelMapping = {
    1: { name: "Starting", textColor: "text-jpBlue" },
    2: { name: "Novice", textColor: "text-jpBlue" },
    3: { name: "Proficient", textColor: "text-jpGreen" },
    4: { name: "Advanced", textColor: "text-jpGreen" },
    5: { name: "Expert", textColor: "text-jpYellow" },
    6: { name: "Wizard", textColor: "text-jpYellow" },
  };
  const levelName = levelMapping[skill.level].name;
  const textColor = levelMapping[skill.level].textColor;

  return (
    <div className="my-2 w-32">
      {/* Skill Name */}
      <div className="flex space-x-2 items-center">
        <p className="text-sm font-medium whitespace-nowrap truncate">
          {skill.name}
        </p>
      </div>
      {/* Skill Barometer */}
      <div className="space-x-1">
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <FontAwesomeIcon
            key={level}
            className={`${level <= skill.level ? textColor : "text-zinc-800"}`}
            icon={level <= skill.level ? faSquare : faSquareRegular}
          />
        ))}
      </div>
      {/* Skill Level and YOE */}
      <div className="flex space-x-1 text-xs text-zinc-400">
        <p>{levelName}</p>
        <p>|</p>
        <p>
          {skill.yoe} Year{skill.yoe === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
};

export default SkillItem;
