import { Droplets, MessageCircle, Settings, Shield, Wrench } from 'lucide-react';
import FabricacionImg from '../assets/img/services/Fabricacion_SKF.jpeg';
import MangueraImg from '../assets/img/services/Manguera_Prensada.jpeg';
import AsesoriaImg from '../assets/img/services/Servicio_Tecnico.png';

const services = [
  {
    icon: Shield,
    title: 'Fabricación de Sellos SKF',
    description: 'Fabricación especializada de sellos y retenes con licencia exclusiva SKF para Bolivia',
    image: FabricacionImg
  },
  {
    icon: Droplets,
    title: 'Prensado de Mangueras',
    description: 'Prensado profesional de mangueras con equipos de última generación de alta preci000sión',
    image: MangueraImg
  },
  {
    icon: Settings,
    title: 'Reparación de Cilindros',
    description: 'Reparación y mantenimiento especializado de cilindros hidráulicos y neumáticos',
    image: 'https://motorcisa.com.ar/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-29-at-14.45.24-7-scaled.jpeg'
  },
  {
    icon: Wrench,
    title: 'Fabricación de O-rings',
    description: 'Producción a medida de O-rings para equipos industriales especiales',
    image: 'https://oring.mectemak.com/wp-content/uploads/2023/03/medicor-rotated.jpg'
  },
  {
    icon: MessageCircle,
    title: 'Asesoría Técnica Industrial',
    description: 'Consultoría especializada para optimizar sistemas de transmisión, hidráulica y neumática',
    image: AsesoriaImg
  },
  {
    icon: MessageCircle,
    title: 'Empalmes y Montaje de Bandas Transportadoras Pesadas  y Livianas',
    description: 'Servicio experto en montaje, tensado y empalmes de precisión para garantizar la operatividad continua de sus bandas transportadoras.',
    image: 'https://spinozziargentina.com/wp-content/uploads/2023/08/image31.jpg'
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EA0A2A]/20 rounded-full px-4 py-2 mb-4">
            <p className="text-[#EA0A2A] font-semibold text-sm">NUESTROS SERVICIOS</p>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Servicios Técnicos Especializados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones integrales con soporte técnico experto para mantener tu operación funcionando
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[#EA0A2A] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-[#EA0A2A] rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
