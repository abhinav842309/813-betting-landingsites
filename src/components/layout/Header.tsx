import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/app', label: 'App' },
    { path: '/login', label: 'Login' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl lg:text-3xl font-black tracking-tighter">
              <span className="text-white">813</span>
              <span className="text-[#00d084]">bet</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#00d084]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00d084] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 font-medium"
              >
                Entrar
              </Button>
            </Link>
            <Link to="/app">
  <Button
    className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-6 btn-magnetic"
    onClick={(event) => {
      event.preventDefault();
      window.open('https://813bet.one/', '_blank');
    }}
  >
    Registrar
  </Button>
</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass border-b border-white/10 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium py-2 ${
                isActive(link.path)
                  ? 'text-[#00d084]'
                  : 'text-white/80'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                Entrar
              </Button>
            </Link>
            <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                className="w-full bg-[#00d084] hover:bg-[#00b874] text-black font-bold"
              >
                Registrar
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
