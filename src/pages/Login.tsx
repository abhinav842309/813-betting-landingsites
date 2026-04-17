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
  Clock,
  Eye,
  MousePointer,
  Info
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
      <section className="relative py-16 lg:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d084]/10 via-transparent to-[#00d084]/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d084]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#00d084]/10 border border-[#00d084]/30 rounded-full px-4 py-2 mb-4">
              <Info className="w-4 h-4 text-[#00d084]" />
              <span className="text-[#00d084] text-sm font-medium">Guia Completo de Login</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              813bet <span className="text-[#00d084]">Login</span>
            </h1>
            <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Acesso Rápido, Seguro e Prático à Sua Conta. Entre na plataforma e 
              explore apostas esportivas, cassino ao vivo, slots e promoções exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="[813bet.one](https://813bet.one)" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic animate-pulse-glow w-full sm:w-auto"
                >
                  Entrar na 813bet
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="[813bet.one](https://813bet.one)" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"
                >
                  Cadastre-se
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Guide Section - NEW */}
      <section className="py-16 lg:py-24 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Veja Como é <span className="text-[#00d084]">Fácil Fazer Login</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Confira o passo a passo visual para acessar sua conta na 813bet
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Guide Image */}
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00d084]/50 to-[#00d084]/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl p-4 sm:p-6 overflow-hidden">
                  <img 
                    src="logindemo.jpg" 
                    alt="Guia visual de login 813bet mostrando as opções de email e telefone"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                 
                </div>
              </div>

              {/* Guide Steps */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-[#00d084]/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00d084] flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg sm:text-xl">1</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg mb-2">Escolha o Método de Login</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Na tela de login, você verá duas abas: <strong className="text-[#00d084]">Correio</strong> (E-mail) e <strong className="text-[#00d084]">Telefone</strong>. 
                        Selecione a opção que preferir para acessar sua conta.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-[#00d084]/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00d084] flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg sm:text-xl">2</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg mb-2">Insira Suas Credenciais</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Digite seu <strong className="text-[#00d084]">e-mail ou número de telefone</strong> (+55 para Brasil) 
                        e sua <strong className="text-[#00d084]">senha</strong>. Use o ícone do olho para visualizar a senha digitada.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-[#00d084]/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00d084] flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg sm:text-xl">3</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg mb-2">Código de Verificação (Telefone)</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Se usar telefone, clique em <strong className="text-[#00d084]">Código</strong> para receber o SMS. 
                        Digite os 4 dígitos recebidos nos campos indicados.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-[#00d084]/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00d084] flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg sm:text-xl">4</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg mb-2">Acesse ou Cadastre-se</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Clique em <strong className="text-[#00d084]">Entrar</strong> para acessar sua conta ou em 
                        <strong className="text-[#00d084]"> Criar Conta</strong> se ainda não tiver cadastro.
                      </p>
                    </div>
                  </div>
                </div>

                <a href="[813bet.one](https://813bet.one)" target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    size="lg"
                    className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 w-full"
                  >
                    <MousePointer className="w-5 h-5 mr-2" />
                    Ir Para Página de Login
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Login Section */}
      <section className="py-16 lg:py-24 border-t border-white/5">
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
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: 'phone', label: 'Telefone', fullLabel: 'Login com Telefone', icon: Smartphone },
              { id: 'email', label: 'E-mail', fullLabel: 'Login com E-mail', icon: Mail },
              { id: 'app', label: 'App', fullLabel: 'Login pelo App', icon: Download },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#00d084] text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{tab.fullLabel}</span>
                <span className="sm:hidden">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                {currentMethod.title}
              </h3>
              <p className="text-white/70 text-base sm:text-lg mb-8 leading-relaxed">
                {currentMethod.description}
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {currentMethod.steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 card-hover"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#00d084]/10 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#00d084]" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a href="[813bet.one](https://813bet.one)" target="_blank" rel="noopener noreferrer">
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

      {/* Quick Tips Banner */}
      <section className="py-8 bg-[#00d084]/10 border-y border-[#00d084]/20">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
                <span className="text-white/80 text-sm">Login 24 horas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
                <span className="text-white/80 text-sm">Suporte em Português</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
                <span className="text-white/80 text-sm">Acesso Seguro SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
                <span className="text-white/80 text-sm">PIX Instantâneo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
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

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Security Tips */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#00d084]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
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
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                    <Key className="w-6 h-6 text-[#00d084]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Como Recuperar sua Senha
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Se você esquecer sua senha, basta clicar em <strong className="text-[#00d084]">"Esqueceu a senha?"</strong> na página de login. 
                  Em seguida, informe o telefone ou e-mail que foi cadastrado, receba o código de 
                  verificação e crie uma nova senha.
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Todo o procedimento é rápido, simples e seguro. Em poucos minutos você 
                  recuperará o acesso à sua conta.
                </p>
                <div className="bg-[#00d084]/10 border border-[#00d084]/20 rounded-xl p-4">
                  <div className="flex items-center space-x-2 text-[#00d084] text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Marque "Lembre de mim" para facilitar próximos acessos</span>
                  </div>
                </div>
              </div>

              {/* Deposits & Withdrawals */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-[#00d084]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
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
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00d084]/10 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-[#00d084]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
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
                      className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3"
                    >
                      <span className="text-white/70 text-sm">{bonus.deposit}</span>
                      <span className="text-[#00d084] font-bold text-lg">{bonus.bonus}</span>
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

      {/* FAQ Section - NEW */}
      <section className="py-16 lg:py-24 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Perguntas Frequentes sobre <span className="text-[#00d084]">Login</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'Esqueci minha senha, o que fazer?',
                  answer: 'Clique em "Esqueceu a senha?" na tela de login, informe seu e-mail ou telefone cadastrado e siga as instruções para criar uma nova senha.'
                },
                {
                  question: 'Posso usar o mesmo login no app e no site?',
                  answer: 'Sim! Suas credenciais funcionam tanto no site quanto no aplicativo 813bet. Você pode alternar entre eles sem problemas.'
                },
                {
                  question: 'O código SMS não chegou, o que fazer?',
                  answer: 'Aguarde alguns segundos e clique em "Código" novamente. Verifique se o número está correto e se seu celular tem sinal. O código expira em 5 minutos.'
                },
                {
                  question: 'É seguro salvar minha senha no navegador?',
                  answer: 'Recomendamos usar a opção "Lembre de mim" apenas em dispositivos pessoais. Evite salvar senhas em computadores públicos ou compartilhados.'
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
                  <h4 className="text-white font-bold text-base sm:text-lg mb-2">{faq.question}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
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
                <a href="[813bet.one](https://813bet.one)" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#00d084] hover:bg-[#00b874] text-black font-bold px-8 py-6 text-lg btn-magnetic w-full sm:w-auto"
                  >
                    Fazer Login Agora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="[813bet.one](https://813bet.one)" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"
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
