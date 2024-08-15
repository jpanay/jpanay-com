import { useState, useEffect, useRef } from "react";
import About from "./About";
import Experience from "./Experience/Experience";
import Header from "./Header";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Subnav from "../Subnav/Subnav";

const Overview = () => {
  const [activeSection, setActiveSection] = useState("");

  // Refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  // Intersection Observer to track which section is active
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe each section
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-8 pb-24 px-8">
      <Subnav activeSection={activeSection} />
      <Header />
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="experience" ref={experienceRef}>
        <Experience />
      </div>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="skills" ref={skillsRef}>
        <Skills />
      </div>
    </div>
  );
};

export default Overview;
