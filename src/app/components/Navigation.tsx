import { ChevronDown, ChevronRight, Menu, Phone, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CCBlanco from "../assets/img/navigation/Logo_CC_Blanco.png";

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
    name: 'Bandas Transportadoras Pesadas',
    subcategories: ['Bandas Lisas', 'Bandas Nervadas', 'Bandas Verticales', 'Bandas con Bordes', 
                    'Bandas Corrugadas']
  },
  {
    name: 'Bandas Transportadoras Livianas',
    subcategories: ['Bandas Sinteticas', 'Bandas Modulares', 'Bandas de PTFE', 'Bandas Homogéneas', 'Bandas de Caucho Ligeras']
  },
  {
    name: 'Cadenas',
    subcategories: ['Cadenas de Rodillos de Precisión', 'Cadenas de Acero Inoxidable', 
                    'Cadenas de Transmisión', 'Cadenas con Transportador', 'Cadenas Agricolas']
  },
  {
    name: 'Poleas',
    subcategories: ['Poleas en V de Taladro Conico Y Cilindrico', 'Poleas Sincronas', 'Poleas MI-Lock']
  },
  {
    name: 'Piñones',
    subcategories: ['Piñónes de taladro cónico', 'Piñónes con agujero piloto', 
                    'Piñónes simples de taladro cónico para 2 cadenas', 'Piñónes simples con agujero piloto para 2 cadenas']
  },
  {
    name: 'Niples, Conexiones y Conectores Hidraúlicos',
    subcategories: ['Niples Hidráulicos', 'Niples de Cobre', 'Conexiones Rápidas', 'Adaptadores', 'Conectores Rápidos']
  },
  {
    name: 'Cilindros Hidraúlicos y Neumáticos',
    subcategories: ['Cilindros Neumáticos', 'Cilindros HTR (Tirantes)', 'Cilindros HCW (Patentado)']
  },
  {
    name: 'Cangilones',
    subcategories: ['Cangilones HD Stax (Heavy Duty)', 'Cangilones de Nylon', 'Cangilones de Poliuretano', 'Pernos', 'Grapas de Empalme Mécanico', 'Laterales(Sky Rubbers)']
  },
  {
    name: 'Cardanes',
    subcategories: ['Cardanes Agricolas']
  },
  {
    name: 'Cajas de Comandos',
    subcategories: ['Caja de Comando de 1 Palanca', 'Caja de Comandos de 2 Palancas',
                    'Caja de Comandos de 3 Palancas', 'Caja de Comandos de 4 Palancas',
                    'Caja de Comandos de 5 Palancas', 'Caja de Comandos de 6 Palancas']
  },
  {
    name: 'Abrazaderas',
    subcategories: ['Abrazaderas Galvanizadas', 'Abrazaderas Inoxidables', 'Abrazaderas de Tornillo', 'Abrazaderas de Alambre']
  },
  {
    name: 'Servicios',
    subcategories: ['Fabricación de Sellos SKF', 'Prensado de Mangueras', 'Reparacion de Cilindros',
                    'Fabricación de O-rings', 'Asesoria Tecnica Industrial',
                    'Empalmes y Montaje de Bandas Transportadoras Pesadas y Livianas']
  }
];

// Productos populares para sugerencias
const popularProducts = [
  'Correas en V Gates',
  'Rodamientos SKF',
  'Mangueras Hidráulicas',
  'Retenes SKF',
  'Cadenas de Rodillos',
  'Correas Dentadas Mitsuba'
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    navigate(`/products?search=${encodeURIComponent(suggestion)}`);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  // Cierra sugerencias al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = () => setShowSuggestions(false);
    if (showSuggestions) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showSuggestions]);

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

          <div className="hidden lg:flex items-center gap-6">
            {/* BUSCADOR */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Buscar productos..."
                  className="w-64 px-4 py-2 rounded-l-md border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-white text-[#EA0A2A] px-4 py-2 rounded-r-md hover:bg-gray-100 transition-colors"
                >
                  <Search size={20} />
                </button>
              </form>

              {/* Sugerencias */}
              {showSuggestions && (
                <div className="absolute top-full left-0 w-80 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {searchQuery.length === 0 ? (
                    <>
                      <p className="px-4 py-2 text-xs text-gray-500 font-semibold uppercase">Productos populares</p>
                      {popularProducts.map((product, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(product)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA0A2A] transition-colors"
                        >
                          {product}
                        </button>
                      ))}
                    </>
                  ) : (
                    <div className="px-4 py-2 text-sm text-gray-600">
                      Buscando: <span className="font-semibold text-[#EA0A2A]">"{searchQuery}"</span>
                    </div>
                  )}
                </div>
              )}
            </div>

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

              <div
                className={`absolute top-full left-0 w-[550px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 -translate-x-1/4 transition-all duration-300 max-h-[85vh] overflow-y-auto ${
                  showProducts ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="grid grid-cols-2 gap-4">
                  {productCategories.map((category, index) => (
                    <div key={index} className="relative">
                      <div 
                        className="flex items-center justify-between cursor-pointer group pb-2 border-b-2 border-[#EA0A2A]"
                        onClick={() => handleCategoryClick(index)}
                      >
                        <h3 className="font-bold text-[#EA0A2A] text-sm uppercase tracking-wide">
                          {category.name}
                        </h3>
                        <ChevronRight 
                          size={16} 
                          className={`text-[#EA0A2A] transition-transform duration-300 ${
                            activeCategory === index ? 'rotate-90' : 'group-hover:translate-x-1'
                          }`} 
                        />
                      </div>

                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeCategory === index ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                        }`}
                      >
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-3">
                          <ul className="space-y-1">
                            {category.subcategories.map((sub, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href={`/products?category=${encodeURIComponent(category.name)}&sub=${encodeURIComponent(sub)}`}
                                  className="text-gray-700 hover:text-[#EA0A2A] text-sm block py-1.5 px-3 rounded hover:bg-white transition-all"
                                >
                                  {sub}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a href="#servicios" className="text-white hover:text-gray-200 transition-colors">Servicios</a>
            <a href="#industrias" className="text-white hover:text-gray-200 transition-colors">Industrias</a>
            <a href="#contacto" className="text-white hover:text-gray-200 transition-colors">Contacto</a>
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

      {isOpen && (
        <div className="lg:hidden bg-[#C10923] border-t border-red-800">
          <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
            <form onSubmit={handleSearch} className="flex items-center mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="flex-1 px-4 py-2 rounded-l-md border-0 focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-[#EA0A2A] px-4 py-2 rounded-r-md"
              >
                <Search size={20} />
              </button>
            </form>

            <div className="space-y-2">
              <p className="text-white font-bold text-sm uppercase">Productos</p>
              {productCategories.map((category, index) => (
                <div key={index} className="pl-4 space-y-1">
                  <p className="text-red-100 font-semibold text-sm">{category.name}</p>
                  {category.subcategories.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={`/products?category=${encodeURIComponent(category.name)}&sub=${encodeURIComponent(sub)}`}
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
