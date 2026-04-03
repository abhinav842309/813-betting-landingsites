
import { Button } from '@/components/ui/button';
import { 
  Download, 
 
  CheckCircle2,
  Star,
  Shield,
  Zap,
  Globe,
  Bell,
  Wallet,
  Smartphone,
  ChevronRight
} from 'lucide-react';

const AppPage = () => {
  // const [activeTab, setActiveTab] = useState<'ios' | 'android'>('ios');

  const features = [
    {
      icon: Zap,
      title: 'Apostas Rápidas',
      description: 'Faça apostas em segundos com nossa interface otimizada.',
    },
    {
      icon: Bell,
      title: 'Notificações ao Vivo',
      description: 'Receba alertas de gols, resultados e odds em tempo real.',
    },
    {
      icon: Wallet,
      title: 'Saques Instantâneos',
      description: 'Retire seus ganhos em minutos, não em dias.',
    },
    {
      icon: Globe,
      title: 'Cobertura Global',
      description: 'Acesse eventos esportivos de todo o mundo.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Baixe o App',
      description: 'Disponível na App Store e Google Play.',
    },
    {
      step: '02',
      title: 'Crie sua Conta',
      description: 'Registro rápido em menos de 2 minutos.',
    },
    {
      step: '03',
      title: 'Deposite',
      description: 'Múltiplos métodos de pagamento disponíveis.',
    },
    {
      step: '04',
      title: 'Comece a Apostar',
      description: 'Explore as melhores odds e aposte ao vivo.',
    },
  ];

  const benefits = [
    'Interface intuitiva e moderna',
    'Odds atualizadas em tempo real',
    'Suporte 24/7 via chat',
    'Múltiplos métodos de pagamento',
    'Saques rápidos e seguros',
    'Notificações personalizadas',
    'Histórico completo de apostas',
    'Estatísticas detalhadas',
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d084]/10 via-transparent to-[#00d084]/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d084]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#00d084]/10 border border-[#00d084]/30 rounded-full px-4 py-2">
                <Smartphone className="w-4 h-4 text-[#00d084]" />
                <span className="text-[#00d084] text-sm font-medium">
                  App Oficial 813bet
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                APOSTE <span className="text-[#00d084]">ONDE</span>
                <br />
                ESTIVER
              </h1>

              <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-xl">
                Baixe nosso aplicativo e tenha acesso às melhores odds do mercado 
                brasileiro diretamente no seu celular. Rápido, seguro e fácil de usar.
              </p>

              {/* Download Tabs */}
              <div className="space-y-6">
                

                <Button
                  size="lg"
                  className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic animate-pulse-glow"
                  onClick={() => window.open('https://example.com', '_blank', 'noopener,noreferrer')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  { 'Baixar O App '}
                </Button>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00d084] text-[#00d084]" />
                  ))}
                </div>
                <span className="text-white/60 text-sm">
                  4.9/5 - Mais de 500mil avaliações
                </span>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative flex justify-center">
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
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              RECURSOS <span className="text-[#00d084]">EXCLUSIVOS</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Nosso app foi desenvolvido para oferecer a melhor experiência de 
              apostas do mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00d084]/10 flex items-center justify-center mb-4 group-hover:bg-[#00d084]/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-[#00d084]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/5 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              COMO <span className="text-[#00d084]">FUNCIONA</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Comece a apostar em apenas 4 passos simples.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center group hover:border-[#00d084]/30 transition-colors"
              >
                <div className="text-5xl font-black text-[#00d084]/20 mb-4 group-hover:text-[#00d084]/40 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {item.description}
                </p>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/10">
                    <ChevronRight className="absolute -right-2 -top-2 w-4 h-4 text-white/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Phone */}
            <div className="relative flex justify-center order-2 lg:order-1">
              <img
                src="/phone-features.png"
                alt="App Benefits"
                className="w-full max-w-[300px] drop-shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                TUDO QUE VOCÊ <br />
                <span className="text-[#00d084]">PRECISA</span>
              </h2>

              <p className="text-white/70 text-lg leading-relaxed">
                Nosso aplicativo oferece todos os recursos necessários para uma 
                experiência de apostas completa e satisfatória.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-white/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00d084] flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#00d084]" />
                  <span className="text-white/60 text-sm">100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-[#00d084]" />
                  <span className="text-white/60 text-sm">Rápido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="relative bg-gradient-to-r from-[#00d084]/20 to-[#00d084]/5 border border-[#00d084]/30 rounded-3xl p-8 lg:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00d084] rounded-full blur-3xl" />
            </div>

            <div className="relative space-y-6">
              <h2 className="text-3xl lg:text-5xl font-black text-white">
                PRONTO PARA <span className="text-[#00d084]">COMEÇAR</span>?
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Baixe agora o app da 813bet e comece a apostar com as melhores 
                odds do mercado brasileiro.
              </p>
              <div className="flex justify-center pt-4">
  <Button
    size="lg"
    className="bg-white text-black hover:bg-white/90 font-bold px-10 py-5 text-xl btn-magnetic animate-pulse-glow"
    onClick={() => window.open('https://example.com', '_blank', 'noopener,noreferrer')}
  >
    <Download className="w-5 h-5 mr-2" />
    Baixar App
  </Button>
</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppPage;
