import { ChevronDown, ChevronRight, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import CCBlanco from "../assets/img/navigation/Logo_CC_Blanco.png";
//import CCNegro from "../assets/img/navigation/Logo_CC_Negro.png";

const productCategories = [
  {
    name: 'Correas',
    subcategories: ['Correas en V', 'Correas Dentadas', 'Correas Variadoras', 'Correas Acanaladas']
  },
  {
    name: 'Mangueras',
    subcategories: ['Mangueras Hidráulicas', 'Mangueras de Succión y de Descarga', 
                    'Mangueras Multiusos', 'Mangueras Neumaticas']
  },
  {
    name: 'Rodamientos',
    subcategories: ['Rodamientos de Rodillos', 'Rodamientos de Bolas', 'Rodamientos de Agujas', 
                    'Rodamientos Axiales', 'Rodamientos Lineales', 'Rodamientos Esfericos', 
                    'Rodamientos Cilindricos', 'Rodamientos de Contacto Angular', 'Chumaceras']
  },
  {
    name: 'Retenes, Sellos y O-rings',
    subcategories: ['Retenes', 'Sellos Mecánicos', 'O-Rings', 'Sellos Hidráulicos', 
                    'Sellos Neumáticos']
  },
  {
    name: 'Bandas Transportadoras',
    subcategories: ['Bandas Lisas', 'Bandas Nervadas', 'Bandas Verticales', 'Bandas con Bordes', 
                    'Bandas Corrugadas', 'Bandas Alimentarias']
  },
  {
    name: 'Cadenas',
    subcategories: ['Cadenas de Rodillos de Precisión', 'Cadenas de Acero Inoxidables', 
                    'Cadenas de Transmisión', 'Cadenas con Transportador', 'Cadenas Agricolas']
  },
  {
    name: 'Poleas',
    subcategories: ['Poleas en V de Taladro Conico Y Cilindrico', 'Poleas  Sincronas', 'Poleas MI-Lock']
  },
  {
    name: 'Piñones',
    subcategories: ['Piñónes de taladro cónico ', 'Piñónes con agujero piloto', 
                    'Piñónes simples de taladro cónico para 2 cadenas', 'Piñónes simples con agujero piloto para 2 cadenas']
  },
  {
    name: 'Niples, Conexiones y Conectores Neumáticos',
    subcategories: ['Niples Hidráulicos', 'Niples de Cobre', 'Conexiones Rápidas', 'Adaptadores', 'Conectores Rápidos']
  },
  {
    name: 'Cilindros',
    subcategories: ['Cilindros Neumáticos', 'Cilindros HTR (Tirantes)', 'Cilindros HCW (Patentado)']
  },
  {
    name: 'Cangilones',
    subcategories: ['Cangilones HD Stax (Heavy Duty)', 'Cangilones de Nylon', 'Cangilones de Poliuretano', 'Pernos', 'Grapas de Empalme Mécanico', 'Laterales(Sky Rubbers)']
  },
  {
    name: 'Cardanes y Cajas de Comandos',
    subcategories: ['Cardanes Agricolas', 'Caja de Comando de 1 Palanca', 'Caja de Comandos de 2 Palancas',
                    'Caja de Comandos de 3 Palancas', 'Caja de Comandos de 4 Palancas',
                    'Caja de Comandos de 5 Palancas', 'Caja de Comandos de 6 Palancas']
  },
  {
    name: 'Abrazaderas',
    subcategories: ['Abrazaderas Galvanizadas', 'Abrazaderas Inoxidables', 'Abrazaderas de Tornillo', 'Abrazaderas de Alambre']
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#EA0A2A] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="relative h-19 overflow-hidden">
              <img 
                src={CCBlanco}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold tracking-tight">CORREAS CENTER</h1>
              <p className="text-xs text-red-100">Solución Confiable</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {/* MEGA MENÚ PRODUCTOS */}
            <div
              className="relative"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => {
                setShowProducts(false);
                setActiveCategory(null);
              }}
            >
              <button className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors py-2">
                Productos
                <ChevronDown size={18} className={`transition-transform duration-200 ${showProducts ? 'rotate-180' : ''}`} />
              </button>

              {/* Contenedor del mega menú CON SCROLL */}
              <div
                className={`absolute top-full left-0 w-[900px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 -translate-x-1/4 transition-all duration-200 max-h-[85vh] overflow-y-auto ${
                  showProducts ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="grid grid-cols-2 gap-6">
                  {productCategories.map((category, index) => (
                    <div 
                      key={index} 
                      className="relative"
                      onMouseEnter={() => setActiveCategory(index)}
                      onMouseLeave={() => setActiveCategory(null)}
                    >
                      {/* Categoría principal */}
                      <div className="flex items-center justify-between cursor-pointer group">
                        <h3 className="font-bold text-[#EA0A2A] text-sm uppercase tracking-wide border-b-2 border-[#EA0A2A] pb-2">
                          {category.name}
                        </h3>
                        <ChevronRight size={16} className="text-[#EA0A2A] transition-transform group-hover:translate-x-1" />
                      </div>

                      {/* Subcategorías - Se muestran solo al hacer hover en esta categoría */}
                      <div 
                        className={`absolute left-0 top-full mt-2 w-64 bg-gray-50 rounded-lg shadow-lg border border-gray-200 p-4 z-10 transition-all duration-200 ${
                          activeCategory === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                        }`}
                      >
                        <ul className="space-y-2">
                          {category.subcategories.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={`#productos?category=${encodeURIComponent(category.name)}&sub=${encodeURIComponent(sub)}`}
                                className="text-gray-700 hover:text-[#EA0A2A] text-sm block py-2 px-3 rounded hover:bg-white transition-all"
                              >
                                {sub}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a href="#servicios" className="text-white hover:text-gray-200 transition-colors">Servicios</a>
            <a href="#industrias" className="text-white hover:text-gray-200 transition-colors">Industrias</a>
            <a href="#contacto" className="text-white hover:text-gray-200 transition-colors">Contacto</a>
            <a href="tel:+59133333333" className="flex items-center gap-2 bg-white text-[#EA0A2A] px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium">
              <Phone size={18} />
              Llamar
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="lg:hidden bg-[#C10923] border-t border-red-800">
          <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
            <div className="space-y-2">
              <p className="text-white font-bold text-sm uppercase">Productos</p>
              {productCategories.map((category, index) => (
                <div key={index} className="pl-4 space-y-1">
                  <p className="text-red-100 font-semibold text-sm">{category.name}</p>
                  {category.subcategories.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={`#productos?category=${encodeURIComponent(category.name)}&sub=${encodeURIComponent(sub)}`}
                      className="block text-white/80 hover:text-white py-1 text-sm pl-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <a href="#servicios" className="block text-white hover:text-gray-200 py-2" onClick={() => setIsOpen(false)}>Servicios</a>
            <a href="#industrias" className="block text-white hover:text-gray-200 py-2" onClick={() => setIsOpen(false)}>Industrias</a>
            <a href="#contacto" className="block text-white hover:text-gray-200 py-2" onClick={() => setIsOpen(false)}>Contacto</a>
            <a href="tel:+59133333333" className="flex items-center gap-2 bg-white text-[#EA0A2A] px-4 py-3 rounded-md justify-center font-medium">
              <Phone size={18} />
              Llamar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}