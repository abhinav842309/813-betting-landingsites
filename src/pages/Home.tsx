import { useState, useEffect, useRef, useCallback } from 'react';
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
  Clock,

} from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  // Promo items data
  const promoItems = [
    {
      src: '/promo-1.jpg',
      
    },
    {
      src: '/promo-2.jpg',
    
    },
    {
      src: '/promo-3.jpg',
      
    },
    {
      src: '/promo-4.jpg',
     
    },
    {
      src: '/promo-5.jpg',
   
    },
    {
      src: '/promo-6.jpg',
    
    },
    {
      src: '/promo-7.jpg',
      
    },
    {
      src: '/promo-8.jpg',
     
    },
    {
      src: '/promo-9.jpg',
     
    },
  ];

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

  // Handle carousel selection change
  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  }, []);

  // Set up carousel event listeners
  useEffect(() => {
    if (!carouselApi) return;

    onSelect(carouselApi);
    carouselApi.on('select', () => onSelect(carouselApi));
    carouselApi.on('reInit', () => onSelect(carouselApi));

    return () => {
      carouselApi.off('select', () => onSelect(carouselApi));
      carouselApi.off('reInit', () => onSelect(carouselApi));
    };
  }, [carouselApi, onSelect]);

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
    <div className="min-h-screen bg-[#0d0d0d] overflow-x-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Background"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-20">
          {/* FIX 1: Replaced two-column grid with flex centering since phone mockup is empty */}
          <div className="flex justify-center w-full">
            {/* Left Content */}
            {/* FIX 2: Added max-w-2xl and mx-auto for proper centering */}
            <div className="space-y-8 animate-slide-up text-center w-full max-w-2xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-[#00d084]/10 border border-[#00d084]/30 rounded-full px-4 py-2 mx-auto">
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

              <p className="text-white/70 text-lg lg:text-xl max-w-xl leading-relaxed mx-auto">
                Experimente a emoção das apostas com a 813bet. Rápida, segura e 
                projetada para vencedores. As melhores odds do mercado brasileiro.
              </p>

              {/* FIX 3: Added justify-center so buttons stay centered on mobile */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/app">
                  <Button
                    size="lg"
                    className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic animate-pulse-glow w-full sm:w-auto"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    BAIXAR APP
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"
                  >
                    COMEÇAR AGORA
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              {/* FIX 4: Changed grid-cols-4 to grid-cols-2 sm:grid-cols-4 so stats stack on mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
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
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#00d084] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Promo carousel section */}
      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          
          {/* Heading */}
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#00d084]/70 mb-2">
              PROMOS
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Destaques em movimento
            </h2>
          </div>

          {/* Carousel */}
          <Carousel
            opts={{
              loop: true,
              align: "start",
              skipSnaps: false,
              dragFree: false,
            }}
            plugins={[plugin.current]}
            setApi={setCarouselApi}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {promoItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-3 md:pl-4 basis-[90%] sm:basis-[70%] md:basis-[60%] lg:basis-[50%]"
                >
                  <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 shadow-xl hover:border-[#00d084]/30 transition-all duration-300">
                    
                    {/* Image Container */}
                    <div className="relative w-full aspect-[1072/552] bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
                      {/* FIX 5: Removed scale-125 which was causing overflow; use object-cover instead */}
                      <img
                        src={item.src}
                        alt={'loading'}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                    </div>

                   
                    

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-[#00d084]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white/10 hover:bg-[#00d084] text-white hover:text-black border-0 w-12 h-12 rounded-full transition-all duration-300" />
              
              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {promoItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'w-8 bg-[#00d084]' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <CarouselNext className="static translate-y-0 bg-white/10 hover:bg-[#00d084] text-white hover:text-black border-0 w-12 h-12 rounded-full transition-all duration-300" />
            </div>
          </Carousel>
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
          {/* FIX 6: Added grid-cols-1 as base — was missing, causing layout break on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
          {/* FIX 7: Added grid-cols-1 as base — was missing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
            <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
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
                    className="flex items-center space-x-4 text-white/80 justify-center lg:justify-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#00d084]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#00d084]" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start">
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

            {/* FIX 8: Added grid-cols-1 as base — was missing */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-black text-white">
                  BAIXE O APP <span className="text-[#00d084]">AGORA</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Disponível para iOS e Android. Comece a apostar em minutos com 
                  nosso aplicativo rápido e seguro.
                </p>
                {/* FIX 9: Added items-center sm:items-start so button centers on mobile */}
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center lg:justify-start">
                  <Button 
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 font-bold px-10 py-5 text-xl btn-magnetic animate-pulse-glow w-full sm:w-auto"
                    onClick={() => window.open('https://example.com', '_blank', 'noopener,noreferrer')} 
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Baixar App
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src="/phone-download.png"
                  alt="Download App"
                  className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] drop-shadow-2xl"
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
