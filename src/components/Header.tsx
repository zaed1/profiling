
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home and then scroll
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, [isHomePage]);

  const navItems = [
    ...(isHomePage ? [
      { name: 'About', id: 'about', path: '/#about' },
      { name: 'Skills', id: 'skills', path: '/#skills' },
      { name: 'Experience', id: 'experience', path: '/#experience' },
      { name: 'Education', id: 'education', path: '/#education' },
      { name: 'Contact', id: 'contact', path: '/#contact' },
    ] : []),
    { name: 'Blog', id: 'blog', path: '/blog' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        isScrolled ? 'glass shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-display font-semibold"
        >
          <span className="text-primary">Akhmad</span>{' '}
          <span className="text-indigo-500">Zaed</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.path.startsWith('/#') ? (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:origin-bottom-right after:scale-x-0 after:bg-indigo-600 after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.id}
                to={item.path}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:origin-bottom-right after:scale-x-0 after:bg-indigo-600 after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg animate-slide-down">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item, index) => (
              item.path.startsWith('/#') ? (
                <button
                  key={item.id}
                  onClick={() => {
                    if (!isHomePage) {
                      window.location.href = item.path;
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={`py-3 text-left text-sm font-medium transition-colors hover:text-indigo-600 ${
                    index !== 0 ? 'border-t border-gray-100' : ''
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`py-3 text-left text-sm font-medium transition-colors hover:text-indigo-600 ${
                    index !== 0 ? 'border-t border-gray-100' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
