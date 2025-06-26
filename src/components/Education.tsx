import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application",
      institution: "D.Y. Patil Centre for Management and Research, Pune",
      grade: "CGPA: 7.91",
      year: "2023-2025",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "M.S.G College, Malegaon",
      grade: "CGPA: 8.55",
      year: "2019–2022",
      icon: <Award className="h-6 w-6" />
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "M.S.G College, Malegaon",
      grade: "61.08%",
      year: "2018–2019",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "K.B.H Vidyalaya, Malegaon",
      grade: "78.20%",
      year: "2016–2017",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-blue-200"></div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}>
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white z-10`}>
                  {edu.icon}
                </div>
                
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-blue-600">{edu.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-gray-600 mb-3">
                      {edu.institution}
                    </p>
                    
                    {edu.grade && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {edu.grade}
                      </div>
                    )}
                    
                    {edu.grade && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {edu.grade}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;