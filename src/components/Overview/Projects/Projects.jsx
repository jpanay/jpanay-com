import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "ZenRent",
    subheader: "Web Application",
    description:
      "An online apartment rental platform that connects landlords and tenants with over 1,500 no fee apartments.",
    link: "https://zenrentnyc.com/",
    image: "zenrent.png",
  },
  {
    title: "Personal Site V1",
    subheader: "Website",
    description:
      "My first personal website built with vanilla HTML, CSS, and JavaScript.",
    link: "https://jpanay.github.io/",
    image: "personalsite.png",
  },
  {
    title: "Space Viewer",
    subheader: "Web Application",
    description:
      "An interactive 3D experience that allows users to explore a scale model of our universe from individual planets and stars to the Laniakea Cluster and beyond.",
    link: "https://jpanay.github.io/spaceView/",
    video: "spaceviewer.mov",
  },
  {
    title: "Jumprope Converter",
    subheader: "Google Chrome Extension",
    description:
      "Jumprope Converter allows students using the Jumprope grading platform to see their grades as a standard percentage instead of it's confusing non-linear 1-7 scale",
    link: "https://chromewebstore.google.com/detail/jumprope-converter/opledhcnlefammhognofkojollkipgho",
    image: "jumprope.png",
  },
];

const Projects = () => {
  return (
    <div className="max-w-2xl">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
