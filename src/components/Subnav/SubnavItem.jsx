const SubnavItem = ({ title, active, color, targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -72;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <p
      onClick={handleClick}
      className={`cursor-pointer duration-100 ${
        active
          ? `text-zinc-50 underline decoration-${color}`
          : `text-zinc-600 hover:text-zinc-200`
      }`}
    >
      {title}
    </p>
  );
};

export default SubnavItem;
