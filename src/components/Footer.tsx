
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="font-display font-semibold text-xl">
                <span className="text-primary">Akhmad</span>{' '}
                <span className="text-indigo-500">Zaed</span>
              </span>
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              Web Developer & Designer
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <a
              href="#skills" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-500 text-sm">
            © {currentYear} Akhmad Zaed. All rights reserved.
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="mailto:Khmdzd@gmail.com"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
