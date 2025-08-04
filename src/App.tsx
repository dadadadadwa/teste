import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, Star, Clock, Users, Award, ArrowRight, Coffee, Zap, Heart, Target, TrendingUp, Shield } from 'lucide-react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Maria Silva",
      age: 34,
      result: "Perdi 8kg em 30 dias",
      text: "O protocolo mudou minha vida! Nunca pensei que seria tão fácil emagrecer tomando café.",
      rating: 5
    },
    {
      name: "João Santos",
      age: 42,
      result: "Eliminei 12kg em 45 dias",
      text: "Incrível como funciona! Minha energia aumentou e a barriga sumiu completamente.",
      rating: 5
    },
    {
      name: "Ana Costa",
      age: 28,
      result: "Perdi 6kg em 21 dias",
      text: "Método revolucionário! Consegui emagrecer sem passar fome e sem exercícios pesados.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Acelera o Metabolismo",
      description: "Aumenta a queima de gordura em até 300%"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Melhora a Saúde",
      description: "Reduz inflamação e melhora a saúde cardiovascular"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Foco na Gordura Abdominal",
      description: "Elimina especificamente a gordura da barriga"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Resultados Rápidos",
      description: "Primeiros resultados visíveis em 7 dias"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "100% Natural",
      description: "Sem químicos, remédios ou suplementos"
    },
    {
      icon: <Coffee className="w-8 h-8 text-yellow-500" />,
      title: "Simples de Seguir",
      description: "Apenas café preto no horário certo"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-[5%] w-96 h-96 bg-orange-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-yellow-500/10 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 z-10 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
            {/* Video Section */}
            <div className="w-full max-w-3xl mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full bg-gradient-to-br from-orange-900/95 to-amber-800/95 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-20 h-20 text-white mx-auto mb-4 opacity-90" />
                    <p className="text-orange-100/80 text-lg">Clique para assistir o vídeo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                PROTOCOLO JEJUM
              </span>
              <br />
              <span className="text-[#FFF7E6]">COM CAFÉ PRETO</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-200 mb-8 leading-relaxed">
              O método revolucionário que está fazendo milhares de pessoas <br />
              <strong>eliminarem até 15kg em 30 dias</strong> tomando apenas café preto
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm md:text-lg">
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 md:w-6 md:h-6 text-green-400" />
                <span className="text-green-300">+50.000 pessoas transformadas</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-6 md:h-6 text-yellow-500 fill-current" />
                ))}
                <span className="ml-2 text-yellow-300">4.9/5 (2.847 avaliações)</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold text-lg md:text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto">
                QUERO COMEÇAR AGORA
                <ArrowRight className="ml-2 w-6 h-6" />
              </button>
            </div>

            {/* Timer */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-orange-300 mb-4 font-semibold">⚡ OFERTA ESPECIAL TERMINA EM:</p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="bg-orange-500 text-black font-bold text-2xl md:text-3xl px-3 py-2 rounded-lg">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs mt-1 text-gray-400">HORAS</div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 text-black font-bold text-2xl md:text-3xl px-3 py-2 rounded-lg">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs mt-1 text-gray-400">MIN</div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 text-black font-bold text-2xl md:text-3xl px-3 py-2 rounded-lg">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs mt-1 text-gray-400">SEG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Por que funciona?
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}, {testimonial.age} anos</p>
                  <p className="text-green-400 font-medium">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/20 to-yellow-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-white">Comece Sua</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Transformação Hoje!
            </span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-12 h-12 text-yellow-500 mr-4" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">GARANTIA TOTAL</p>
                  <p className="text-orange-300">30 dias para testar</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Protocolo completo passo a passo</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Cardápio detalhado para 30 dias</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Suporte exclusivo no WhatsApp</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Acesso vitalício ao conteúdo</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-gray-400 text-lg line-through">De R$ 297,00</p>
                <p className="text-4xl font-bold text-green-400">R$ 47,00</p>
                <p className="text-orange-300">Pagamento único</p>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                GARANTIR MINHA VAGA AGORA
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              <span>Garantia de 30 dias</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;