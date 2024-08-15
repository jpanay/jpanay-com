const SectionTitle = ({ title, customStyle }) => {
  return (
    <h2
      className={`text-2xl text-center font-medium mb-4 underline ${customStyle}`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
