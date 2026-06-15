import { ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { productsDatabase, type Product } from '../../../../../../data/products';
import Breadcrumbs from '../../../../commons/Breadcrumbs';
import ProductGrid from '../../components/ProductGrid';

// Definición de subcategorías específicas para Correas
const correasSubcategories = [
  'Correas en V',
  'Correas Dentadas',
  'Correas Variadoras',
  'Correas Acanaladas'
];

export default function CorreasPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  useEffect(() => {
    // Filtrar productos que pertenezcan a la categoría "Correas"
    let products = productsDatabase.filter(p => p.category === 'Correas');

    // Si hay una subcategoría activa, filtrar aún más
    if (activeSubcategory) {
      products = products.filter(p => p.subcategory === activeSubcategory);
    }

    setFilteredProducts(products);
  }, [activeSubcategory]);

  return (
    <section className="pt-16 sm:pt-18 md:pt-20">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Inicio', href: '/' },
        { label: 'Productos', href: '/products' },
        { label: 'Correas' }
      ]} />

      {/* Banner de Categoría */}
      <div className="bg-gradient-to-r from-[#b1001b] to-[#7a0013] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              TRANSMISIÓN DE POTENCIA
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Correas Industriales
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Soluciones de alta resistencia para la transmisión de potencia en todo tipo de maquinaria industrial.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navegación de Subcategorías */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de Correas</h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveSubcategory(null)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  activeSubcategory === null
                    ? 'bg-[#EA0A2A] text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#EA0A2A] hover:text-[#EA0A2A]'
                }`}
              >
                Todas
              </button>
              {correasSubcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                    activeSubcategory === sub
                      ? 'bg-[#EA0A2A] text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-[#EA0A2A] hover:text-[#EA0A2A]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* Características / Beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4">
              <CheckCircle className="text-[#EA0A2A] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Alta Resistencia</h3>
                <p className="text-sm text-gray-600">Materiales diseñados para soportar cargas pesadas y alta tensión.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4">
              <CheckCircle className="text-[#EA0A2A] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Marcas Líderes</h3>
                <p className="text-sm text-gray-600">Trabajamos con Gates, Mitsuba, Megadyne y más.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4">
              <CheckCircle className="text-[#EA0A2A] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Asesoría Técnica</h3>
                <p className="text-sm text-gray-600">Te ayudamos a seleccionar la correa exacta para tu maquinaria.</p>
              </div>
            </div>
          </div>

          {/* Grid de Productos */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeSubcategory || 'Catálogo Completo'}
              <span className="text-base font-normal text-gray-500 ml-2">
                ({filteredProducts.length} productos)
              </span>
            </h2>
          </div>

          <ProductGrid products={filteredProducts} />

          {/* CTA Final */}
          <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              ¿No encuentras la correa que buscas?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contamos con un amplio stock y capacidad de importación bajo pedido. 
              Nuestro equipo técnico puede ayudarte a identificar la pieza exacta.
            </p>
            <a
              href="https://wa.me/59177306576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#EA0A2A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C10923] transition-colors shadow-md"
            >
              Contactar a un asesor
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
