const About = ({ setPage }) => {
  const divStyling =
    "flex sm:flex-row flex-col sm:space-x-8 sm:space-y-0 space-y-4 px-8 items-center";
  const imgStyling1 = "w-52 rounded-xl";
  const imgStyling2 = "w-52 rounded-xl shadow";
  const textStyling = "max-w-lg";
  const buttonClass =
    "sm:mx-0 mx-2 px-4 py-2 border rounded text-lg text-emerald-500 border-emerald-500 w-52 font-medium hover:shadow duration-200 hover:text-zinc-50 hover:bg-emerald-500";

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Header */}
      <div className="h-48 overflow-hidden relative">
        <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center text-zinc-50 bg-[rgba(0,0,0,0.5)] space-y-2">
          <h1 className="text-5xl font-semibold text-center">Who We Are</h1>
          <h2 className="max-w-96 text-center font-medium">
            New York City's Premier Health Inspection Consultancy
          </h2>
        </div>
        <img src="/brian/inspector.avif" className="blur-[4px] w-screen" />
      </div>
      <div className={divStyling}>
        <img src="/brian/a-grade-no-bg.png" className={imgStyling1} />
        <p className={textStyling}>
          Health Dept. Solutions is a specialized consulting firm dedicated to
          helping New York City bars and restaurants achieve and maintain
          A-grade health inspections. We offer comprehensive services designed
          to ensure full compliance with the stringent regulations set forth by
          the NYC Department of Health and Mental Hygiene.
        </p>
      </div>
      <div className={`${divStyling} flex-col-reverse`}>
        <p className={`${textStyling} sm:pt-0 pt-4`}>
          Our expert team of food safety consultants provides in-depth
          inspections, tailored training programs, and ongoing support to
          identify and rectify potential health code violations. By implementing
          effective sanitation practices, optimizing food handling procedures,
          and enhancing staff knowledge, we empower our clients to create a safe
          and hygienic environment for their patrons.
        </p>
        <img src="/brian/inspector.png" className={imgStyling2} />
      </div>
      <div className={divStyling}>
        <img src="/brian/bartender.jpg" className={imgStyling2} />
        <p className={textStyling}>
          Your story is unlike any other, and we’re here to amplify it. By
          partnering with you, we help ensure that your establishment not only
          meets but exceeds health inspection standards. Remember, authenticity
          is key – when your passion is evident, it resonates through every
          corner of your business.
        </p>
      </div>
      {/* Learn More */}
      <div className="text-center sm:pt-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-medium">Want to learn more?</h2>
          <p className="max-w-lg">Explore our offerings or get in touch!</p>
        </div>
        <div className="sm:space-x-4 space-y-4">
          <button className={buttonClass} onClick={() => setPage("services")}>
            Explore Services
          </button>
          <button className={buttonClass} onClick={() => setPage("contact")}>
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
