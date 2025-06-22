import React from 'react';
import { ExternalLink, Github, Terminal, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ATM Interface",
      description: "Console-based banking system using Core Java with comprehensive banking functionality.",
      features: [
        "User login and authentication",
        "Deposit and withdrawal operations",
        "Money transfer between accounts",
        "Transaction history tracking"
      ],
      technologies: ["Java", "Core Java", "OOP"],
      icon: <Terminal className="h-8 w-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "EasyHope – Crowdfunding Platform",
      description: "Full-stack web application for crowdfunding with admin panel and RESTful API architecture.",
      features: [
        "Admin panel for project management",
        "Transaction management system",
        "RESTful API for project operations",
        "Secure funding mechanism"
      ],
      technologies: ["Spring Boot", "Hibernate", "MySQL", "REST API"],
      icon: <Globe className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-semibold ml-3">{project.title}</h3>
                </div>
                <p className="text-blue-100">{project.description}</p>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;