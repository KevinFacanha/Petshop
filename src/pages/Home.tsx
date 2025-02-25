import React from 'react';
import { Heart, Sun, GraduationCap, ArrowRight, Star, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-6xl font-bold text-white mb-6 font-display leading-tight animate-slide-up">
              Um Lugar Especial para Seu Melhor Amigo
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-slide-up animate-delay-200">
              Cuidado profissional, amor e diversão para seu cachorro em um ambiente
              seguro e acolhedor.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-300">
              <Link 
                to="/contato" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg 
                         hover:bg-blue-700 transition-all duration-300 
                         transform hover:scale-105 hover:shadow-lg 
                         font-semibold flex items-center"
              >
                Agende uma Visita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/servicos" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 
                         rounded-lg hover:bg-white/20 transition-all duration-300 
                         transform hover:scale-105 hover:shadow-lg 
                         font-semibold flex items-center"
              >
                Conheça Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title animate-fade-in">Nossos Serviços</h2>
          <p className="section-subtitle animate-fade-in animate-delay-100">
            Oferecemos uma variedade de serviços personalizados para atender às
            necessidades do seu pet
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Hotel para Cães',
                description: 'Hospedagem com todo conforto e cuidado que seu pet merece.',
                features: ['Suítes climatizadas', 'Monitoramento 24h', 'Área de lazer']
              },
              {
                icon: Sun,
                title: 'Daycare',
                description: 'Diversão e socialização durante o dia todo.',
                features: ['Atividades monitoradas', 'Socialização', 'Exercícios']
              },
              {
                icon: GraduationCap,
                title: 'Treinamento',
                description: 'Programas personalizados de treinamento e educação.',
                features: ['Obediência básica', 'Correção comportamental', 'Socialização']
              }
            ].map((service, index) => (
              <div key={index} className={`card group animate-scale-in animate-delay-${(index + 1) * 100}`}>
                <service.icon className="h-12 w-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title animate-fade-in">Por Que Nos Escolher?</h2>
          <p className="section-subtitle animate-fade-in animate-delay-100">
            Comprometidos com a excelência no cuidado com seu pet
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Experiência',
                description: 'Mais de 8 anos de experiência no cuidado com pets'
              },
              {
                icon: Users,
                title: 'Equipe Qualificada',
                description: 'Profissionais treinados e apaixonados por animais'
              },
              {
                icon: Shield,
                title: 'Ambiente Seguro',
                description: 'Instalações modernas e monitoramento 24 horas'
              }
            ].map((feature, index) => (
              <div key={index} className={`card text-center animate-scale-in animate-delay-${(index + 1) * 100}`}>
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6 font-display animate-slide-up">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-100">
            Entre em contato conosco e agende uma visita para conhecer nossas instalações
            e nossa equipe.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 
                     rounded-lg hover:bg-blue-50 transition-all duration-300 
                     transform hover:scale-105 hover:shadow-lg font-semibold
                     animate-scale-in animate-delay-200"
          >
            Fale Conosco
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;