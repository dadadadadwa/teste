import React, { useEffect } from 'react';
import { Play, CheckCircle, Star, Users, Clock, Shield } from 'lucide-react';

declare global {
  interface Window {
    _wq: any[];
    Wistia: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Wistia queue
    window._wq = window._wq || [];

    // Load Wistia script
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script.async = true;
    document.head.appendChild(script);

    // Configure Wistia player when it loads
    window._wq.push({
      id: 'your-video-id', // Substitua pelo ID real do seu vídeo
      onReady: function(video: any) {
        console.log('Wistia player ready');
        
        // Configurações do player
        video.fit();
        video.videoFoam(true);
        
        // Event listeners
        video.bind('play', function() {
          console.log('Video started playing');
          // Track play event
          if (typeof window.fbq !== 'undefined') {
            window.fbq('track', 'ViewContent', {
              content_type: 'video',
              content_name: 'VSL Protocolo Jejum'
            });
          }
        });

        video.bind('end', function() {
          console.log('Video ended');
          // Show CTA or redirect
          const ctaSection = document.getElementById('cta-section');
          if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    });

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="wistia"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleCTAClick = () => {
    // Track conversion
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'InitiateCheckout');
    }
    
    // Redirect to checkout
    window.open('https://pay.kiwify.com.br/seu-link-de-checkout', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with VSL */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-[5%] w-72 h-72 bg-orange-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-yellow-500/10 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 z-10 transition-all duration-1000 opacity-100 translate-y-0">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
            {/* Video Section */}
            <div className="w-full max-w-3xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full bg-gray-900">
                  {/* Wistia Player Container */}
                  <div 
                    className="wistia_responsive_padding" 
                    style={{ padding: '56.25% 0 0 0', position: 'relative' }}
                  >
                    <div 
                      className="wistia_responsive_wrapper" 
                      style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
                    >
                      <div 
                        className="wistia_embed wistia_async_your-video-id videoFoam=true"
                        style={{ height: '100%', position: 'relative', width: '100%' }}
                      >
                        <div 
                          className="wistia_swatch" 
                          style={{
                            height: '100%',
                            left: 0,
                            opacity: 0,
                            overflow: 'hidden',
                            position: 'absolute',
                            top: 0,
                            transition: 'opacity 200ms',
                            width: '100%'
                          }}
                        >
                          <img 
                            src="https://fast.wistia.com/embed/medias/your-video-id/swatch" 
                            style={{
                              filter: 'blur(5px)',
                              height: '100%',
                              objectFit: 'contain',
                              width: '100%'
                            }} 
                            alt="Protocolo Jejum com Café Preto"
                            aria-hidden="true" 
                            onLoad={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.parentElement!.style.opacity = '1';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Custom Play Button Overlay (optional) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Title */}
              <div className="text-center mt-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent leading-tight">
                  PROTOCOLO JEJUM COM CAFÉ PRETO
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Descubra o método revolucionário que está transformando vidas através do jejum intermitente potencializado
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">+50.000</div>
              <div className="text-gray-400">Pessoas Transformadas</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">4.9/5</div>
              <div className="text-gray-400">Avaliação dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
              <div className="text-gray-400">Garantia de Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            O Que Você Vai <span className="text-orange-500">Descobrir</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12 text-orange-500" />,
                title: "Jejum Otimizado",
                description: "Aprenda a técnica exata para maximizar os benefícios do jejum intermitente"
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-green-500" />,
                title: "Resultados Comprovados",
                description: "Método testado e aprovado por milhares de pessoas ao redor do mundo"
              },
              {
                icon: <Star className="w-12 h-12 text-yellow-500" />,
                title: "Transformação Real",
                description: "Veja mudanças significativas em sua saúde e bem-estar em poucas semanas"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-colors duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
            TRANSFORME SUA VIDA HOJE!
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-black/80 max-w-3xl mx-auto">
            Não perca mais tempo. Comece sua jornada de transformação agora mesmo com o Protocolo Jejum com Café Preto.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="text-lg text-black/70 line-through">De R$ 297,00</div>
            <div className="text-5xl md:text-6xl font-black text-black">
              R$ 97,00
            </div>
            <div className="text-lg text-black/80">ou 12x de R$ 9,70</div>
          </div>

          <button
            onClick={handleCTAClick}
            className="bg-black text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-gray-800 transition-colors duration-300 shadow-2xl hover:shadow-xl transform hover:scale-105"
          >
            QUERO TRANSFORMAR MINHA VIDA AGORA!
          </button>

          <div className="mt-6 flex items-center justify-center space-x-4 text-black/70">
            <Shield className="w-5 h-5" />
            <span>Garantia de 7 dias</span>
            <span>•</span>
            <span>Acesso imediato</span>
            <span>•</span>
            <span>Suporte completo</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Protocolo Jejum com Café Preto. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;