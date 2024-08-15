import { useState, useEffect } from "react";

const InteractiveLogo = () => {
  const [textItems, setTextItems] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const keySounds = [
    new Audio("/audio/key1.mp3"), // j
    new Audio("/audio/key4.mp3"), // .
    new Audio("/audio/key2.mp3"), // p
    new Audio("/audio/key1.mp3"), // a
    new Audio("/audio/key2.mp3"), // n
    new Audio("/audio/key1.mp3"), // a
    new Audio("/audio/key2.mp3"), // y
    new Audio("/audio/key4.mp3"), // (
    new Audio("/audio/key4.mp3"), // )
  ];

  // Determine text items based on screen width
  useEffect(() => {
    const determineTextItems = () => {
      const hasSmallScreenWidth = window.innerWidth < 640;
      return hasSmallScreenWidth
        ? [
            { char: "j", className: "text-jpGreen" },
            { char: "p", className: "text-jpYellow" },
            { char: "(", className: "text-jpBlue" },
            { char: ")", className: "text-jpBlue" },
          ]
        : [
            { char: "j", className: "text-jpGreen" },
            { char: ".", className: "text-jpBlue" },
            { char: "p", className: "text-jpYellow" },
            { char: "a", className: "text-jpYellow" },
            { char: "n", className: "text-jpYellow" },
            { char: "a", className: "text-jpYellow" },
            { char: "y", className: "text-jpYellow" },
            { char: "(", className: "text-jpBlue" },
            { char: ")", className: "text-jpBlue" },
          ];
    };

    // Handle window resize
    const handleResize = () => {
      const newTextItems = determineTextItems();
      setTextItems((prevTextItems) => {
        if (newTextItems.length !== prevTextItems.length) {
          if (prevTextItems.length) {
            setDisplayedCount(newTextItems.length);
          }
          return newTextItems;
        }
        return prevTextItems;
      });
    };

    // Initial check to set the text array
    handleResize();
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle text items change
  useEffect(() => {
    // ---
  }, [textItems]);

  // Animate text items
  useEffect(() => {
    const animateText = (index = 0) => {
      if (index < textItems.length) {
        if (hasInteracted) keySounds[index].play();
        setTimeout(() => {
          setDisplayedCount((prev) => prev + 1);
          animateText(index + 1);
        }, 200);
      }
    };
    if (displayedCount === 0) {
      animateText();
    }
  }, [textItems, displayedCount, hasInteracted]);

  const handleClick = () => {
    setHasInteracted(true);
    setDisplayedCount(0);
  };

  return (
    <div onClick={handleClick}>
      {textItems.slice(0, displayedCount).map((item, index) => (
        <span key={index} className={item.className}>
          {item.char}
        </span>
      ))}
      {displayedCount !== textItems.length && (
        <span className="text-zinc-400">|</span>
      )}
    </div>
  );
};

export default InteractiveLogo;
