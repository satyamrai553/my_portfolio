import React, { useState } from 'react';

const Contact = () => {
  // Define state to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Construct the mailto link
    const mailtoLink = `mailto:satyam@example.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    
    // Open the mailto link in a new window
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-[#1d3557] py-10 px-5 md:px-20">
      <div className="container mx-auto">
        {/* Contact Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300">
            Feel free to reach out via the contact form below, and your default email app will open for sending the message.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Form Section */}
          <div className="w-full md:w-2/3 mb-10 md:mb-0">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-cyan-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 text-center md:text-left m-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-4">
              <strong>Email:</strong> satyamrai553@gmail.com
            </p>
            <p className="text-gray-300 mb-4">
              <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/satyam" className="text-blue-400 hover:underline">https://www.linkedin.com/in/satyam-rai-b15472118/</a>
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Location:</strong> Alpha 2, Greater Noida, Uttar Pradesh, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
