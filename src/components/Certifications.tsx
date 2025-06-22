import React from 'react';
import { Award, CheckCircle, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Java Developer",
      issuer: "Adhyayan Training & Placement Institute, Pune",
      description: "Comprehensive training in Java full-stack development including Spring Boot, Hibernate, and web technologies.",
      skills: ["Java", "Spring Boot", "Hibernate", "Web Development"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "MongoDB Java Developer Path",
      issuer: "MongoDB University",
      description: "Specialized certification in MongoDB database management and Java integration.",
      skills: ["MongoDB", "Java", "Database Design", "NoSQL"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-orange-100 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-medium">Completed</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;