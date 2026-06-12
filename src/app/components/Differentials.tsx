import { Award, Headphones, MapPin, Package, Shield, Users } from 'lucide-react';

const differentials = [
  {
    icon: Award,
    stat: '+25 años',
    title: 'Experiencia Comprobada',
    description: 'Más de dos décadas liderando el mercado industrial boliviano'
  },
  {
    icon: Shield,
    stat: 'SKF',
    title: 'Licencia Exclusiva',
    description: 'Únicos autorizados para fabricar sellos SKF en Bolivia'
  },
  {
    icon: Package,
    stat: '10.000+',
    title: 'Productos en Stock',
    description: 'Amplio inventario para entregas inmediatas'
  },
  {
    icon: Headphones,
    stat: '24/7',
    title: 'Soporte Técnico',
    description: 'Asesoría especializada cuando la necesites'
  },
  {
    icon: MapPin,
    stat: '4',
    title: 'Sucursales',
    description: 'Cobertura nacional para estar cerca de ti'
  },
  {
    icon: Users,
    stat: '100%',
    title: 'Atención Personalizada',
    description: 'Soluciones a medida para cada cliente'
  }
];

export default function Differentials() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#EA0A2A] via-[#C10923] to-[#EA0A2A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
            <p className="text-white font-semibold text-sm">¿POR QUÉ ELEGIRNOS?</p>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Tu Socio Estratégico en Soluciones Industriales
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Compromiso, calidad y experiencia al servicio de tu industria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#EA0A2A]" size={28} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white mb-1">{item.stat}</p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <p className="text-white/90 ml-[72px]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
