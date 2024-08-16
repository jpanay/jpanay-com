import ResourceItem from "./ResourceItem";

const ResourceSection = ({ resourceSection }) => {
  return (
    <div>
      {/* Title and Description */}
      <div className="pb-2 mb-4 border-b border-zinc-600">
        <h2 className="text-xl font-medium text-zinc-600">
          {resourceSection.title}
        </h2>
        <p>{resourceSection.description}</p>
      </div>
      {/* Resource Items */}
      <div className="flex flex-wrap justify-center">
        {resourceSection.items.map((item, index) => (
          <div key={index} className="w-64 px-2">
            <ResourceItem key={item.name} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceSection;
