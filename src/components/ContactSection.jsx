import icons from "../data/icons";

function ContactSection() {

  const messageAlert = () => {
    Swal.fire({
      title: "Message Alert!",
      text: "It's just the design, nothing happens when you fill your information.",
      icon: "info",
      showConfirmButton: true,
    });
  };

  return (
    <div className="py-14">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-16">
        <h1 className="text-3xl md:text-4xl font-bold">
          Get In <span className="text-blue-800">Touch</span>
        </h1>
        <p>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl lg:mx-auto mt-12 mx-12">
        <div className="space-y-6 text-center">
          <h1 className="text-2xl font-semibold">Contact Information</h1>

          <div className="flex text-center gap-x-4">
            <div className="p-3 bg-blue-200 rounded-full">
              <div className="w-8 h-8 text-blue-800">{icons.mail}</div>
            </div>
            <div className="text-start">
              <h1 className="font-semibold">Email</h1>
              <p>lylytheav@gmail.com</p>
            </div>
          </div>

          <div className="flex text-center gap-x-4">
            <div className="p-3 bg-blue-200 rounded-full">
              <div className="w-8 h-8 text-blue-800">{icons.phone}</div>
            </div>
            <div className="text-start">
              <h1 className="font-semibold">Phone</h1>
              <p>+855 96 96 86 971</p>
            </div>
          </div>

          <div className="flex text-center gap-x-4">
            <div className="p-3 bg-blue-200 rounded-full">
              <div className="w-8 h-8 text-blue-800">{icons.location}</div>
            </div>
            <div className="text-start">
              <h1 className="font-semibold">Location</h1>
              <p>Stueng Mean Chey, Phnom Penh</p>
            </div>
          </div>

          <div className="py-8 text-center">
            <h1>Connect With Me</h1>

            <div className="flex gap-x-4 justify-center mt-4">
              <span className="w-8 h-8 text-blue-800 hover:text-blue-500 duration-300">{icons.linkedin}</span>
              <span className="w-8 h-8 text-blue-800 hover:text-blue-500 duration-300">{icons.telegram}</span>
              <span className="w-8 h-8 text-blue-800 hover:text-blue-500 duration-300">{icons.facebook}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md text-center p-6">
          <h1 className="text-2xl font-semibold">Send a Message</h1>

          <div className="grid grid-cols-1 text-start text-blue-800 mb-4">
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              placeholder="write your name..."
              className="border-2 border-blue-800 py-2 px-4 rounded-md mt-2 placeholder:text-blue-800 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 text-start text-blue-800 mb-4">
            <label htmlFor="">Your Email</label>
            <input
              type="text"
              placeholder="write your email"
              className="border-2 border-blue-800 py-2 px-4 rounded-md mt-2 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 text-start text-blue-800 mb-4">
            <label htmlFor="">Your Message</label>
            <textarea
              type="text"
              placeholder="write your message"
              className="border-2 border-blue-800 py-2 px-4 rounded-md mt-2 focus:outline-none resize-none"
            />
          </div>

          <button
            onClick={messageAlert}
            className="group bg-blue-800 text-white px-6 py-3 rounded-full flex items-center justify-center w-full gap-x-2 mt-6"
          >
            Send Message
            <span className="w-6 h-6 group-hover:translate-x-2 duration-300">{icons.send}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
