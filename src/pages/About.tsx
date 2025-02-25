import React from 'react';
import { Shield, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mission and Vision */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8">Sobre Nós</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde 2015, o Acampamento de Cães tem sido referência em cuidados com pets,
            oferecendo serviços de alta qualidade com amor e dedicação.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Missão</h3>
            <p className="text-gray-600">
              Proporcionar o melhor cuidado e desenvolvimento para os pets,
              garantindo sua felicidade e bem-estar.
            </p>
          </div>

          <div className="text-center">
            <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visão</h3>
            <p className="text-gray-600">
              Ser reconhecido como o melhor centro de cuidados para pets,
              inovando constantemente em nossos serviços.
            </p>
          </div>

          <div className="text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Valores</h3>
            <p className="text-gray-600">
              Amor pelos animais, profissionalismo, ética e compromisso
              com a excelência em tudo que fazemos.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Equipe member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Maria Silva</h3>
              <p className="text-gray-600">Treinadora Principal</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Equipe member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">João Santos</h3>
              <p className="text-gray-600">Especialista em Comportamento Animal</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Equipe member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Ana Oliveira</h3>
              <p className="text-gray-600">Coordenadora de Daycare</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;