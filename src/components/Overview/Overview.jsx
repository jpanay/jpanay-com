import Bio from "./Bio";
import Header from "./Header";
import Skills from "./Skills/Skills";

const Overview = () => {
  return (
    <div className="flex flex-col items-center space-y-8 py-4 px-8">
      <Header />
      <Bio />

      <Skills />
    </div>
  );
};

export default Overview;
