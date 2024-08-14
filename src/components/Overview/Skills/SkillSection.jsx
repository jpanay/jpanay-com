import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SkillItem from "./SkillItem";

const SkillSection = ({ title, skills }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="rounded-lg">
      {/* Title and Count */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b border-zinc-600 hover:bg-zinc-800 cursor-pointer"
        onClick={toggleExpanded}
      >
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">{title}</h2>
          <h2 className="w-5 h-5 flex items-center justify-center border border-zinc-600 rounded text-xs font-semibold text-zinc-400">
            {skills.length}
          </h2>
        </div>
        <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
      </div>
      {expanded && (
        <div className="flex flex-wrap px-4 py-1 bg-zinc-900">
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillSection;
