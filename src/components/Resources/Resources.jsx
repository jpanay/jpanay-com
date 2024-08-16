import ResourceSection from "./ResourceSection";

const jobSearchTools = {
  title: "Job Search Tools",
  description: "",
  items: [
    {
      name: "Huntr",
      subheader: "Job Application Tracker",
      description: "",
      image: "/job-search-tools/huntr.png",
      link: "https://huntr.co/",
      favorite: true,
    },
    {
      name: "ResyMatch",
      subheader: "Resume Optimization",
      image: "/job-search-tools/resymatch.png",
      link: "https://resymatch.io/",
    },
    {
      name: "Jobscan",
      subheader: "Resume Optimization",
      image: "/job-search-tools/jobscan.svg",
      link: "https://www.jobscan.co/",
    },
    {
      name: "ChatGPT",
      subheader: "AI Chatbot",
      description: "Pro tip: use GPT to run interview simulations",
      image: "/job-search-tools/chatgpt.svg",
      link: "https://chatgpt.com/",
    },
    {
      name: "Grammarly",
      subheader: "AI Writing Assistant",
      image: "/job-search-tools/grammarly.png",
      link: "https://app.grammarly.com/",
      favorite: true,
    },
  ],
};

const interviewPrep = {
  title: "Interview Prep",
  description: "",
  items: [
    {
      name: "InterviewGuide",
      subheader: "Interview Guide",
      image: "/interview-prep/interviewguide.webp",
      link: "https://interviewguide.dev/",
      favorite: true,
    },
    {
      name: "AlgoExpert",
      subheader: "Full Stack Interview Prep",
      image: "/interview-prep/algoexpert.svg",
      link: "https://www.algoexpert.io/",
      favorite: true,
    },
    {
      name: "LeetCode",
      subheader: "Algorithms Practice",
      image: "/interview-prep/leetcode.png",
      link: "https://leetcode.com/problemset/",
    },
    {
      name: "NeetCode",
      subheader: "Algorithms Practice",
      image: "/interview-prep/neetcode.png",
      link: "https://neetcode.io/",
    },
    {
      name: "HackerRank",
      subheader: "Algorithms Practice",
      image: "/interview-prep/hackerrank.png",
      link: "https://www.hackerrank.com/dashboard",
    },
    {
      name: "JavaScript Prep",
      subheader: "Algorithms Course",
      image: "/interview-prep/udemy.svg",
      link: "https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/",
    },
    {
      name: "Python Prep",
      subheader: "Algorithms Course",
      image: "/interview-prep/udemy.svg",
      link: "https://www.udemy.com/course/data-structures-algorithms-python/?couponCode=LEARNNOWPLANS",
    },
    {
      name: "Formation Dev",
      subheader: "Mentorship Program",
      image: "/interview-prep/formation.svg",
      link: "https://formation.dev/",
    },
    {
      name: "Interview Kickstart",
      subheader: "Mentorship Program",
      image: "/interview-prep/interviewkickstart.png",
      link: "https://www.interviewkickstart.com/",
    },
    {
      name: "Pathrise",
      subheader: "Mentorship Program",
      image: "/interview-prep/pathrise.svg",
      link: "https://www.pathrise.com/",
    },
  ],
};

const jobBoards = {
  title: "Job Boards",
  description: "",
  tags: ["best", "remote", "start-ups"],
  items: [
    {
      name: "LinkedIn",
      image: "/job-boards/linkedin.png",
      link: "https://www.linkedin.com/",
      favorite: true,
    },
    {
      name: "Indeed",
      image: "/job-boards/indeed.webp",
      link: "https://www.indeed.com/",
      favorite: true,
    },
    {
      name: "Otta",
      image: "/job-boards/otta.svg",
      link: "https://www.otta.com/",
      favorite: true,
    },
    {
      name: "Dice",
      image: "/job-boards/dice.svg",
      link: "https://www.dice.com/",
    },
    {
      name: "Glassdoor",
      image: "/job-boards/glassdoor.svg",
      link: "https://www.glassdoor.com/Job/index.htm",
    },
    {
      name: "Monster",
      image: "/job-boards/monster.svg",
      link: "https://www.monster.com/",
    },
    {
      name: "Arc",
      image: "/job-boards/arc.svg",
      link: "https://arc.dev/",
    },
    {
      name: "Levels.fyi",
      image: "/job-boards/levelsfyi.svg",
      link: "https://www.levels.fyi/jobs?locationSlug=united-states",
    },
    {
      name: "CrunchBoard",
      image: "/job-boards/crunchboard.webp",
      link: "https://www.crunchboard.com/",
    },
    {
      name: "StackOverflow",
      image: "/job-boards/stackoverflow.webp",
      link: "https://stackoverflow.jobs/",
    },
    {
      name: "ZipRecruiter",
      image: "/job-boards/ziprecruiter.svg",
      link: "https://www.ziprecruiter.com/",
    },
    {
      name: "Jobot",
      image: "/job-boards/jobot.svg",
      link: "https://jobot.com/",
    },
    {
      name: "WeWorkRemotely",
      image: "/job-boards/wwr.svg",
      link: "https://weworkremotely.com/",
    },
    {
      name: "Remotive",
      image: "/job-boards/remotive.svg",
      link: "https://remotive.com/",
    },
    {
      name: "RemoteOk",
      image: "/job-boards/remoteok.webp",
      link: "https://remoteok.com/",
    },
    {
      name: "Wellfound",
      image: "/job-boards/wellfound.png",
      link: "https://wellfound.com/jobs",
    },
    {
      name: "YCombinator",
      image: "/job-boards/ycombinator.png",
      link: "https://www.ycombinator.com/jobs",
    },
    {
      name: "BuiltIn",
      image: "/job-boards/builtin.svg",
      link: "https://builtin.com/jobs/remote/hybrid/office",
    },
    {
      name: "Awesome Job Boards",
      image: "/job-boards/awesomejobboards.svg",
      link: "https://github.com/emredurukn/awesome-job-boards",
    },
  ],
};

const resourceSections = [jobSearchTools, interviewPrep, jobBoards];

const Resources = () => {
  return (
    <div className="flex flex-col items-center px-8 py-14">
      {/* Header */}
      <div className="flex flex-col items-center space-y-2 mb-16">
        {/* Header Text */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-medium">Resources</h1>
          <p className="text-lg">
            A place for my favorite software development job searching resources
          </p>
        </div>
        {/* Header Building In Progress GIFs and Text */}
        <p className="text-zinc-400 text-sm pb-2">Building in progress...</p>
        <div className="custom-drop-shadow">
          <div className="flex justify-center rounded-full overflow-hidden">
            <img
              src="/resources/loading/loading1.gif"
              alt="Work In Progress"
              className="object-contain h-24"
            />
            <img
              src="/resources/loading/loading2.gif"
              alt="Work In Progress"
              className="object-contain h-24"
            />
          </div>
        </div>
      </div>
      {/* Resource Sections */}
      <div className="max-w-3xl space-y-4">
        {resourceSections.map((section) => (
          <ResourceSection key={section.title} resourceSection={section} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
