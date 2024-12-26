import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Brian = () => {
  const [page, setPage] = useState("about");
  const containerRef = useRef(null); // Reference to the scrolling container

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0); // Scroll the container to the top
    }
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div
      ref={containerRef}
      className="top-0 fixed w-screen h-screen bg-zinc-50 z-[100] overflow-y-scroll text-zinc-900"
    >
      <Nav page={page} setPage={setPage} />
      <div className="py-16">
        {page === "about" ? (
          <About setPage={setPage} />
        ) : page === "services" ? (
          <Services setPage={setPage} />
        ) : page === "contact" ? (
          <Contact />
        ) : (
          <p className="flex justify-center text-3xl font-medium">
            404 Page Not Found
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Brian;
