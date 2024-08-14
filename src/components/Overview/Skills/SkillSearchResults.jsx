import SkillItem from "./SkillItem";

const SkillSearchResults = ({ skills }) => {
  return (
    <div className="flex flex-wrap px-4 py-2">
      {skills.map((skill) => (
        <SkillItem key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default SkillSearchResults;
