
import { useState, useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Backend Developer Intern",
    company: "lokatani",
    period: "02/2025 - Present",
    location: "Remote - Jakarta",
    description: "As a dedicated and detail-oriented web development intern, I am currently honing my skills in back-end development with a strong focus on API integration and management. My experience includes working on various projects that enhance my understanding of server-side technologies and database management. I am particularly passionate about leveraging the Laravel framework to build robust and scalable applications."
  },
  {
    title: "CEO and Founder",
    company: "Ajip Ponik Hidroponik",
    period: "12/2022 - Present",
    location: "",
    description: "Communicated with customers daily, provided friendly and courteous service, and answered questions. Managed a team of Ajip Ponik, Farmer Team 2, Sales Team 1, Farm QC 1, Packing Team 2. Designed and implemented a lesson plan to teach data. Designed and implemented a lesson plan to teach statistics. Designed farm and business model across the team."
  },
  {
    title: "Web Developer/Designer",
    company: "indoAffo Furniture",
    period: "01/2022 - 03/2025",
    location: "",
    description: "Design a user-friendly store for the IndoAffo Furniture website and also designed social media for a furniture company."
  },
  {
    title: "Web Developer",
    company: "ZidanvaStone",
    period: "01/2021 - 03/2025",
    location: "Tulung Agung",
    description: "Design a website to create a more visually appealing, user-friendly experience for Stone Marble branding store in Tulung Agung."
  },
  {
    title: "Founder and CEO",
    company: "HiAjip",
    period: "01/2019 - 03/2025",
    location: "",
    description: "Design system and develop a website for HiAjip Web Apps. Make a team for support. Communicate with the Customer. Organized and planned team for a great startup."
  },
  {
    title: "Data Entry",
    company: "BPJPH",
    period: "01/2023 - 01/2025",
    location: "",
    description: "Input the database on offline data through the website Halal in the Indonesian Government. Improved system performance by 20% and streamlined operations by 20% with new procedures and automation."
  }
];

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="section bg-white relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm text-indigo-600 font-medium bg-indigo-50 rounded-full mb-4">
            Experience
          </div>
          <h2 className="section-title">My Professional Journey</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className={`timeline-item transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="text-indigo-600 font-medium">{exp.company}</div>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-gray-500">
                    {exp.period}
                    {exp.location && ` • ${exp.location}`}
                  </div>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
