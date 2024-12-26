const Nav = ({ page, setPage }) => {
  const styling = "duration-200 border-b";
  const selected = "border-zinc-900";
  const unselected = "border-transparent hover:border-zinc-900";

  return (
    <div className="fixed top-0 w-full py-2 px-4 flex justify-between items-center backdrop-blur-lg z-50 shadow bg-[rgba(255,255,255,0.2)]">
      <img
        src="/brian/healthdept.png"
        className="w-16 cursor-pointer z-50"
        onClick={() => setPage("about")}
      />
      <div className="sm:absolute flex justify-center space-x-4 inset-x-0">
        <button
          onClick={() => setPage("about")}
          className={`${styling} ${page === "about" ? selected : unselected}`}
        >
          About
        </button>
        <button
          onClick={() => setPage("services")}
          className={`${styling} ${
            page === "services" ? selected : unselected
          }`}
        >
          Services
        </button>
        <button
          onClick={() => setPage("contact")}
          className={`${styling} ${page === "contact" ? selected : unselected}`}
        >
          Contact
        </button>
      </div>
      <button
        className="sm:block hidden z-30 duration-200 rounded border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:shadow-md hover:text-zinc-50 px-4 py-1.5 font-medium"
        onClick={() => setPage("contact")}
      >
        Free Consultation
      </button>
    </div>
  );
};

export default Nav;
