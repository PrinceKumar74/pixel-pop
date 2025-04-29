import React, { useState } from "react";

const WorkMeetingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="bg-[#F1EFE7] py-10 px-4">
      <div className="mx-auto w-full max-w-4xl">
        <form
          onSubmit={handleSubmit}
          className="bg-[#F1EFE7] border border-[#9F175C] rounded-lg p-8 shadow-lg "
        >
          <h2 className="text-2xl font-bold mb-6 text-[#000000]">Work Meeting</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-[#000000] mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#9F175C]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-[#000000] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#9F175C]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-[#000000] mb-1">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter your contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#9F175C]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-[#000000] mb-1">
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Enter your contact"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-20 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#9F175C]"
              required
            />
          </div>


          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#000000] text-[#FFFFFF] py-2 px-6 rounded hover:bg-gray-800 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkMeetingForm;