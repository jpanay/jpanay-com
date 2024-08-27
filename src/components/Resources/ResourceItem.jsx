import { faTrophy, faMedal, faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResourceItem = ({ item }) => {
  const openLink = () => {
    window.open(item.link, "_blank");
  };

  const rankMapping = {
    gold: { icon: faTrophy, class: "text-amber-300 resource-drop-shadow-gold" },
    silver: {
      icon: faMedal,
      class: "text-slate-300 resource-drop-shadow-silver",
    },
    bronze: {
      icon: faAward,
      class: "text-amber-900",
    },
  };
  const rank = rankMapping[item.rank];

  return (
    <div
      className="flex space-x-2 rounded p-2 mb-4 cursor-pointer border border-transparent hover:border-zinc-700 hover:bg-zinc-800 hover:shadow-md duration-200"
      onClick={openLink}
    >
      {/* Image */}
      <div className="min-w-16 w-16 h-16 flex items-center justify-center overflow-hidden p-2 bg-zinc-300 rounded-full">
        <img
          src={`/resources/${item.image}`}
          alt={item.name}
          className="object-contain"
        />
      </div>
      {/* Contents */}
      <div className="flex-1 relative">
        {rank && (
          <FontAwesomeIcon
            icon={rank.icon}
            className={`absolute right-1 top-0.5 text-sm ${rank.class}`}
          />
        )}
        <h3 className="font-medium whitespace-nowrap truncate max-w-36">
          {item.name}
        </h3>
        <p className="text-xs font-medium pb-0.5">{item.subheader}</p>
        <p className="text-xs text-zinc-500">{item.description}</p>
      </div>
    </div>
  );
};

export default ResourceItem;
