import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/app', label: 'App' },
    { path: '/login', label: 'Login' },
  ];

  const legalLinks = [
    { label: 'Termos de Uso', href: '#' },
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Jogo Responsável', href: '#' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-black tracking-tighter">
                <span className="text-white">813</span>
                <span className="text-[#00d084]">bet</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A melhor experiência de apostas esportivas do Brasil. 
              Aposte ao vivo com as melhores odds e receba seus ganhos rapidamente.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#00d084] hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-[#00d084] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#00d084] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Suporte 24/7</li>
              <li>
                <a 
                  href="mailto:suporte@813bet.one" 
                  className="hover:text-[#00d084] transition-colors duration-300"
                >
                  suporte@813bet.one
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/suporte813bet" 
                  className="hover:text-[#00d084] transition-colors duration-300"
                >
                  @suporte813bet
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-white/40 text-sm text-center md:text-left">
            {currentYear} 813bet. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs text-center md:text-right">
            18+ | Jogue com responsabilidade | Apostas esportivas são atividades de entretenimento
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
