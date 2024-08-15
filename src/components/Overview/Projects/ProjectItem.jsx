const ProjectItem = ({ project }) => {
  const openLink = () => {
    window.open(project.link, "_blank");
  };

  return (
    <div
      className="flex justify-between space-x-4 py-4 px-8 border border-transparent rounded hover:border-zinc-700 hover:bg-zinc-800 hover:shadow-md cursor-pointer duration-300"
      onClick={openLink}
    >
      {/* Media */}
      <div className="max-w-72 rounded-lg overflow-hidden border border-zinc-800">
        {project.image && (
          <img src={`/projects/${project.image}`} alt={project.title} />
        )}
        {project.video && (
          <video
            src={`/projects/${project.video}`}
            alt={project.title}
            type="video/quicktime"
            autoPlay
            muted
            loop
          />
        )}
      </div>
      {/* Title, Subheader, and Description */}
      <div className="flex-1">
        <h3 className="text-lg font-medium whitespace-nowrap">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 font-medium mb-1">
          {project.subheader}
        </p>
        <p className="text-sm text-zinc-400 ">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
