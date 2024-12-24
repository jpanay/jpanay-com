import { useEffect, useRef, useState } from "react";
import cocktails from "./cocktails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Break = () => {
  const [search, setSearch] = useState("");
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  const sortCocktails = (input) => {
    return input.sort((a, b) => {
      const hasBreakA = a.tags?.includes("break") ? 0 : 1;
      const hasBreakB = b.tags?.includes("break") ? 0 : 1;

      if (hasBreakA !== hasBreakB) {
        return hasBreakA - hasBreakB; // Prioritize "break" tag
      }

      const hasPopularA = a.tags?.includes("popular") ? 0 : 1;
      const hasPopularB = b.tags?.includes("popular") ? 0 : 1;

      if (hasPopularA !== hasPopularB) {
        return hasPopularA - hasPopularB; // Prioritize "popular" tag
      }

      return a.name.localeCompare(b.name); // Alphabetical order
    });
  };

  useEffect(() => {
    const newCocktails = search.length
      ? cocktails.filter((cocktail) =>
          cocktail.name.toLowerCase().includes(search.toLowerCase())
        )
      : cocktails;

    const sortedCocktails = sortCocktails(newCocktails);
    setFilteredCocktails(sortedCocktails);
  }, [search]);

  return (
    <div className="pt-4">
      {/* Search */}
      <div className="z-50 fixed top-0 w-full flex items-center border-b border-zinc-700 bg-zinc-900 shadow-zinc-950 shadow-md">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search cocktails..."
          className="py-4 px-4 w-full bg-zinc-900 focus:outline-none"
        />
        {search.length ? (
          <FontAwesomeIcon
            icon={faX}
            className="absolute right-4 cursor-pointer"
            onClick={() => setSearch("")}
          />
        ) : null}
      </div>
      {/* Cocktails */}
      <Cocktails cocktails={filteredCocktails} />
    </div>
  );
};

const Cocktails = ({ cocktails }) => {
  const [expanded, setExpanded] = useState(null);
  const refs = useRef({});

  useEffect(() => {
    if (expanded) {
      setTimeout(() => {
        const element = refs.current[expanded];
        if (element) {
          const offset = 64; // Offset in pixels
          const topPosition =
            element.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: topPosition,
            behavior: "smooth",
          });
        }
      }, 200);
    } else {
      window.scrollTo({
        top: true,
        behavior: "smooth",
      });
    }
  }, [expanded]);

  return (
    <div>
      {/* Cocktails */}
      <div className="flex flex-wrap justify-center sm:px-32 px-2 pb-[700px]">
        {cocktails.map((cocktail) => (
          // Cocktail
          <div
            key={cocktail.name}
            className="self-start py-2 px-2 border rounded border-zinc-700 shadow-md shadow-zinc-950 sm:m-2 m-1 bg-zinc-900 sm:max-w-72 cursor-pointer"
            ref={(el) => (refs.current[cocktail.name] = el)} // Assign ref
            onClick={() =>
              expanded !== cocktail.name
                ? setExpanded(cocktail.name)
                : setExpanded(null)
            }
          >
            {/* Name */}
            <div className="flex items-center justify-center space-x-1 sm:text-md text-xs">
              {cocktail.tags?.includes("break") && (
                <img src="/break/bblogo.png" className="h-4" />
              )}
              {cocktail.tags?.includes("popular") && (
                <img src="/break/star.webp" className="h-4" />
              )}
              <h3 className="font-medium border-zinc-700 whitespace-nowrap">
                {cocktail.name}
              </h3>
            </div>
            {/* Body */}
            {expanded === cocktail.name && (
              <div className="text-xs flex flex-wrap justify-center pt-2">
                {/* Ingredients */}
                {cocktail.ingredients.map((ingredient, index) => (
                  <p
                    key={index}
                    className="border border-cyan-900 text-cyan-500 px-1 py-0.5 m-[1px]"
                  >
                    {ingredient.name}{" "}
                    <span className="text-cyan-700">
                      {ingredient.amount} {ingredient.metric}
                    </span>
                  </p>
                ))}
                {/* Garnish */}
                {cocktail.method.map((instruction, index) => (
                  <p
                    key={index}
                    className="border border-yellow-900 text-amber-400 px-1 py-0.5 m-[1px]"
                  >
                    {instruction}
                  </p>
                ))}
                {/* Garnish */}
                {cocktail.garnish.map((garnish, index) => (
                  <p
                    key={index}
                    className="border border-lime-900 text-lime-500 px-1 py-0.5 m-[1px]"
                  >
                    {garnish}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Break;
