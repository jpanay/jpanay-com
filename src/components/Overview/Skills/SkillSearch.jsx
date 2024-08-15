import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const SkillSearch = ({ skillQuery, setSkillQuery }) => {
  const clearSearch = () => setSkillQuery("");

  return (
    <div>
      {/* Search Input */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-600">
        <div className="w-full flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faSearch}
            className={`text-xs ${skillQuery.length ? "" : "text-zinc-400"}`}
          />
          <input
            type="text"
            className="w-full placeholder-zinc-400 bg-zinc-900 focus:outline-none"
            placeholder="Search"
            value={skillQuery}
            onChange={(e) => setSkillQuery(e.target.value)}
          />
        </div>
        {skillQuery.length ? (
          <button className="flex items-center" onClick={clearSearch}>
            <FontAwesomeIcon
              icon={faDeleteLeft}
              className="hover:text-red-300"
            />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SkillSearch;
