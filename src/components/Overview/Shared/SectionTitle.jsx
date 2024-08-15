const SectionTitle = ({ title, color }) => {
  return (
    <h2
      className={`text-2xl text-center font-medium mb-4 underline decoration-${color}`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
