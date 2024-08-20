import { useEffect, useState } from "react";
import SkillSearch from "./SkillSearch";
import SkillSection from "./SkillSection";
import SkillSearchResults from "./SkillSearchResults";

const skillSections = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", yoe: 5, level: 5 },
      { name: "TypeScript", yoe: 3, level: 4 },
      { name: "Python", yoe: 2, level: 3 },
      { name: "HTML", yoe: 5, level: 5 },
      { name: "CSS/Sass/Less", yoe: 5, level: 5 },
    ],
  },
  {
    name: "Front-end Frameworks",
    skills: [
      { name: "React", yoe: 4, level: 5 },
      { name: "React Router", yoe: 2, level: 3 },
      { name: "React Native", yoe: 1, level: 2 },
      { name: "Zustand", yoe: 2, level: 3 },
      { name: "Redux", yoe: 1, level: 2 },
      { name: "Vue.js", yoe: 3, level: 4 },
      { name: "VueX", yoe: 2, level: 3 },
      { name: "Nuxt.js", yoe: 1, level: 2 },
      { name: "Next.js", yoe: 1, level: 1 },
    ],
  },
  {
    name: "Back-end & Runtimes",
    skills: [
      { name: "Node.js", yoe: 5, level: 5 },
      { name: "Express.js", yoe: 4, level: 4 },
      { name: "Django", yoe: 1, level: 2 },
      { name: "Electron", yoe: 1, level: 2 },
      { name: "Capacitor", yoe: 0.5, level: 1 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", yoe: 4, level: 5 },
      { name: "PostgreSQL", yoe: 3, level: 4 },
      { name: "GraphQL", yoe: 2, level: 3 },
      { name: "Redis", yoe: 2, level: 3 },
      { name: "MariaDB", yoe: 1, level: 2 },
      { name: "DBMate", yoe: 1, level: 2 },
      { name: "PgPromise", yoe: 1, level: 2 },
    ],
  },
  {
    name: "Cloud, CI/CD, and Packaging",
    skills: [
      { name: "Google Cloud Platform (GCP)", yoe: 3, level: 4 },
      { name: "Amazon Web Services (AWS)", yoe: 2, level: 3 },
      { name: "Terraform", yoe: 2, level: 3 },
      { name: "Firebase", yoe: 1, level: 2 },
      { name: "Vercel", yoe: 1, level: 2 },
      { name: "Heroku", yoe: 1, level: 2 },
      { name: "Expo", yoe: 1, level: 2 },
      { name: "Docker", yoe: 2, level: 3 },
      { name: "GitHub Actions", yoe: 2, level: 3 },
      { name: "Cloudflare", yoe: 1, level: 2 },
      { name: "NGINX", yoe: 1, level: 2 },
      { name: "Webpack", yoe: 3, level: 3 },
      { name: "Babel", yoe: 3, level: 3 },
    ],
  },
  {
    name: "Testing",
    skills: [
      { name: "Puppeteer", yoe: 4, level: 5 },
      { name: "Jest", yoe: 2, level: 3 },
      { name: "Cucumber", yoe: 1, level: 2 },
      { name: "Lighthouse", yoe: 1, level: 2 },
    ],
  },
  {
    name: "Analytics & Feature Management",
    skills: [
      { name: "Google Analytics", yoe: 2, level: 3 },
      { name: "Google Tag Manager", yoe: 2, level: 3 },
      { name: "New Relic", yoe: 1, level: 2 },
      { name: "Datadog", yoe: 1, level: 2 },
      { name: "FeatureHub", yoe: 1, level: 2 },
    ],
  },
  {
    name: "Project Management & Version Control",
    skills: [
      { name: "GitHub", yoe: 4, level: 4 },
      { name: "GitLab", yoe: 1, level: 2 },
      { name: "GitHub Projects", yoe: 2, level: 3 },
      { name: "Jira", yoe: 4, level: 4 },
    ],
  },
  {
    name: "Libraries & APIs",
    skills: [
      { name: "Google APIs", yoe: 4, level: 4 },
      { name: "OpenAI GPT", yoe: 2, level: 3 },
      { name: "OpenAI Whisper", yoe: 1, level: 3 },
      { name: "Auth0", yoe: 2, level: 3 },
      { name: "Slack", yoe: 2, level: 4 },
      { name: "Stripe", yoe: 2, level: 3 },
      { name: "Reddit", yoe: 1, level: 2 },
      { name: "TikTok", yoe: 1, level: 2 },
      { name: "Adobe", yoe: 1, level: 2 },
      { name: "BrightData", yoe: 1, level: 3 },
      { name: "FollowUpBoss", yoe: 1, level: 3 },
      { name: "WebRTC", yoe: 1, level: 3 },
      { name: "Web Audio", yoe: 1, level: 2 },
      { name: "WebSocket", yoe: 2, level: 3 },
      { name: "WS", yoe: 2, level: 3 },
      { name: "Socket.io", yoe: 1, level: 2 },
    ],
  },
  {
    name: "Libraries & APIs (Design & Visualization)",
    skills: [
      { name: "Tailwind", yoe: 3, level: 4 },
      { name: "Bootstrap", yoe: 2, level: 3 },
      { name: "Material UI", yoe: 1, level: 2 },
      { name: "WebGL", yoe: 1, level: 2 },
      { name: "Three.js", yoe: 1, level: 3 },
      { name: "D3.js", yoe: 1, level: 2 },
    ],
  },
  {
    name: "Libraries & APIs (Geospatial)",
    skills: [
      { name: "Google Maps", yoe: 3, level: 4 },
      { name: "Google Places", yoe: 2, level: 4 },
      { name: "Google Address Validation", yoe: 2, level: 4 },
      { name: "Mapbox", yoe: 1, level: 2 },
      { name: "ArcGIS", yoe: 1, level: 2 },
      { name: "Turf", yoe: 1, level: 2 },
      { name: "Foursquare", yoe: 1, level: 3 },
      { name: "Leaflet", yoe: 1, level: 2 },
    ],
  },
  {
    name: "Workflow",
    skills: [
      { name: "VS Code", yoe: 5, level: 5 },
      { name: "GitHub Copilot", yoe: 1, level: 2 },
      { name: "ChatGPT", yoe: 2, level: 3 },
      { name: "Xcode", yoe: 2, level: 3 },
      { name: "Figma", yoe: 2, level: 3 },
    ],
  },
];

const Skills = () => {
  const [skillQuery, setSkillQuery] = useState("");
  const [foundSkills, setFoundSkills] = useState([]);
  const [globalExpanded, setGlobalExpanded] = useState(null);

  useEffect(() => {
    const query = skillQuery.toLowerCase();
    const results = skillSections.flatMap((section) =>
      section.skills.filter((skill) => skill.name.toLowerCase().includes(query))
    );
    setFoundSkills(results);
  }, [skillQuery]);

  return (
    <div className="w-full max-w-2xl min-h-[36rem]">
      {/* Expand and Collapse */}
      <div className="flex justify-center items-center text-sm text-zinc-500">
        <button
          className="px-2 hover:text-zinc-200"
          onClick={() => setGlobalExpanded(true)}
        >
          Expand
        </button>
        <p className="cursor-pointer text-sm">|</p>
        <button
          className="px-2 hover:text-zinc-200"
          onClick={() => setGlobalExpanded(false)}
        >
          Collapse
        </button>
      </div>
      {/* Skill Search */}
      <SkillSearch skillQuery={skillQuery} setSkillQuery={setSkillQuery} />
      {/* Skill Sections and Search Results */}
      {skillQuery.length ? (
        <SkillSearchResults skills={foundSkills} />
      ) : (
        skillSections.map((section) => (
          <SkillSection
            key={section.name}
            title={section.name}
            skills={section.skills}
            globalExpanded={globalExpanded}
            setGlobalExpanded={setGlobalExpanded}
          />
        ))
      )}
    </div>
  );
};

export default Skills;
