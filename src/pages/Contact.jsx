import React, { useState } from "react";
import icons from "../data/icons";
import contactMethods from "../data/contacts";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <div className="lg:h-screen text-gray-800 overflow-hidden py-9">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
          Get In Touch
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Reach out via form or your preferred platform
        </p>
      </header>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-6 flex">
        <button
          onClick={() => setActiveTab("form")}
          className={`px-6 py-3 font-medium border-b-2 transition ${
            activeTab === "form"
              ? "border-blue-700 text-blue-700"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Contact Form
        </button>
        <button
          onClick={() => setActiveTab("platforms")}
          className={`px-6 py-3 font-medium border-b-2 transition ${
            activeTab === "platforms"
              ? "border-purple-700 text-purple-700"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          Platforms
        </button>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        <div className="backdrop-blur-sm bg-white border border-gray-200 rounded-b-lg shadow-sm">
          {activeTab === "form" ? (
            <ContactForm/>
          ) : (
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <div className="h-8 w-8 text-purple-700">{icons.wifi}</div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-purple-700">
                    Connect Anywhere
                  </h2>
                  <p className="text-gray-500 text-[16px]">
                    Reach me on these platforms
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="text-gray-700 group-hover:text-purple-700 transition-colors w-8 h-8">
                      {method.icon}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-purple-900">
                        {method.name}
                      </div>
                      <div className="text-gray-500 text-[14px]">
                        {method.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
