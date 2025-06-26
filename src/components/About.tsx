import React from 'react';
import { User, Target, Clock, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Quick Learner",
      description: "Rapidly adapts to new technologies and frameworks"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Player",
      description: "Collaborates effectively in cross-functional teams"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Management",
      description: "Delivers projects on time with attention to detail"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8">
              <Target className="h-12 w-12 mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-4">Career Objective</h3>
              <p className="text-blue-100 leading-relaxed">
                To leverage my technical expertise and problem-solving skills to deliver
                innovative and efficient software solutions while contributing to the success
                of the organization.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Status</h3>
              <p className="text-gray-700 leading-relaxed">
                Successfully completed Master of Computer Application at D.Y. Patil Centre
                for Management and Research, Pune with <strong>CGPA: 7.91 (First Class with Distinction)</strong>.
                Passionate about full-stack development with expertise in Java, Spring Boot, and modern web technologies.
                Currently seeking exciting opportunities to kick-start my career in the software development industry.
              </p>
            </div>

          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Key Highlights</h3>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg text-blue-600">
                  {highlight.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;