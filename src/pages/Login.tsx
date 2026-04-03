import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Mail, 
  Download, 
  Shield, 
  Lock, 
  Wallet, 
  Gift, 
  CheckCircle2,
  ArrowRight,
  Key,
  AlertTriangle,
  QrCode,
  Clock
} from 'lucide-react';

const Login = () => {
  const [activeTab, setActiveTab] = useState<'phone' | 'email' | 'app'>('phone');

  const loginMethods = {
    phone: {
      title: 'Entrar na 813bet Usando Número de Telefone',
      description: 'O login com número de telefone é a forma mais rápida de acessar sua conta na 813bet. Basta utilizar seu celular para receber o código de verificação por SMS e concluir o acesso com segurança, sem precisar lembrar e-mail.',
      steps: [
        {
          icon: Smartphone,
          title: 'Receba código por SMS',
          description: 'Digite seu número com DDD e aguarde o código enviado por SMS para validar o acesso à sua conta.',
        },
        {
          icon: Shield,
          title: 'Acesso rápido e seguro',
          description: 'Após inserir o código recebido e sua senha, o sistema libera sua conta imediatamente com proteção total dos seus dados.',
        },
        {
          icon: CheckCircle2,
          title: 'Cadastro durante o login',
          description: 'Caso ainda não tenha conta, você pode se registrar diretamente nessa etapa e já começar a apostar com bônus disponíveis.',
        },
      ],
    },
    email: {
      title: 'Entrar na 813bet Usando E-mail',
      description: 'O login com e-mail é a forma tradicional e segura de acessar sua conta na 813bet. Utilize seu endereço de e-mail cadastrado e senha para entrar na plataforma e aproveitar todos os recursos.',
      steps: [
        {
          icon: Mail,
          title: 'Digite seu e-mail',
          description: 'Informe o endereço de e-mail cadastrado na sua conta 813bet para iniciar o processo de login.',
        },
        {
          icon: Lock,
          title: 'Informe sua senha',
          description: 'Digite sua senha de forma segura. Caso tenha esquecido, utilize a opção de recuperação de senha.',
        },
        {
          icon: Shield,
          title: 'Acesso imediato',
          description: 'Após validar seus dados, você terá acesso completo à plataforma para apostar e jogar.',
        },
      ],
    },
    app: {
      title: 'Entrar na 813bet Pelo Aplicativo',
      description: 'O login pelo aplicativo 813bet oferece a melhor experiência mobile. Acesse sua conta rapidamente com reconhecimento biométrico ou senha, e aproveite todas as funcionalidades otimizadas para celular.',
      steps: [
        {
          icon: Download,
          title: 'Baixe o app oficial',
          description: 'Instale o aplicativo 813bet diretamente do nosso site para garantir segurança e acesso às últimas atualizações.',
        },
        {
          icon: Smartphone,
          title: 'Login simplificado',
          description: 'Use reconhecimento facial, digital ou senha para acessar sua conta com um toque.',
        },
        {
          icon: Shield,
          title: 'Notificações em tempo real',
          description: 'Receba alertas de resultados, promoções exclusivas e atualizações de apostas diretamente no seu celular.',
        },
      ],
    },
  };

  const securityTips = [
    'Acesse apenas o site e aplicativo oficiais da 813bet',
    'Evite clicar em links desconhecidos ou suspeitos',
    'Não realize login em redes Wi-Fi públicas',
    'Utilize senhas fortes e exclusivas',
    'Nunca compartilhe seus dados de acesso com terceiros',
  ];

  const bonuses = [
    { deposit: '1º Depósito', bonus: '30%', min: 'R$50' },
    { deposit: '2º Depósito', bonus: '20%', min: 'R$50' },
    { deposit: '3º Depósito', bonus: '10%', min: 'R$50' },
  ];

  const currentMethod = loginMethods[activeTab];

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
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              813bet <span className="text-[#00d084]">Login</span>
            </h1>
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Acesso Rápido, Seguro e Prático à Sua Conta. Entre na plataforma e 
              explore apostas esportivas, cassino ao vivo, slots e promoções exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic animate-pulse-glow"
                >
                  Entrar na 813bet
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  Cadastre-se
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to Login Section */}
      <section className="py-20 lg:py-32 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              Como Fazer <span className="text-[#00d084]">813bet Login</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Escolha o método de login que preferir e acesse sua conta com segurança e rapidez.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'phone', label: 'Login com Telefone', icon: Smartphone },
              { id: 'email', label: 'Login com E-mail', icon: Mail },
              { id: 'app', label: 'Login pelo App', icon: Download },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#00d084] text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {currentMethod.title}
              </h3>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                {currentMethod.description}
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {currentMethod.steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#00d084]/10 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-[#00d084]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8"
                  >
                    Acessar Plataforma
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/5 to-transparent" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
                Segurança e Acesso no <span className="text-[#00d084]">813bet Login</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Informações completas sobre segurança, recuperação de senha, depósitos, 
                saques e bônus exclusivos para novos usuários.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Security Tips */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#00d084]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Dicas para um Login Seguro
                  </h3>
                </div>
                <ul className="space-y-4">
                  {securityTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-[#00d084] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Password Recovery */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                    <Key className="w-6 h-6 text-[#00d084]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Como Recuperar sua Senha
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Se você esquecer sua senha, basta clicar em "Esqueci minha senha" na página de login. 
                  Em seguida, informe o telefone ou e-mail que foi cadastrado, receba o código de 
                  verificação e crie uma nova senha.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Todo o procedimento é rápido, simples e seguro. Em poucos minutos você 
                  recuperará o acesso à sua conta.
                </p>
              </div>

              {/* Deposits & Withdrawals */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-[#00d084]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Depósitos e Saques Após o Login
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <QrCode className="w-5 h-5 text-[#00d084] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium text-sm">Depósito via PIX</span>
                      <p className="text-white/60 text-sm">
                        Acesse a carteira, selecione PIX, informe o valor e escaneie o QR Code. 
                        O saldo é creditado quase imediatamente.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[#00d084] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium text-sm">Saque Rápido</span>
                      <p className="text-white/60 text-sm">
                        Saques via PIX são processados em menos de uma hora, 
                        diretamente para sua conta bancária.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bonuses */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-[#00d084]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Bônus para Novos Usuários
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Após realizar o primeiro login, os novos usuários têm acesso a bônus progressivos 
                  nos primeiros depósitos:
                </p>
                <div className="space-y-2">
                  {bonuses.map((bonus, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2"
                    >
                      <span className="text-white/70 text-sm">{bonus.deposit}</span>
                      <span className="text-[#00d084] font-bold">{bonus.bonus}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/50 text-xs mt-3">
                  * Mínimo de {bonuses[0].min} por depósito para participar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Agora que você já aprendeu como fazer o login no 813bet, é só acessar o site 
                oficial e mergulhar na diversão! Apostas esportivas ao vivo, cassino online, 
                slots e crash games incríveis esperam por você.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic"
                  >
                    Fazer Login Agora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="https://813bet.one" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                  >
                    Criar Conta
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

export default Login;
