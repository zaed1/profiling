
import { useState, useEffect, useRef } from 'react';
import { Code, Pen, Terminal, Globe, Users, Database, Clock, Brain } from 'lucide-react';

const skillCategories = [
  {
    name: "Web Development",
    icon: <Code size={20} />,
    skills: ["HTML", "CSS", "JavaScript", "Front-End Development", "Web Development"],
  },
  {
    name: "Design",
    icon: <Pen size={20} />,
    skills: ["Corel Draw", "Photoshop", "Premiere", "AI"],
  },
  {
    name: "Technical",
    icon: <Terminal size={20} />,
    skills: ["Computer literacy", "Microsoft Office", "Data Entry"],
  },
  {
    name: "Communication",
    icon: <Globe size={20} />,
    skills: ["Communication skills", "Bilingual", "Indonesian", "Chinese", "English"],
  },
  {
    name: "Leadership",
    icon: <Users size={20} />,
    skills: ["Leadership"],
  },
  {
    name: "Database",
    icon: <Database size={20} />,
    skills: ["Data Entry"],
  },
  {
    name: "Soft Skills",
    icon: <Brain size={20} />,
    skills: ["Time management"],
  },
];

const SkillCategory = ({ category, index, isVisible }: { category: any, index: number, isVisible: boolean }) => {
  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-700 hover-lift ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} 
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
        {category.icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{category.name}</h3>
      <div className="flex flex-wrap">
        {category.skills.map((skill: string) => (
          <span key={skill} className="pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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
      id="skills"
      ref={sectionRef}
      className="section bg-gray-50 relative"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-indigo-100/40 blur-3xl -bottom-20 -right-20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm text-indigo-600 font-medium bg-indigo-50 rounded-full mb-4">
            My Skills
          </div>
          <h2 className="section-title">What I Can Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.name}
              category={category}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
