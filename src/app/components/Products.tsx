import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
//import CangilonImg from '../assets/images/products/cangilones.png';
import ComandosImg from '../assets/img/products/Comandos.jpg';
import MangueraImg from '../assets/img/services/Manguera_Prensada.jpeg';

const products = [
  {
    name: 'Correas',
    image: 'https://m.media-amazon.com/images/I/91GyI2-4kVL._SX522_.jpg',
    description: 'Correas industriales de alta resistencia para transmisión de potencia',
    subcategories: ['Correas en V', 'Correas Dentadas', 'Correas Variadoras', 
                    'Correas Acanaladas']
  },
  {
    name: 'Mangueras',
    image: 'https://jasonhosesolutions.com/wp-content/uploads/2025/11/about-us.jpg',
    description: 'Mangueras de alta presión para sistemas hidráulicos industriales',
    subcategories: ['Mangueras Hidráulicas', 'Mangueras de Succión y de Descarga', 
                    'Mangueras Multiusos', 'Mangueras Neumaticas']
  },
  {
    name: 'Rodamientos',
    image: 'https://balerytodo.com/wp-content/uploads/2024/11/rods.jpg',
    description: 'Rodamientos de precisión de las mejores marcas internacionales',
    subcategories: ['Rodamientos de Rodillos', 'Rodamientos de Bolas', 'Rodamientos de Agujas', 
                    'Rodamientos Axiales', 'Rodamientos Lineales', 'Rodamientos Esfericos', 
                    'Rodamientos Cilindricos', 'Rodamientos de Contacto Angular', 'Chumaceras']
  },
  {
    name: 'Retenes, Sellos y O-rings',
    image: 'https://www.o-ring.com.ar/files/2018/04/productos-argensold.png',
    description: 'Elementos de sellado industrial para prevenir fugas y proteger componentes mecánicos.',
    subcategories: ['Retenes', 'Sellos Mecánicos', 'O-Rings', 'Sellos Hidráulicos', 
                    'Sellos Neumáticos']
  },
  {
    name: 'Bandas Transportadoras Pesadas',
    image: 'https://s.alicdn.com/@sc04/kf/H2196f70a04294cdc9b46f00606d2a64bx/Competitive-Price-Rubber-Conveyor-Belt-Ep-Ee-Conveyor-Belts-Rubber-Conveyor-Belts.jpg_300x300.jpg',
    description: 'Bandas para transporte de materiales en minería e industria',
    subcategories: ['Bandas Lisas', 'Bandas Nervadas', 'Bandas Verticales', 'Bandas con Bordes', 
                    'Bandas Corrugadas']
  },
  {
    name: 'Bandas Transportadoras Livianas',
    image: 'https://belter.com.ar/storage/categorias/bandas-transportadoras.png',
    description: 'Bandas para transporte de materiales para industria alimenticia',
    subcategories: ['Bandas Sinteticas', 'Bandas Modulares', 'Bandas de PTFE', 'Bandas Homogéneas', 'Bandas de Caucho Ligeras']
  },
  {
    name: 'Cadenas',
    image: 'https://hvhindustrial.com/images/frontend_images/categories/1651820230roller-chain-specialty-agricultural-chain.jpg',
    description: 'Cadenas de transmisión y transporte para aplicaciones pesadas',
    subcategories: ['Cadenas de Rodillos de Precisión', 'Cadenas de Acero Inoxidable', 
                    'Cadenas de Transmisión', 'Cadenas con Transportador', 'Cadenas Agricolas']
  },
  {
    name: 'Poleas',
    image: 'https://challengeptorigmedia.b-cdn.net/img/products/Pulleys-Main-300x300.jpg',
    description: 'Elementos de transmisión de potencia diseñados para optimizar el movimiento en sistemas de correas y bandas.',
    subcategories: ['Poleas en V de Taladro Conico Y Cilindrico', 'Poleas  Sincronas', 'Poleas MI-Lock']
  },
  {
    name: 'Piñones',
    image: 'https://challengeptorigmedia.b-cdn.net/img/products/Sprokets-Main-300x300.jpg',
    description: 'Componentes de precisión para transmisión de movimiento en sistemas de cadenas y maquinaria industrial.',
    subcategories: ['Piñónes de taladro cónico ', 'Piñónes con agujero piloto', 
                    'Piñónes simples de taladro cónico para 2 cadenas', 'Piñónes simples con agujero piloto para 2 cadenas']
  },
  {
    name: 'Niples, Conexiones y Conectores Hidraúlicos',
    image: 'https://emmflex.cl/wp-content/uploads/2022/11/producto-emmflex-17-1.png',
    description: 'Conexiones hidráulicas, neumáticas de precisión y conectores y accesorios para sistemas neumáticos',
    subcategories: ['Niples Hidráulicos', 'Niples de Cobre', 'Conexiones Rápidas', 'Adaptadores', 'Conectores Rápidos']
  },
  {
    name: 'Cilindros Hidraúlicos y Neúmaticos',
    image: 'http://emc-ecuador.com/wp-content/uploads/2013/10/20120705033639-260x300.jpg',
    description: 'Componentes neumáticos y patentados para optimizar movimientos y conexiones.',
    subcategories: ['Cilindros Neumáticos', 'Cilindros HTR (Tirantes)', 'Cilindros HCW (Patentado)']
  },
  {
    name: 'Cangilones',
    image: 'https://spinozziargentina.com/wp-content/uploads/2023/08/image37-1024x768.jpg',
    description: 'Elementos de elevación y transporte de materiales en sistemas de bandas transportadoras verticales.',
    subcategories: ['Cangilones HD Stax (Heavy Duty)', 'Cangilones de Nylon', 'Cangilones de Poliuretano', 'Pernos', 'Grapas de Empalme Mécanico', 'Laterales(Sky Rubbers)']
  },
  {
    name: 'Cardanes',
    image: 'https://soto.com.co/assets/media/cardanes/pto-spline-shaft-splined-shape-harvester-tractor-flexible-universal-joint-pto-drive-cardan-shaft-for-agricultural-machine-tractor-pto-shaft.jpg?u=1720718434',
    description: 'Sistemas de transmisión de potencia para maquinaria agrícola e industrial.',
    subcategories: ['Cardanes Agricolas']
  },
  {
    name: 'Cajas de Comandos',
    image: ComandosImg,
    description: 'Sistemas de transmisión de control para maquinaria agrícola e industrial.',
    subcategories: ['Caja de Comando de 1 Palanca', 'Caja de Comandos de 2 Palancas',
                    'Caja de Comandos de 3 Palancas', 'Caja de Comandos de 4 Palancas',
                    'Caja de Comandos de 5 Palancas', 'Caja de Comandos de 6 Palancas']
  },
  {
    name: 'Abrazaderas',
    image: 'https://www.wurth.com.ar/blog/wp-content/uploads/2024/05/ABRAZADERA-INDUSTRIAL-2023.jpg',
    description: 'Elementos de sujeción y fijación para mangueras, tuberías y componentes industriales.',
    subcategories: ['Abrazaderas Galvanizadas', 'Abrazaderas Inoxidables', 'Abrazaderas de Tornillo', 'Abrazaderas de Alambre']
  },
  {
    name: 'Servicios',
    image: MangueraImg,
    description: 'Soluciones integrales con soporte técnico experto',
    subcategories: ['Fabricación de Sellos SKF', 'Prensado de Mangueras', 'Reparacion de Cilindros',
                    'Fabricación de O-rings', 'Asesoria Tecnica Industrial',
                    'Empalmes y Montaje de Bandas Transportadoras Pesadas  y Livianas']
  }
];

export default function Products() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EA0A2A]/10 rounded-full px-4 py-2 mb-4">
            <p className="text-[#EA0A2A] font-semibold text-sm">NUESTROS PRODUCTOS</p>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluciones Completas para tu Industria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Amplio catálogo de productos industriales de las mejores marcas internacionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#EA0A2A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <button
                  onClick={() => setExpandedCategory(expandedCategory === product.name ? null : product.name)}
                  className="inline-flex items-center gap-2 text-[#EA0A2A] font-semibold hover:text-[#C10923] transition-colors mb-3 w-full"
                >
                  Ver subcategorías
                  <ChevronDown size={16} className={`transition-transform ${expandedCategory === product.name ? 'rotate-180' : ''}`} />
                </button>

                {expandedCategory === product.name && (
                  <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
                    {product.subcategories.map((sub, subIndex) => (
                      <a
                        key={subIndex}
                        href="#contacto"
                        className="block text-gray-700 hover:text-[#EA0A2A] text-sm py-1 hover:translate-x-1 transition-all"
                      >
                        • {sub}
                      </a>
                    ))}
                  </div>
                )}

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#EA0A2A] transition-colors mt-2"
                >
                  Solicitar información
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
