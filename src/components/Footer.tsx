import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <a href="tel:+551199999999" className="flex items-center hover:text-blue-400 transition-colors duration-200">
                <Phone className="h-5 w-5 mr-3" />
                <span>(11) 99999-9999</span>
              </a>
              <a href="mailto:contato@acampamentodecaestraining.com" className="flex items-center hover:text-blue-400 transition-colors duration-200">
                <Mail className="h-5 w-5 mr-3" />
                <span>contato@acampamentodecaestraining.com</span>
              </a>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Rua dos Pets, 123 - São Paulo, SP</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold mb-6">Horário de Funcionamento</h3>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span>7h às 19h</span>
              </p>
              <p className="flex justify-between">
                <span>Sábado:</span>
                <span>8h às 18h</span>
              </p>
              <p className="flex justify-between">
                <span>Domingo:</span>
                <span>9h às 16h</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold mb-6">Redes Sociais</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Acampamento de cães Training. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;