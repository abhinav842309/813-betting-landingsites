import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Shield, 
  Zap, 
  Headphones,
  Download,
  ChevronRight,
  Star,
  Trophy,
  Clock
} from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for phone
    const handleMouseMove = (e: MouseEvent) => {
      if (phoneRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX - innerWidth / 2) / 25;
        const y = (clientY - innerHeight / 2) / 25;
        phoneRef.current.style.transform = `translate(${x}px, ${y}px) rotateY(${x}deg) rotateX(${-y}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Smartphone,
      title: 'Fácil de Usar',
      description: 'Interface intuitiva projetada para uma experiência de apostas sem complicações.',
    },
    {
      icon: Shield,
      title: 'Rápido & Seguro',
      description: 'Transações instantâneas com a mais alta tecnologia de segurança.',
    },
    {
      icon: Zap,
      title: 'Apostas ao Vivo',
      description: 'Aposte em partidas em tempo real com odds atualizadas instantaneamente.',
    },
    {
      icon: Headphones,
      title: 'Suporte 24/7',
      description: 'Atendimento ao cliente disponível todos os dias, a qualquer hora.',
    },
  ];

  const stats = [
    { value: '500K+', label: 'Usuários Ativos' },
    { value: '50+', label: 'Esportes' },
    { value: '99.9%', label: 'Uptime' },
    { value: '5min', label: 'Saque Rápido' },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center space-x-2 bg-[#00d084]/10 border border-[#00d084]/30 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-[#00d084]" />
                <span className="text-[#00d084] text-sm font-medium">
                  #1 em Apostas Esportivas no Brasil
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-white">APOSTE NOS</span>
                <br />
                <span className="gradient-text">MELHORES</span>
              </h1>

              <p className="text-white/70 text-lg lg:text-xl max-w-xl leading-relaxed">
                Experimente a emoção das apostas com a 813bet. Rápida, segura e 
                projetada para vencedores. As melhores odds do mercado brasileiro.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/app">
                  <Button
                    size="lg"
                    className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic animate-pulse-glow"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    BAIXAR APP
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                  >
                    COMEÇAR AGORA
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 pt-8 border-t border-white/10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-black text-[#00d084]">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-xs lg:text-sm mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div 
              ref={phoneRef}
              className="relative flex justify-center lg:justify-end perspective-1000"
              style={{ transition: 'transform 0.1s ease-out' }}
            >
              <div className="relative animate-float">
                <img
                  src="/phone-hero.png"
                  alt="813bet App"
                  className="w-full max-w-[320px] lg:max-w-[400px] drop-shadow-2xl"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#00d084]/20 blur-3xl -z-10 rounded-full scale-75" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#00d084] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              POR QUE ESCOLHER A <span className="text-[#00d084]">813BET</span>?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Oferecemos a melhor experiência de apostas com tecnologia de ponta e 
              suporte dedicado.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00d084]/10 flex items-center justify-center mb-6 group-hover:bg-[#00d084]/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-[#00d084]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#00d084]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/5 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Phone Image */}
            <div className="relative flex justify-center order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/phone-features.png"
                  alt="App Features"
                  className="w-full max-w-[300px] lg:max-w-[350px] drop-shadow-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#00d084]/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00d084]/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                APOSTAS AO VIVO <br />
                <span className="text-[#00d084]">EM TEMPO REAL</span>
              </h2>

              <p className="text-white/70 text-lg leading-relaxed">
                Acompanhe as partidas em tempo real e faça suas apostas no momento 
                certo. Nosso sistema de odds atualiza instantaneamente para garantir 
                as melhores oportunidades.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Trophy, text: 'As melhores odds do mercado' },
                  { icon: Clock, text: 'Atualizações em tempo real' },
                  { icon: Zap, text: 'Apostas rápidas com um toque' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 text-white/80"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#00d084]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#00d084]" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link to="/app">
                <Button
                  size="lg"
                  className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 mt-4 btn-magnetic"
                >
                  EXPLORAR APP
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="relative bg-gradient-to-r from-[#00d084]/20 to-[#00d084]/5 border border-[#00d084]/30 rounded-3xl p-8 lg:p-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d084] rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00d084] rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-black text-white">
                  BAIXE O APP <span className="text-[#00d084]">AGORA</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Disponível para iOS e Android. Comece a apostar em minutos com 
                  nosso aplicativo rápido e seguro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                 
                    <Button size="lg"
                     className="bg-white text-black hover:bg-white/90 font-bold px-10 py-5 text-xl btn-magnetic animate-pulse-glow"
                     onClick={() => window.open('https://example.com', '_blank', 'noopener,noreferrer')} >
                     <Download className="w-5 h-5 mr-2" />
                     Baixar App
                     </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src="/phone-download.png"
                  alt="Download App"
                  className="w-full max-w-[250px] lg:max-w-[300px] drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
