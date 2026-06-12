import { Mail, MapPin, Phone } from 'lucide-react';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">CORREAS CENTER</h3>
            <p className="text-gray-400 mb-6">
              Líderes en soluciones industriales, hidráulicas, neumáticas y transmisión de potencia en Bolivia.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/CorreasCenterLtda" target="_blank" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EA0A2A] transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/correascenterltda?igsh=MW84dHFtbHoybnBoeA==" target="_blank" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EA0A2A] transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#productos" className="hover:text-[#EA0A2A] transition-colors">Correas</a></li>
              <li><a href="#productos" className="hover:text-[#EA0A2A] transition-colors">Mangueras</a></li>
              <li><a href="#productos" className="hover:text-[#EA0A2A] transition-colors">Rodamientos</a></li>
              <li><a href="#productos" className="hover:text-[#EA0A2A] transition-colors">Retenes y Sellos</a></li>
              <li><a href="#productos" className="hover:text-[#EA0A2A] transition-colors">Bandas Transportadoras</a></li>
              <li><a href="#productos" className="hover:text-[#EA0A2A] transition-colors">Cadenas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-[#EA0A2A] transition-colors">Fabricación de Sellos SKF</a></li>
              <li><a href="#servicios" className="hover:text-[#EA0A2A] transition-colors">Prensado de Mangueras</a></li>
              <li><a href="#servicios" className="hover:text-[#EA0A2A] transition-colors">Reparación de Cilindros</a></li>
              <li><a href="#servicios" className="hover:text-[#EA0A2A] transition-colors">Asesoría Técnica</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <span>Av. Grigotas 2do anillo, Santa Cruz de la Sierra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0" size={18} />
                <a href="tel:+59177306576" className="hover:text-[#EA0A2A] transition-colors">
                  +591 7 730-6576
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0" size={18} />
                <a href="mailto:ventas@correascenter.com" className="hover:text-[#EA0A2A] transition-colors">
                  ventas@correascenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} CORREAS CENTER LTDA. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#EA0A2A] transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-[#EA0A2A] transition-colors">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
