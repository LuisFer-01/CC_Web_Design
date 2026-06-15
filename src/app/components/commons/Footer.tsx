import { Clock, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  // Categorías principales de productos
  const productCategories = [
    { name: 'Correas', link: '/products/correas' },
    { name: 'Mangueras', link: '/products/mangueras' },
    { name: 'Rodamientos', link: '/products/rodamientos' },
    { name: 'Retenes y Sellos', link: '/products/retenes-sellos-orings' },
    { name: 'Bandas Transportadoras', link: '/products/bandas-transportadoras' },
    { name: 'Cadenas', link: '/products/cadenas' },
    { name: 'Poleas', link: '/products/poleas' }
  ];

  // Aplicaciones/Industrias
  const applications = [
    { name: 'Industria Alimenticia', link: '/applications/industria-alimenticia' },
    { name: 'Agroindustrial', link: '/applications/agroindustrial' },
    { name: 'Industria Minera', link: '/applications/industria-minera' },
    { name: 'Industria Metalúrgica', link: '/applications/industria-metalurgica' },
    { name: 'Petróleo y Gas', link: '/applications/petroleo-gas' },
    { name: 'Manufactura', link: '/applications/manufactura' },
    { name: 'Construcción', link: '/applications/construccion' },
    { name: 'Transporte', link: '/applications/transporte' },
    { name: 'Logística', link: '/applications/logistica' }
  ];

  // Servicios
  const services = [
    { name: 'Fabricación de Sellos SKF', link: '/services/fabricacion-sellos-sKF' },
    { name: 'Prensado de Mangueras', link: '/services/prensado-mangueras' },
    { name: 'Reparación de Cilindros', link: '/services/reparacion-cilindros' },
    { name: 'Fabricación de O-rings', link: '/services/fabricacion-orings' },
    { name: 'Asesoría Técnica Industrial', link: '/services/asesoria-tecnica' },
    { name: 'Empalmes y Montaje de Bandas', link: '/services/empalmes-montaje' }
  ];

  // Sucursales
  const sucursales = [
    {
      name: 'Oficina Central',
      address: 'Av. Grigotas 2do anillo, Santa Cruz',
      phone: '+591 7 730-6576',
      hours: 'Lun-Vie: 8:00-18:00 | Sáb: 8:00-13:00'
    },
    {
      name: 'Sucursal Banzer',
      address: 'Av. Cristo Redentor, Santa Cruz',
      phone: '+591 7 500-8216',
      hours: 'Lun-Vie: 8:00-18:00 | Sáb: 8:00-13:00'
    },
    {
      name: 'Sucursal Pampa de la Isla',
      address: 'Zona Industrial Pampa de la Isla',
      phone: '+591 7 416-2510',
      hours: 'Lun-Vie: 8:00-18:00 | Sáb: 8:00-13:00'
    },
    {
      name: 'Sucursal Montero',
      address: 'Av. Hernando Siles, Montero',
      phone: '+591 7 500-8215',
      hours: 'Lun-Vie: 8:00-18:00 | Sáb: 8:00-13:00'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sección principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* COLUMNA 1: Logo y descripción */}
          <div className="lg:col-span-1">
            <div 
              className="flex items-center gap-3 cursor-pointer mb-4"
              onClick={handleLogoClick}
            >
              <h3 className="text-2xl font-bold tracking-tight">CORREAS CENTER</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Líderes en soluciones industriales, hidráulicas, neumáticas y transmisión de potencia en Bolivia. 
              Más de 25 años brindando calidad y servicio técnico especializado.
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.facebook.com/CorreasCenterLtda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a 
                href="https://www.instagram.com/correascenterltda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-black transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>

            {/* Badge de licencia */}
            <div className="inline-flex items-center gap-2 bg-[#EA0A2A]/20 border border-[#EA0A2A]/30 rounded-lg px-3 py-2">
              <div className="w-2 h-2 bg-[#EA0A2A] rounded-full animate-pulse"></div>
              <span className="text-xs text-white font-semibold">Fabricante Autorizado SKF Bolivia</span>
            </div>
          </div>

          {/* COLUMNA 2: Productos */}
          <div className="lg:col-span-1">
            <h4 className="text-base font-bold mb-4 text-white flex items-center gap-2">
              Productos
            </h4>
            <ul className="space-y-2 text-sm">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.link} 
                    className="text-gray-400 hover:text-[#EA0A2A] transition-colors hover:translate-x-1 inline-block"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/products" 
                  className="text-[#EA0A2A] font-semibold hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Ver todos →
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Aplicaciones y Servicios */}
          <div>
            <h4 className="text-base font-bold mb-4 text-white flex items-center gap-2">
              Aplicaciones
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              {applications.slice(0, 5).map((app, index) => (
                <li key={index}>
                  <a 
                    href={app.link} 
                    className="text-gray-400 hover:text-[#EA0A2A] transition-colors hover:translate-x-1 inline-block"
                  >
                    {app.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/applications" 
                  className="text-[#EA0A2A] font-semibold hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Ver todas →
                </a>
              </li>
            </ul>

            <h4 className="text-base font-bold mb-4 text-white flex items-center gap-2">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.link} 
                    className="text-gray-400 hover:text-[#EA0A2A] transition-colors hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/services" 
                  className="text-[#EA0A2A] font-semibold hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Ver todos →
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: Sucursales */}
          <div>
            <h4 className="text-base font-bold mb-4 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#EA0A2A]"></span>
              Nuestras Sucursales
            </h4>
            <div className="space-y-4">
              {sucursales.map((sucursal, index) => (
                <div key={index} className="border-l-2 border-[#EA0A2A]/30 pl-3 hover:border-[#EA0A2A] transition-colors">
                  <p className="text-white text-sm font-semibold mb-1">{sucursal.name}</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <div className="flex items-start gap-2">
                      <MapPin size={12} className="flex-shrink-0 mt-0.5 text-[#EA0A2A]" />
                      <span>{sucursal.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={12} className="flex-shrink-0 text-[#EA0A2A]" />
                      <a href={`tel:${sucursal.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                        {sucursal.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={12} className="flex-shrink-0 mt-0.5 text-[#EA0A2A]" />
                      <span>{sucursal.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="font-semibold text-white">CORREAS CENTER LTDA.</span> Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#EA0A2A] transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-[#EA0A2A] transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-[#EA0A2A] transition-colors">Mapa del Sitio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}