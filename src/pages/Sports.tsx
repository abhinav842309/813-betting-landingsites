import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Zap, 
  Globe, 
  TrendingUp, 
  Smartphone,
  Shield,
  Trophy,
  Car,
  Swords,
  Volleyball,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Sports = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: Globe, text: '40+ esportes disponíveis' },
    { icon: TrendingUp, text: 'Odds competitivas em múltiplos formatos' },
    { icon: Zap, text: 'Aposta Rápida - Aposta em um clique' },
    { icon: Smartphone, text: 'Totalmente otimizado para mobile' },
  ];

  const sports = [
    {
      image: '/sports-hero.jpg',
      title: 'Futebol',
      subtitle: 'Aposte nos Maiores Campeonatos',
      description: 'O futebol é o principal destaque da plataforma. Aposte nos maiores campeonatos nacionais e internacionais, incluindo jogos entre seleções.',
      markets: ['Resultado final', 'Dupla chance', 'Ambas as equipes marcam', 'Total de gols', 'Escanteios, cartões e faltas'],
    },
    {
      image: '/BASKETBALL.png',
      title: 'Basquete',
      subtitle: 'NBA e Grandes Ligas',
      description: 'Aposte em jogos da NBA e outras ligas proeminentes, cobrindo tudo desde a temporada regular até playoffs e finais.',
      markets: ['Vencedor da partida', 'Handicap de pontos', 'Total de pontos', 'Desempenho de equipe e jogador'],
    },
    {
      image: '/esports.jpg',
      title: 'eSports',
      subtitle: 'Competição Digital em Ascensão',
      description: 'As apostas em eSports estão crescendo rapidamente. Encontre mercados para os principais torneios de Dota 2, CS:GO, FIFA, NBA 2K, League of Legends e Valorant.',
      markets: ['Vencedor da partida', 'Vencedor do mapa', 'Total de rounds', 'Primeiro sangue'],
    },
  ];

  const additionalSports = [
    { icon: Swords, name: 'MMA', description: 'Vencedor, método de vitória, número de rounds' },
    { icon: Car, name: 'Esportes Motorizados', description: 'Fórmula 1, MotoGP, NASCAR - Vencedor, pódio, volta mais rápida' },
    { icon: Volleyball, name: 'Vôlei e Outros', description: 'Vôlei, Críquete, Badminton, Sinuca, Hóquei, Golfe' },
  ];

  const oddsFormats = [
    { name: 'European (Decimal)', example: '2.50' },
    { name: 'American', example: '+150 / -200' },
    { name: 'Hong Kong', example: '1.50' },
    { name: 'Indonesian', example: '-0.67' },
    { name: 'Malaysian', example: '0.50' },
  ];

  const accumulatorBonus = [
    { volume: '≥ R$ 100', bonus: '0.05%' },
    { volume: '≥ R$ 1,000', bonus: '0.10%' },
    { volume: '≥ R$ 10,000', bonus: '0.30%' },
    { volume: '≥ R$ 100,000', bonus: '0.50%' },
    { volume: '≥ R$ 500,000', bonus: '1.00%' },
    { volume: '≥ R$ 1,000,000', bonus: '3.00%' },
  ];

  const faqs = [
    {
      question: 'O que são apostas esportivas?',
      answer: 'As apostas esportivas permitem que você preveja resultados de eventos esportivos, como vencedores, placares ou estatísticas, com a possibilidade de ganhos de acordo com as odds.',
    },
    {
      question: 'A 813bet é segura para apostas esportivas?',
      answer: 'Sim, a 813bet utiliza criptografia SSL, sistemas auditados e tecnologia avançada para garantir máxima segurança nas apostas esportivas. Todas as informações do usuário são protegidas.',
    },
    {
      question: 'Posso fazer apostas esportivas no mobile?',
      answer: 'Com certeza! A plataforma é totalmente otimizada para uso mobile. Você pode acessar através do navegador ou do app oficial.',
    },
    {
      question: 'O que é aposta ao vivo?',
      answer: 'A aposta ao vivo permite que você faça apostas enquanto o evento está acontecendo. As odds são atualizadas em tempo real com base na situação do jogo.',
    },
    {
      question: 'Posso usar apostas combinadas?',
      answer: 'Sim, a 813bet oferece opções de apostas múltiplas e combinadas, permitindo combinar diferentes mercados em um único bilhete para maiores retornos potenciais.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/sports-hero.png" alt="Sports Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/50" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#00d084]/10 border border-[#00d084]/30 rounded-full px-4 py-2">
              <Trophy className="w-4 h-4 text-[#00d084]" />
              <span className="text-[#00d084] text-sm font-medium">Excelência em Apostas Esportivas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              APOSTAS ESPORTIVAS NA <span className="text-[#00d084]">813BET</span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              As apostas esportivas na 813bet proporcionam uma experiência completa para os entusiastas do esporte que desejam 
              transformar seu conhecimento em oportunidades de vitória. Com mais de 40 modalidades esportivas, odds competitivas 
              e recursos avançados, a 813bet se estabeleceu como uma escolha confiável para os apostadores brasileiros.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic animate-pulse-glow">
                  Começar a Apostar
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

      {/* Why Choose Section */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
                POR QUE ESCOLHER A <span className="text-[#00d084]">813BET</span>?
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                A 813bet foi criada para atender tanto iniciantes quanto apostadores experientes, oferecendo navegação intuitiva 
                e ferramentas completas que facilitam a análise e permitem apostas rápidas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((item, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#00d084]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#00d084]" />
                  </div>
                  <span className="text-white/80 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#00d084]/10 border border-[#00d084]/30 rounded-xl p-6 text-center">
              <span className="text-[#00d084] font-medium">Depósitos e saques rápidos via PIX em ambiente seguro e transparente</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Bet Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/5 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#00d084]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-white">APOSTA RÁPIDA - APOSTE EM UM CLIQUE</h2>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                A Aposta Rápida é um recurso desenvolvido para aqueles que buscam conveniência e agilidade na hora de apostar. 
                Quando ativada, um único clique em qualquer seleção coloca automaticamente a aposta sem etapas extras.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Todas as apostas realizadas podem ser facilmente acompanhadas na seção "Minhas Apostas", proporcionando controle total sobre sua atividade.
              </p>
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-bold mb-3">Perfeito para:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
                    <span>Apostas ao vivo</span>
                  </li>
                  <li className="flex items-center space-x-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
                    <span>Jogadas rápidas</span>
                  </li>
                  <li className="flex items-center space-x-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
                    <span>Aproveitar mudanças imediatas de odds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sports Section */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              PRINCIPAIS <span className="text-[#00d084]">MODALIDADES ESPORTIVAS</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              813bet oferece cobertura esportiva abrangente com mercados detalhados e atualizações frequentes.
            </p>
          </div>

          <div className="space-y-12">
            {sports.map((sport, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="h-64 lg:h-auto">
                    <img src={sport.image} alt={sport.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{sport.title}</h3>
                    <p className="text-[#00d084] font-medium mb-4">{sport.subtitle}</p>
                    <p className="text-white/70 leading-relaxed mb-6">{sport.description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3">Mercados Disponíveis:</h4>
                      <ul className="space-y-2">
                        {sport.markets.map((market, mIndex) => (
                          <li key={mIndex} className="flex items-center space-x-3 text-white/60">
                            <CheckCircle2 className="w-4 h-4 text-[#00d084]" />
                            <span>{market}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sports */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/5 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-white text-center mb-12">
              MAIS <span className="text-[#00d084]">ESPORTES</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalSports.map((sport, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="w-14 h-14 rounded-xl bg-[#00d084]/10 flex items-center justify-center mb-4">
                    <sport.icon className="w-7 h-7 text-[#00d084]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sport.name}</h3>
                  <p className="text-white/60 text-sm">{sport.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Odds Formats */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                FORMATOS DE <span className="text-[#00d084]">ODDS</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                813bet oferece vários formatos de odds, permitindo que cada apostador escolha o que mais se sente confortável.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {oddsFormats.map((format, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <h3 className="text-white font-medium mb-2">{format.name}</h3>
                  <p className="text-[#00d084] text-2xl font-bold">{format.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accumulator Bonus */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/5 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#00d084]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-white">BÔNUS SEMANAL DE ACUMULADOR</h2>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Quanto mais você aposta, maior o bônus que você recebe. Nosso bônus semanal de acumulador recompensa apostadores de alto volume.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-white font-medium">Volume de Apostas</th>
                      <th className="text-right py-4 px-4 text-white font-medium">Bônus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accumulatorBonus.map((row, index) => (
                      <tr key={index} className="border-b border-white/5">
                        <td className="py-4 px-4 text-white/70">{row.volume}</td>
                        <td className="py-4 px-4 text-right text-[#00d084] font-bold">{row.bonus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-2 text-white/60 text-sm">
                <p>* Apostas válidas a partir de R$ 100</p>
                <p>* Bônus sem limite máximo</p>
                <p>* Crédito automático toda quarta-feira</p>
                <p>* Rollover simples de 1x para saque</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#00d084]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-white">SEGURANÇA E CONFIABILIDADE</h2>
            </div>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
              813bet adota criptografia SSL, sistemas auditados e tecnologia de ponta para garantir máxima 
              segurança nas apostas esportivas. As informações dos usuários são protegidas e os pagamentos são feitos de forma rápida e transparente.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/5 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-white text-center mb-12">
              PERGUNTAS <span className="text-[#00d084]">FREQUENTES</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#00d084]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#00d084]" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-white/70">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
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
                INICIE SUA <span className="text-[#00d084]">JORNADA VENCEDORA</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Junte-se a milhares de apostadores que confiam na 813bet para suas apostas esportivas. 
                Com odds competitivas, pagamentos rápidos e uma plataforma segura, sua jornada vencedora começa aqui.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic">
                    Começar a Apostar Agora
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

export default Sports;
