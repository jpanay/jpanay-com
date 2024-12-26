import { faCheckCircle, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceItem = ({ text }) => {
  return (
    <div className="flex items-center space-x-2 px-4">
      <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500" />
      <p className="whitespace-nowrap">{text}</p>
    </div>
  );
};

const Services = ({ setPage }) => {
  const textStyling = "max-w-lg";
  const ctaStyling =
    "duration-200 hover:shadow font-medium border rounded w-full py-2 border border-emerald-500 text-emerald-500 hover:text-zinc-50 hover:bg-emerald-500";
  const serviceStyle =
    "flex flex-col justify-between border rounded-xl shadow py-4 space-y-2 sm:mb-4 mb-8 mx-2";
  const subheaderText = "text-3xl font-medium";

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Header */}
      <div className="h-48 overflow-hidden relative">
        <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center text-zinc-50 bg-[rgba(0,0,0,0.5)] space-y-2">
          <h1 className="text-5xl font-semibold text-center">Our Services</h1>
          <h2 className="max-w-96 text-center font-medium">
            Ensure Standards of Excellence Across Your Facilities and Avoid
            Costly Pitfalls
          </h2>
        </div>
        <img
          src="/brian/checklist.jpg"
          className="w-screen object-cover blur-[4px]"
        />
      </div>
      {/* Description */}
      <div className="flex sm:flex-row flex-col items-center sm:space-x-8 space-y-8 sm:space-y-0 px-8">
        {/* Image */}
        <div>
          <img
            src="/brian/checklist.jpg"
            className="w-72 h-48 object-cover rounded-t-lg shadow-md"
          />
          <img
            src="/brian/window-rating.jpg"
            className="w-72 h-48 object-cover rounded-b-lg shadow-md"
          />
        </div>
        {/* Text */}
        <div className="space-y-2">
          <p className={textStyling}>
            Can your business withstand the financial and reputational damage of
            a health department violation? A "B" rating can cost you an average
            of $1,600 in fines, while a "C" carries a hefty $2,200 price tag.
            More alarmingly, a "B" rating can plummet your business revenue by
            up to 30%.
          </p>
          <p className={textStyling}>
            Every successful establishment starts with a commitment to health
            and safety. At Health Department Solutions, we guide bars and
            restaurants in New York City to achieve outstanding health
            inspection ratings. Your mission is to provide exceptional service,
            and our mission is to ensure you comply with all health regulations
            effortlessly.
          </p>
          <p className={textStyling}>
            Forget about being overwhelmed by the rules and regulations. Our
            expert team is here to empower you with the knowledge and support
            you need to transform compliance into a seamless part of your
            operation. With our tailored advice, your story of success becomes
            clearer and stronger.
          </p>
        </div>
      </div>
      {/* Service Options */}
      <h2 className={`${subheaderText} pt-4`}>Service Packages</h2>
      <div className="flex justify-center flex-wrap">
        {/* Basic */}
        <div className={serviceStyle}>
          <div className="space-y-2">
            <div className="flex justify-center">
              <img
                src="brian/a-grade-no-bg.png"
                className="h-24 drop-shadow-md"
              />
            </div>
            <div>
              <h2 className="text-center text-2xl font-medium">Basic</h2>
              <h3 className="text-center font-medium">
                One Time Compliance Service
              </h3>
            </div>
            <ServiceItem text="Comprehensive mock inspection" />
            <ServiceItem text="Detailed findings and violation report" />
            <ServiceItem text="Tailored correction plan" />
          </div>
          <div className="px-4 pt-2">
            <button className={ctaStyling} onClick={() => setPage("contact")}>
              Schedule
            </button>
          </div>
        </div>
        {/* Monthly */}
        <div className={serviceStyle}>
          <div className="space-y-2">
            <div className="flex justify-center">
              <img src="brian/calendar.png" className="h-24 drop-shadow-md" />
            </div>
            <div>
              <h2 className="text-center text-2xl font-medium">Monthly</h2>
              <h3 className="text-center font-medium">
                Recurring Compliance Service
              </h3>
            </div>
            <ServiceItem text="Comprehensive mock inspection" />
            <ServiceItem text="Detailed findings and violation report" />
            <ServiceItem text="Tailored correction plan" />
            <ServiceItem text="In-depth staff training" />
            <ServiceItem text="Ongoing education and support" />
            <ServiceItem text="Departmental compliance checklists" />
          </div>
          <div className="px-4 pt-2">
            <button className={ctaStyling} onClick={() => setPage("contact")}>
              Contact
            </button>
          </div>
        </div>
        {/* Enterprise */}
        <div className={serviceStyle}>
          <div className="space-y-2">
            <div className="flex justify-center">
              <img src="brian/enterprise.png" className="h-24 drop-shadow-md" />
            </div>
            <div>
              <h2 className="text-center text-2xl font-medium">Enterprise</h2>
              <h3 className="text-center font-medium">
                Multi-Location Service
              </h3>
            </div>
            <ServiceItem text="Comprehensive mock inspection" />
            <ServiceItem text="Detailed findings and violation report" />
            <ServiceItem text="Tailored correction plan" />
            <ServiceItem text="In-depth staff training" />
            <ServiceItem text="Ongoing education and support" />
            <ServiceItem text="Departmental compliance checklists" />
            <ServiceItem text="Dedicated priority support" />
            <ServiceItem text="HACCP plans" />
          </div>
          <div className="px-4 pt-2">
            <button className={ctaStyling} onClick={() => setPage("contact")}>
              Contact
            </button>
          </div>
        </div>
      </div>
      {/* Additional Services */}
      <div className="flex flex-col items-center text-center space-y-4 px-8">
        <img src="/brian/metrony.png" className="h-48" />
        <h2 className={subheaderText}>
          Need comprehensive consulting services?
        </h2>
        <div className="space-y-2 text-center max-w-xl">
          <p>
            Our sister company, Metro NY Solutions, offers bespoke full-service
            solutions tailored to your service business.
          </p>
          <p>Inquire now to discuss how we can help you thrive.</p>
        </div>
        <div className="w-full max-w-72">
          <button className={ctaStyling} onClick={() => setPage("contact")}>
            Inquire About Metro NY
          </button>
        </div>
      </div>
    </div>
  );
};

// Schedule your complimentary consultation today to elevate your establishment's health standards.

// Need comprehensive consulting services? Our sister company, Metro NY Solutions, offers full-service solutions tailored to your business. Let’s discuss how we can help you thrive.

export default Services;
