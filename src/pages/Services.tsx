import React, { useState } from 'react';
import { Home, Sun, GraduationCap, Check, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      Icon: Home,
      title: "Hotel para Cães",
      description: "Oferecemos hospedagem de primeira classe para seu pet, com monitoramento 24 horas, áreas de lazer e todo conforto necessário.",
      features: [
        "Suítes climatizadas individuais",
        "Monitoramento 24h por câmeras",
        "5 passeios diários",
        "Área de lazer exclusiva",
        "Alimentação personalizada",
        "Relatório diário com fotos"
      ],
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80",
      price: "A partir de R$ 80/dia"
    },
    {
      id: 1,
      Icon: Sun,
      title: "Daycare",
      description: "Um dia cheio de atividades, socialização e diversão para seu pet enquanto você trabalha ou viaja.",
      features: [
        "Atividades supervisionadas",
        "Grupos por tamanho e temperamento",
        "Exercícios físicos programados",
        "Períodos de descanso",
        "Socialização monitorada",
        "Relatório diário de atividades"
      ],
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80",
      price: "A partir de R$ 60/dia"
    },
    {
      id: 2,
      Icon: GraduationCap,
      title: "Treinamento",
      description: "Programas de treinamento personalizados para desenvolver as habilidades do seu pet e fortalecer o vínculo entre vocês.",
      features: [
        "Avaliação comportamental",
        "Plano personalizado",
        "Obediência básica e avançada",
        "Correção comportamental",
        "Socialização guiada",
        "Acompanhamento pós-treino"
      ],
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80",
      price: "Consulte valores"
    }
  ];

  const ActiveService = services[activeService];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="section-title">Nossos Serviços</h1>
        <p className="section-subtitle">
          Conheça nossos serviços especializados para o bem-estar e desenvolvimento do seu pet
        </p>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 
                ${activeService === service.id 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-blue-50'}`}
            >
              <div className="flex items-center space-x-2">
                <service.Icon className="h-5 w-5" />
                <span>{service.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Service Information */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl">
              <ActiveService.Icon className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold mb-4">{ActiveService.title}</h2>
              <p className="text-gray-600 mb-6">{ActiveService.description}</p>
              
              <div className="space-y-4 mb-8">
                {ActiveService.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="text-blue-600 font-semibold">{ActiveService.price}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>4.9/5 de avaliação</span>
                </div>
              </div>

              <Link
                to="/contato"
                className="btn-primary w-full flex items-center justify-center"
              >
                Agendar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Service Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
            <img
              src={ActiveService.image}
              alt={ActiveService.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center bg-blue-600 rounded-2xl p-12 transform hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para proporcionar o melhor para seu pet?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e agende uma visita para conhecer nossas instalações
            e discutir o melhor plano para seu companheiro.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg 
                     hover:bg-blue-50 transition duration-300 transform hover:scale-105 
                     shadow-lg hover:shadow-xl font-semibold"
          >
            Agendar Visita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;