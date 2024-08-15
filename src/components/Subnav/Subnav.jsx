import SubnavItem from "./SubnavItem";

const Subnav = ({ activeSection }) => {
  return (
    <div className="z-20 fixed top-16 right-4 md:block hidden">
      <div className="p-4 rounded backdrop-blur border border-zinc-800 text-zinc-600">
        <SubnavItem
          title="About"
          active={activeSection === "about"}
          customStyle={"decoration-jpGreen"}
          targetId="about"
        />
        <SubnavItem
          title="Experience"
          active={activeSection === "experience"}
          customStyle={"decoration-jpBlue"}
          targetId="experience"
        />
        <SubnavItem
          title="Projects"
          active={activeSection === "projects"}
          customStyle={"decoration-jpBlue"}
          targetId="projects"
        />
        <SubnavItem
          title="Technical Proficiencies"
          active={activeSection === "skills"}
          customStyle={"decoration-jpYellow"}
          targetId="skills"
        />
      </div>
    </div>
  );
};

export default Subnav;
