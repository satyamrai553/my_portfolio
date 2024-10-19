import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-10 px-5 md:px-20 bg-background-color text-white text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center w-[1024px]">
        
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <div className="rounded-full p-1 bg-gradient-to-r from-cyan-500 to-blue-500">
            <img 
              src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1729368396/My_portfolio/mq6l764kmepfnt6o0ndg.png" 
              alt="Satyam's Profile" 
              className="rounded-full w-48 h-48 object-cover shadow-lg"
            />
          </div>
        </div>

        {/* About Content Section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 text-lg mb-4">
            Hi, I’m <strong>Satyam</strong>, a passionate Full Stack Developer specializing in building efficient 
            and scalable web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). 
          </p>
          <p className="text-gray-600 text-lg mb-4">
            I’ve worked on projects like developing dynamic NGO websites and building financial platforms like Paytm Basic. 
            I love exploring new technologies and delivering user-centric solutions.
          </p>
          <p className="text-gray-600 text-lg">
            Let’s collaborate and build something innovative!
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
        <ul className="text-gray-600 text-lg list-disc list-inside">
          <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
          <li>RESTful API Development</li>
          <li>Responsive Web Design with Tailwind CSS</li>
          <li>JavaScript (ES6+), HTML5, CSS3</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Database Management (SQL & NoSQL)</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
        <div className="mb-4">
          <h4 className="text-xl font-bold text-gray-800">Full Stack Developer - NGO Website</h4>
          <p className="text-gray-600">Nov 2021 - Jul 2025</p>
          <p className="text-gray-600">
            Developed a dynamic website for an NGO using the MERN stack, with an admin panel, event management, and user registration features.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-bold text-gray-800">Full Stack Developer - Paytm Basic</h4>
          <p className="text-gray-600">Apr 2022 - Aug 2023</p>
          <p className="text-gray-600">
            Designed and developed a basic version of Paytm showcasing core functionalities, including user data handling and transaction processing.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
        <div className="mb-4">
          <h4 className="text-xl font-bold text-gray-800">B.Tech in Information Technology</h4>
          <p className="text-gray-600">[Your University Name] - [Year of Graduation]</p>
          <p className="text-gray-600">
            Graduated with a strong foundation in software development, algorithms, and data structures, with a focus on full-stack web development.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h3>
        <p className="text-gray-600 text-lg">
          Feel free to reach out to me via email or connect with me on LinkedIn. I’m always open to discussing new projects or opportunities.
        </p>
        <p className="text-gray-600 text-lg">
          <strong>Email:</strong> satyam@example.com
        </p>
        <p className="text-gray-600 text-lg">
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/satyam" className="text-blue-500 hover:underline">linkedin.com/in/satyam</a>
        </p>
      </div>
    </section>
  );
};

export default About;
