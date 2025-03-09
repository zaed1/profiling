
import { useState, useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const educations = [
  {
    institution: "Chengshiu University",
    degree: "Industrial Engineering Management",
    year: "08/2020",
    location: ""
  },
  {
    institution: "Cheng Shiu Uninversity",
    degree: "HRM",
    year: "03/2019",
    location: ""
  },
  {
    institution: "Universitas Sebelas Maret",
    degree: "Mechanical Engineering",
    year: "02/2018",
    location: "Surakarta"
  }
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section bg-gray-50 relative"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute w-80 h-80 rounded-full bg-blue-100/40 blur-3xl -top-20 -left-20"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm text-indigo-600 font-medium bg-indigo-50 rounded-full mb-4">
            Education
          </div>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {educations.map((edu, index) => (
            <div
              key={`${edu.institution}-${index}`}
              className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover-lift transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-bold">{edu.institution}</h3>
              <div className="text-indigo-600 font-medium mb-2">{edu.degree}</div>
              <div className="text-sm text-gray-500 flex items-center justify-between">
                <span>{edu.year}</span>
                {edu.location && <span>{edu.location}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
