import SubnavItem from "./SubnavItem";

const Subnav = ({ activeSection }) => {
  return (
    <div className="z-20 fixed top-16 right-4 md:block hidden">
      <div className="p-4 rounded backdrop-blur border border-zinc-800 text-zinc-600">
        <SubnavItem
          title="About"
          active={activeSection === "about"}
          color={"jpGreen"}
          targetId="about"
        />
        <SubnavItem
          title="Experience"
          active={activeSection === "experience"}
          color={"jpBlue"}
          targetId="experience"
        />
        <SubnavItem
          title="Projects"
          active={activeSection === "projects"}
          color={"jpBlue"}
          targetId="projects"
        />
        <SubnavItem
          title="Technical Proficiencies"
          active={activeSection === "skills"}
          color={"jpYellow"}
          targetId="skills"
        />
      </div>
    </div>
  );
};

export default Subnav;
