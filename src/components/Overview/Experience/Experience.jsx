import ExperienceItem from "./ExperienceItem";
const experiences = [
  {
    company: "The News Movement",
    logo: "tnm.svg",
    position: "Full Stack Software Engineer",
    category: "News & Media Technology",
    link: "https://www.thenewsmovement.com/",
    startDate: "2023",
    endDate: "2024",
    technologies: [
      "JavaScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Amazon Web Services",
      "Google Cloud Platform",
      "Terraform",
      "Docker",
      "New Relic",
      "OpenAI GPT API",
      "OpenAI Whisper API",
      "Slack API",
      "Reddit API",
    ],
  },
  {
    company: "Hideaway",
    logo: "hideaway.png",
    position: "Mobile Developer (Freelance)",
    category: "Restaurant Mobile App",
    link: "https://apps.apple.com/us/app/hideaway-happy-hours-near-me/id6444686101",
    startDate: "2023",
    endDate: "2024",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "GraphQL",
      "Google Cloud Platform",
      "Firebase",
      "Heroku",
      "Docker",
      "Google Maps API",
      "Google Places API",
      "Foursquare API",
      "Mapbox API",
    ],
  },
  {
    company: "Landis",
    logo: "landis.svg",
    position: "Full Stack Software Engineer",
    category: "Real Estate Technology",
    link: "https://www.landis.com/",
    startDate: "2022",
    endDate: "2023",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "GraphQL",
      "Amazon Web Services",
      "DataDog",
      "FeatureHub",
      "Stripe API",
      "ArcGIS API",
    ],
  },
  {
    company: "Satellite.im",
    logo: "satellite.webp",
    position: "Junior Software Engineer",
    category: "Communications Platform",
    link: "https://satellite.im/",
    startDate: "2021",
    endDate: "2022",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "Node.js",
      "Express",
      "WebRTC",
    ],
  },
];

const Experience = () => {
  return (
    <div className="max-w-2xl">
      {experiences.map((experience) => (
        <ExperienceItem key={experience.company} experience={experience} />
      ))}
    </div>
  );
};

export default Experience;
