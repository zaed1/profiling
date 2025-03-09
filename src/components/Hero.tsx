
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-blue-200/20 blur-3xl -top-20 -left-20 animate-float"></div>
        <div className="absolute w-80 h-80 rounded-full bg-indigo-200/20 blur-3xl top-1/3 -right-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 rounded-full bg-purple-200/20 blur-3xl bottom-10 left-1/3 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative mx-auto px-6 py-16 md:py-24 text-center z-10">
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="inline-block mb-6 text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Full-Stack Web Developer
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight md:leading-tight">
            Akhmad <span className="text-indigo-600">Zaed</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12">
            Passionate web developer with experience in front-end and back-end development, 
            creating beautiful, functional websites and applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="neo-button text-white"
            >
              <span className="relative z-10">Contact Me</span>
            </a>
            
            <a
              href="#experience"
              className="px-6 py-3 rounded-full border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all animate-bounce"
        style={{ animationDuration: '2s' }}
        aria-label="Scroll down"
      >
        <ArrowDown size={18} />
      </button>
    </section>
  );
};

export default Hero;
