const ExperienceItem = ({ experience }) => {
  const openLink = () => {
    window.open(experience.link, "_blank");
  };

  return (
    <div
      className="flex items-start space-x-4 py-4 px-8 border border-transparent rounded hover:border-zinc-700 hover:bg-zinc-800 hover:shadow-md cursor-pointer duration-300"
      onClick={openLink}
    >
      {/* Dates and Logo */}
      <div className="pt-1.5">
        <p className="text-sm text-zinc-400 whitespace-nowrap">
          {experience.startDate} — {experience.endDate}
        </p>
      </div>
      {/* Company Name, Logo, Sector, Position, and Technologies */}
      <div>
        {/* Company Name and Logo */}
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-medium">{experience.company}</h3>
          <div className="flex justify-center rounded">
            <img
              src={`/experiences/${experience.logo}`}
              alt={`${experience.company} logo`}
              className="object-fit max-h-4"
            />
          </div>
        </div>
        {/* Position */}
        <p className="text-sm font-medium text-zinc-400">{experience.title}</p>
        {/* Sector */}
        <p className="text-xs text-zinc-400">{experience.sector} Technology</p>
        {/* Technologies */}
        <ul className="flex flex-wrap mt-2">
          {experience.technologies.map((technology) => (
            <li
              key={technology}
              className="text-xs py-1 px-2 mr-2 mb-2 rounded-xl whitespace-nowrap border border-zinc-400 text-zinc-400"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
