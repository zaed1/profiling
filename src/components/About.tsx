
import { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="section bg-white relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm text-indigo-600 font-medium bg-indigo-50 rounded-full mb-4">
            About Me
          </div>
          <h2 className="section-title">Get to know me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
            className={`transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600/5 rounded-3xl transform rotate-3"></div>
              <div className="bg-gradient-to-tr from-white to-gray-100 p-1 shadow-xl rounded-3xl relative z-10">
                <div className="overflow-hidden rounded-[22px] aspect-[4/5] bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-300 to-blue-400 text-white flex items-center justify-center text-5xl font-bold">
                    AZ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">I'm a Web Developer with a passion for technology</h3>
            <p className="text-gray-600 mb-6">
              As a dedicated web developer based in Wonosobo, Indonesia, I've built a strong foundation in both front-end and back-end technologies. I'm passionate about creating elegant, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-600 mb-8">
              With experience in multiple industries and a diverse skill set, I focus on delivering high-quality work with attention to detail and exceptional communication.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-medium">Wonosobo, Indonesia</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a href="mailto:Khmdzd@gmail.com" className="font-medium hover:text-indigo-600 transition-colors">
                    Khmdzd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <a href="tel:+6285132864883" className="font-medium hover:text-indigo-600 transition-colors">
                    +62 851 3286 4883
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
