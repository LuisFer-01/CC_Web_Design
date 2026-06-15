import {
    ArrowRight,
    Box,
    Circle,
    CircleDot,
    Cog,
    Cylinder,
    Droplets,
    Grip,
    Layers,
    Link2,
    Settings,
    Shield,
    Wrench,
    Zap
} from 'lucide-react';

interface CategoryGridProps {
  onCategoryClick: (categoryName: string) => void;
}

const categories = [
  {
    name: 'Correas',
    description: 'Transmisión de potencia industrial',
    icon: CircleDot,
    color: 'from-red-500 to-red-700',
    subcategories: ['Correas en V', 'Correas Dentadas', 'Correas Variadoras', 'Correas Acanaladas']
  },
  {
    name: 'Mangueras',
    description: 'Sistemas hidráulicos y neumáticos',
    icon: Droplets,
    color: 'from-blue-500 to-blue-700',
    subcategories: ['Hidráulicas', 'Succión y Descarga', 'Multiusos', 'Neumáticas']
  },
  {
    name: 'Rodamientos',
    description: 'Precisión y durabilidad',
    icon: Cog,
    color: 'from-gray-600 to-gray-800',
    subcategories: ['Rodillos', 'Bolas', 'Agujas', 'Axiales', 'Lineales']
  },
  {
    name: 'Retenes, Sellos y O-rings',
    description: 'Sellado industrial profesional',
    icon: Shield,
    color: 'from-purple-500 to-purple-700',
    subcategories: ['Retenes', 'Sellos Mecánicos', 'O-Rings', 'Sellos Hidráulicos']
  },
  {
    name: 'Bandas Transportadoras',
    description: 'Transporte de materiales',
    icon: ArrowRight,
    color: 'from-orange-500 to-orange-700',
    subcategories: ['Pesadas', 'Livianas']
  },
  {
    name: 'Cadenas',
    description: 'Transmisión y transporte',
    icon: Link2,
    color: 'from-yellow-600 to-yellow-800',
    subcategories: ['Rodillos', 'Acero Inoxidable', 'Transmisión', 'Agrícolas']
  },
  {
    name: 'Poleas',
    description: 'Optimización de movimiento',
    icon: Settings,
    color: 'from-teal-500 to-teal-700',
    subcategories: ['Taladro Cónico', 'Sincrónicas', 'MI-Lock']
  },
  {
    name: 'Piñones',
    description: 'Precisión en transmisión',
    icon: Circle,
    color: 'from-indigo-500 to-indigo-700',
    subcategories: ['Taladro Cónico', 'Agujero Piloto']
  },
  {
    name: 'Niples y Conexiones',
    description: 'Conectores hidráulicos y neumáticos',
    icon: Zap,
    color: 'from-cyan-500 to-cyan-700',
    subcategories: ['Hidráulicos', 'Cobre', 'Conexiones Rápidas', 'Adaptadores']
  },
  {
    name: 'Cilindros',
    description: 'Componentes neumáticos e hidráulicos',
    icon: Cylinder,
    color: 'from-pink-500 to-pink-700',
    subcategories: ['Neumáticos', 'HTR', 'HCW Patentado']
  },
  {
    name: 'Cangilones',
    description: 'Elevación y transporte vertical',
    icon: Box,
    color: 'from-lime-600 to-lime-800',
    subcategories: ['HD Stax', 'Nylon', 'Poliuretano', 'Pernos']
  },
  {
    name: 'Cardanes',
    description: 'Transmisión de potencia',
    icon: Wrench,
    color: 'from-amber-600 to-amber-800',
    subcategories: ['Agrícolas']
  },
  {
    name: 'Cajas de Comandos',
    description: 'Control hidráulico',
    icon: Layers,
    color: 'from-violet-500 to-violet-700',
    subcategories: ['1 a 6 Palancas']
  },
  {
    name: 'Abrazaderas',
    description: 'Sujeción y fijación',
    icon: Grip,
    color: 'from-emerald-500 to-emerald-700',
    subcategories: ['Galvanizadas', 'Inoxidables', 'Tornillo', 'Alambre']
  }
];

export default function CategoryGrid({ onCategoryClick }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category, index) => {
        const IconComponent = category.icon;
        
        return (
          <div
            key={index}
            onClick={() => onCategoryClick(category.name)}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 hover:border-[#EA0A2A] hover:-translate-y-2"
          >
            {/* Header con gradiente */}
            <div className={`relative h-32 bg-gradient-to-br ${category.color} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              <IconComponent 
                size={64} 
                className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              
              {/* Badge de subcategorías */}
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                {category.subcategories.length} sub
              </div>
            </div>

            {/* Contenido */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EA0A2A] transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {category.description}
              </p>

              {/* Subcategorías preview */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {category.subcategories.slice(0, 3).map((sub, subIndex) => (
                  <span
                    key={subIndex}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded group-hover:bg-[#EA0A2A]/10 group-hover:text-[#EA0A2A] transition-colors"
                  >
                    {sub}
                  </span>
                ))}
                {category.subcategories.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                    +{category.subcategories.length - 3}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm font-semibold text-[#EA0A2A] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Ver productos
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}