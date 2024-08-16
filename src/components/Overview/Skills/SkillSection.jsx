import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SkillItem from "./SkillItem";

const SkillSection = ({ title, skills, globalExpanded, setGlobalExpanded }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    setGlobalExpanded(null);
  };

  useEffect(() => {
    if (globalExpanded !== null) {
      setExpanded(globalExpanded);
    }
  }, [globalExpanded]);

  return (
    <div>
      {/* Title, Count, and Expand Toggle */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b border-zinc-600 hover:bg-zinc-800 cursor-pointer"
        onClick={toggleExpanded}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <div className="flex items-center space-x-4">
          <h2 className="w-5 h-5 flex items-center justify-center border border-zinc-600 rounded text-xs font-semibold text-zinc-400">
            {skills.length}
          </h2>
          <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
        </div>
      </div>
      {/* Skill Items */}
      {expanded && (
        <div className="flex flex-wrap sm:justify-start justify-evenly px-4 py-1 bg-zinc-900">
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillSection;
