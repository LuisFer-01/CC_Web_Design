import { ChevronDown, ChevronRight, Menu, Phone, Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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

const popularProducts = [
  'Correas',
  'Rodamientos',
  'Mangueras',
  'Retenes',
  'Cadenas',
  'Poleas'
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCategoryClick = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleMobileCategoryClick = (index: number) => {
    setMobileActiveCategory(mobileActiveCategory === index ? null : index);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setShowSuggestions(false);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    navigate(`/products?search=${encodeURIComponent(suggestion)}`);
    setSearchQuery('');
    setShowSuggestions(false);
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#b1001b] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* LOGO Y TEXTO CLICKEABLES - RESPONSIVO */}
          <div 
            className="flex items-center cursor-pointer group flex-shrink-0"
            onClick={handleLogoClick}
          >
            <div className="relative h-10 w-auto sm:h-12 md:h-14 flex-shrink-0">
              <img 
                src={CCBlanco}
                alt="Correas Center Logo"
                className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="text-white ml-2 sm:ml-3">
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight group-hover:text-gray-200 transition-colors leading-tight">
                CORREAS CENTER
              </h1>
              <p className="text-[10px] sm:text-xs text-red-100 leading-tight">Solución Confiable</p>
            </div>
          </div>

          {/* MENÚ DESKTOP */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {/* BUSCADOR */}
            <div 
              ref={searchContainerRef}
              className="relative"
            >
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
                  className="w-48 xl:w-64 px-3 xl:px-4 py-2 rounded-l-md border-0 bg-[#C0939A] focus:bg-[#D9B0B6] focus:outline-none focus:ring-2 focus:ring-white text-gray-900 placeholder:text-gray-700 transition-colors duration-200 text-sm xl:text-base"
                />
                <button
                  type="submit"
                  className="bg-white text-[#ea0a2cf8] px-3 xl:px-4 py-2 rounded-r-md hover:bg-gray-100 transition-colors"
                >
                  <Search size={20} />
                </button>
              </form>

              {showSuggestions && (
                <div className="absolute top-full left-0 w-64 xl:w-80 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
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

          {/* BOTÓN HAMBURGUESA MÓVIL */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL MEJORADO */}
      {isOpen && (
        <>
          {/* Overlay oscuro */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel del menú */}
          <div className="fixed top-16 sm:top-18 right-0 bottom-0 w-[85%] max-w-sm bg-[#b1001b] shadow-2xl lg:hidden z-50 overflow-y-auto animate-slide-in">
            <div className="px-4 py-4 space-y-4">
              {/* Buscador móvil */}
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  className="flex-1 px-4 py-3 rounded-l-md border-0 bg-[#C0939A] focus:bg-[#D9B0B6] focus:outline-none text-gray-900 placeholder:text-gray-700 text-sm"
                />
                <button
                  type="submit"
                  className="bg-white text-[#EA0A2A] px-4 py-3 rounded-r-md"
                >
                  <Search size={20} />
                </button>
              </form>

              {/* Separador */}
              <div className="border-t border-white/20"></div>

              {/* Productos con acordeón */}
              <div className="space-y-1">
                <p className="text-white font-bold text-xs uppercase tracking-wider px-2 py-2">
                  Productos
                </p>
                {productCategories.map((category, index) => (
                  <div key={index} className="rounded-md overflow-hidden">
                    <button
                      onClick={() => handleMobileCategoryClick(index)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-white hover:bg-white/10 transition-colors text-sm font-medium"
                    >
                      <span>{category.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`text-white/80 transition-transform duration-300 ${
                          mobileActiveCategory === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Subcategorías - Desplegable con animación */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileActiveCategory === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="bg-black/20 pl-4 py-2 space-y-1">
                        {category.subcategories.map((sub, subIndex) => (
                          <a
                            key={subIndex}
                            href={`/products?category=${encodeURIComponent(category.name)}&sub=${encodeURIComponent(sub)}`}
                            className="block text-white/90 hover:text-white hover:bg-white/10 py-2 px-3 text-sm rounded transition-all"
                            onClick={() => setIsOpen(false)}
                          >
                            • {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Separador */}
              <div className="border-t border-white/20"></div>

              {/* Enlaces principales */}
              <div className="space-y-1">
                <a 
                  href="#servicios" 
                  className="flex items-center gap-3 text-white hover:bg-white/10 px-3 py-3 rounded-md transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Servicios</span>
                </a>
                <a 
                  href="#industrias" 
                  className="flex items-center gap-3 text-white hover:bg-white/10 px-3 py-3 rounded-md transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Industrias</span>
                </a>
                <a 
                  href="#contacto" 
                  className="flex items-center gap-3 text-white hover:bg-white/10 px-3 py-3 rounded-md transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Contacto</span>
                </a>
              </div>

              {/* Botón de llamada */}
              <a 
                href="tel:+59133333333" 
                className="flex items-center justify-center gap-2 bg-white text-[#EA0A2A] px-4 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone size={18} />
                Llamar ahora
              </a>
            </div>
          </div>
        </>
      )}

      {/* Animación CSS para el menú móvil */}
      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}
