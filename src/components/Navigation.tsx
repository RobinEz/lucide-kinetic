import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, BrainCircuit } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Philosophie', href: '/philosophie' },
    { label: 'Expertise', href: '/expertise' },
    { label: 'Processus', href: '/processus' },
    { label: 'Projets', href: '/projets' },
    { label: 'Contact', href: '/contact' }
  ];

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-depth' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
              <BrainCircuit className="w-9 h-9 text-primary" />
              <span className="text-2xl font-monument font-bold text-foreground">
                Lucide
              </span>
            </div>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA desktop */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="btn-hero px-6 py-2"
              >
                <span>Parlons de votre projet</span>
              </Link>
            </div>

            {/* Menu mobile */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile overlay */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-lg text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full btn-hero mt-6 text-center"
            >
              <span>Parlons de votre projet</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer pour éviter que le contenu soit caché */}
      <div className="h-20"></div>
    </>
  );
};

export default Navigation;