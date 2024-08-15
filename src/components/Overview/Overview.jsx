import About from "./About";
import Experience from "./Experience/Experience";
import Header from "./Header";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Overview = () => {
  return (
    <div className="flex flex-col items-center space-y-8 py-4 px-8">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default Overview;
