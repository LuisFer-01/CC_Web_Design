import { Droplet, Factory, HardHat, PackageOpen, Pickaxe, Truck, Wheat } from 'lucide-react';

const industries = [
  { icon: HardHat, name: 'Industria Alimenticia', description: 'Soluciones para procesamiento alimenticio' },
  { icon: Wheat, name: 'Agroindustria', description: 'Soluciones para procesamiento agrícola' },
  { icon: Pickaxe, name: 'Minería', description: 'Equipamiento para operaciones mineras' },
  { icon: Droplet, name: 'Petróleo y Gas', description: 'Sistemas hidráulicos especializados' },
  { icon: Factory, name: 'Manufactura', description: 'Transmisión de potencia industrial' },
  { icon: HardHat, name: 'Construcción', description: 'Componentes para maquinaria pesada' },
  { icon: Truck, name: 'Transporte', description: 'Repuestos para vehículos pesados' },
  { icon: PackageOpen, name: 'Logística', description: 'Sistemas de transporte y manejo' }
];

export default function Industries() {
  return (
    <section id="industrias" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EA0A2A]/10 rounded-full px-4 py-2 mb-4">
            <p className="text-[#EA0A2A] font-semibold text-sm">SECTORES QUE ATENDEMOS</p>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluciones para Múltiples Industrias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencia comprobada en los sectores más exigentes de Bolivia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#EA0A2A] hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#EA0A2A] to-[#C10923] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#EA0A2A] transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
