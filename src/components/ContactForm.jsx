import React, { useState } from "react";
import icons from "../data/icons";

const messageAlert = () => {
  Swal.fire({
    title: "Message Alert!",
    text: "It's just the design, nothing happens when you fill your information.",
    icon: "info",
    showConfirmButton: true,
  });
};

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    messageAlert();
  };
  return (
    <div>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <div className="w-8 h-8 text-blue-800">{icons.mail}</div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-blue-800">
              Send a message
            </h2>
            <p className="text-gray-600 text-[16px]">
              I'll get back to you soon
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-blue-800 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-2 outline-none text-blue-700"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-800 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border-2 border-blue-500 rounded-lg px-4 py-2 outline-none text-blue-700"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full border-2 border-blue-500 rounded-lg px-4 py-2 outline-none text-blue-700"
              placeholder="How can I help?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full border-2 border-blue-500 rounded-lg px-4 py-2 outline-none resize-none text-blue-700"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              onClick={messageAlert}
              type="submit"
              className="px-6 py-2 bg-blue-800 text-white rounded-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
