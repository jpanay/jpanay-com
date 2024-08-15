import ExperienceItem from "./ExperienceItem";
const experiences = [
  {
    company: "The News Movement",
    sector: "Media",
    logo: "tnm.svg",
    link: "https://www.thenewsmovement.com/",
    title: "Full Stack Software Engineer",
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
    sector: "Restaurant",
    logo: "hideaway.png",
    link: "https://apps.apple.com/us/app/hideaway-happy-hours-near-me/id6444686101",
    title: "Mobile Developer (Contract)",
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
    sector: "Real Estate",
    logo: "landis.svg",
    link: "https://www.landis.com/",
    title: "Full Stack Software Engineer",
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
    sector: "Communications",
    logo: "satellite.webp",
    link: "https://satellite.im/",
    title: "Junior Software Engineer",
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
