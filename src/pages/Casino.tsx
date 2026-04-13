import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Users, 
  Monitor, 
  MessageCircle, 
  Clock, 
  Smartphone,
  Shield,
  Gift,
  CheckCircle2,
  Star
} from 'lucide-react';

const Casino = () => {
  const highlights = [
    { icon: Users, text: 'Crupiês profissionais ao vivo' },
    { icon: Monitor, text: 'Transmissão em HD com múltiplos ângulos' },
    { icon: MessageCircle, text: 'Interação de chat em tempo real' },
    { icon: Clock, text: 'Mesas disponíveis 24/7' },
    { icon: Smartphone, text: 'Totalmente otimizado para dispositivos móveis' },
  ];

  const games = [
    {
      image: '/Blackjack.png',
      title: 'Blackjack Ao Vivo',
      description: 'Um dos jogos de mesa mais populares do mundo. Teste sua estratégia contra o dealer, mire nos 21 pontos e aproveite mesas clássicas e opções de apostas laterais.',
    },
    {
      image: '/Bacarat Ao  vivo.png',
      title: 'Baccarat Ao Vivo',
      description: 'Perfeito para aqueles que preferem regras simples e apostas rápidas. Aposte em vitórias de Jogador, Banqueiro ou Empate, tudo em tempo real com dealers profissionais.',
    },
    {
      image: '/Roleta.png',
      title: 'Roleta Ao Vivo',
      description: 'A emoção da roleta tradicional ganha vida. A 813bet oferece mesas de Roleta Europeia e Americana com transmissão em HD e resultados transparentes.',
    },
    {
      image: '/game show.png',
      title: 'Game Shows',
      description: 'Game shows ao vivo modernos como Crazy Time combinam roleta, bônus especiais, mini-jogos interativos e multiplicadores altos para uma experiência dinâmica.',
    },
  ];

  const benefits = [
    'Bônus de boas-vindas para novos jogadores',
    'Promoções semanais de cashback',
    'Programa de recompensas VIP',
    'Eventos exclusivos de torneios',
  ];

  const steps = [
    { number: '01', title: 'Criar Conta', description: 'Registre-se gratuitamente na 813bet em apenas alguns minutos.' },
    { number: '02', title: 'Fazer um Depósito', description: 'Use PIX para depósitos rápidos e seguros.' },
    { number: '03', title: 'Escolha Seu Jogo', description: 'Acesse a categoria Live Casino e escolha sua mesa favorita.' },
    { number: '04', title: 'Comece a Jogar', description: 'Interaja com os dealers e faça apostas em tempo real.' },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/casino-hero.png" alt="Casino Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/50" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#00d084]/10 border border-[#00d084]/30 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-[#00d084]" />
              <span className="text-[#00d084] text-sm font-medium">Experiência de Cassino Ao Vivo</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              CASSINO AO VIVO NA <span className="text-[#00d084]">813BET</span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              O Cassino Ao Vivo da 813bet oferece uma experiência autêntica e imersiva, trazendo toda a emoção 
              de um cassino físico para sua tela. Com dealers reais, transmissão em HD e jogos de mesa clássicos, 
              jogadores brasileiros podem desfrutar de entretenimento seguro e interativo do conforto de casa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic animate-pulse-glow">
                  Jogar Cassino Ao Vivo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Criar Conta
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              DESTAQUES DO <span className="text-[#00d084]">CASSINO AO VIVO</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              O cassino ao vivo da 813bet se destaca pela excelência técnica, ampla variedade de jogos e experiência imersiva do jogador.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-[#00d084]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#00d084]" />
                </div>
                <span className="text-white/80 font-medium">{item.text}</span>
              </div>
            ))}
            <div className="flex items-center space-x-4 bg-[#00d084]/10 border border-[#00d084]/30 rounded-xl p-6">
              <span className="text-[#00d084] font-bold">PIX</span>
              <span className="text-white/80 font-medium">Depósitos rápidos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Experience Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/5 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                EXPERIÊNCIA IMERSIVA <span className="text-[#00d084]">EM TEMPO REAL</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Na 813bet, o cassino ao vivo é projetado para oferecer uma experiência totalmente imersiva. As mesas são equipadas 
                com câmeras profissionais e áudio de alta qualidade, além de dealers experientes que conduzem os jogos de forma 
                transparente e dinâmica.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                A interação em tempo real permite que os jogadores conversem tanto com o dealer quanto com outros participantes, promovendo 
                um ambiente social semelhante aos cassinos tradicionais. Essa proximidade torna cada rodada mais envolvente 
                e autêntica.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Além disso, a plataforma oferece estabilidade, garantindo jogos contínuos e ininterruptos, seja em desktop ou dispositivos móveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Games Section */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              JOGOS AO VIVO <span className="text-[#00d084]">DISPONÍVEIS</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Escolha entre uma variedade de jogos de mesa clássicos e modernos game shows ao vivo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <div key={index} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{game.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/5 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#00d084]" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black text-white">SEGURANÇA E CONFIANÇA</h2>
                </div>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  A 813bet emprega tecnologia avançada, criptografia SSL e sistemas auditados para garantir que todos os jogos ao vivo 
                  sejam realizados de forma justa, segura e transparente.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  A transmissão ao vivo permite que os jogadores acompanhem cada ação do dealer, aumentando a confiança e 
                  integridade em cada jogo. Além disso, as informações pessoais e financeiras dos usuários são protegidas 
                  de acordo com padrões internacionais de segurança.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-[#00d084]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">OFERTAS E BENEFÍCIOS</h3>
                </div>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00d084] flex-shrink-0" />
                      <span className="text-white/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/50 text-sm mt-4">* Todas as ofertas sujeitas a termos e condições</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              COMO <span className="text-[#00d084]">COMEÇAR A JOGAR</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Comece com jogos de cassino ao vivo em apenas alguns passos simples.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-[#00d084]/30 mb-4">{step.number}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic">
                Começar a Jogar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Casino Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/5 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              CASSINO AO VIVO NO <span className="text-[#00d084]">CELULAR</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Todos os jogos de cassino ao vivo da 813bet são totalmente compatíveis com dispositivos móveis. 
              Acesse as mesas diretamente pelo navegador ou pelo aplicativo oficial, mantendo a mesma 
              qualidade de imagem, som e interatividade.
            </p>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
              Desfrute da experiência de cassino ao vivo com praticidade e desempenho estável, onde e 
              quando preferir.
            </p>
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
                A EXPERIÊNCIA REAL DE <span className="text-[#00d084]">CASSINO</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                O Cassino Ao Vivo da 813bet combina tecnologia, entretenimento e autenticidade para proporcionar uma experiência diferenciada. 
                Seja você fã de jogos de mesa tradicionais ou prefere a interação de game shows ao vivo, garantimos qualidade, 
                segurança e diversão em cada jogo.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic">
                    Jogar Agora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Casino;
