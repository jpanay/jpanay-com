import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    reason: "Free Consultation",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [toast, setToast] = useState(null);

  const options = [
    "Free Consultation",
    "Basic Service",
    "Monthly Service",
    "Enterprise Service",
    "Metro NY Solutions",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSend = () => {
    console.log("Form Data Submitted:", formData);
    setToast(true);
    setTimeout(() => {
      setToast(null);
    }, 2000);

    // Reset all form fields
    setFormData({
      reason: "Free Consultation",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center py-16 space-y-4 px-4">
      {/* Toast */}
      <div
        className={`z-50 fixed shadow-lg py-2 px-4 top-20 bg-emerald-500 text-zinc-50 font-medium rounded duration-200 ${
          toast ? "opacity-100" : "opacity-0"
        }`}
      >
        Your Message Has Been Sent!
      </div>
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img src="/brian/healthdeptsmall.png" className="h-16" />
        <h2 className="text-3xl font-medium max-w-64">
          Elevate your health standards.
        </h2>
      </div>
      <div className="max-w-lg text-center text-sm">
        <p>
          We encourage you to reach out for any inquiries related to health
          inspection consultations or assistance in improving your
          establishment's standards.
        </p>
        <p>
          Our dedicated team is here to help you navigate the process
          efficiently.
        </p>
      </div>
      <div className="max-w-96 space-y-1">
        {/* Reason */}
        <div>
          <p className="font-medium text-sm pb-1">Reason</p>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            className="text-sm cursor-pointer p-2 rounded focus:outline-none focus:border-zinc-300 border rounded-sm w-full"
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {/* First Name, Last Name */}
        <div>
          <p className="font-medium text-sm pb-1">Contact Information</p>
          <div className="flex space-x-1">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="flex-grow text-sm p-2 focus:outline-none focus:border-zinc-300 border rounded-sm"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="flex-grow text-sm p-2 focus:outline-none focus:border-zinc-300 border rounded-sm"
            />
          </div>
        </div>
        {/* Email, Phone */}
        <div className="mt-1">
          <div className="flex space-x-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="flex-grow text-sm p-2 focus:outline-none focus:border-zinc-300 border rounded-sm"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="flex-grow text-sm p-2 focus:outline-none focus:border-zinc-300 border rounded-sm"
            />
          </div>
        </div>
        {/* Message */}
        <div>
          <p className="font-medium text-sm pb-1">Message</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="text-sm p-2 w-full border rounded-sm focus:outline-none focus:border-zinc-300"
          />
        </div>
        {/* Submit */}
        <button
          onClick={handleSend}
          className="py-2 w-full font-medium border rounded-sm bg-zinc-50 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-zinc-50 duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
