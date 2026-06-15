import { Scale } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../../../data/products';
import CompareModal from './CompareModal';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const handleToggleSelect = (product: Product) => {
    setSelectedProducts(prev => {
      const exists = prev.find(p => p.code === product.code);
      if (exists) {
        return prev.filter(p => p.code !== product.code);
      }
      if (prev.length >= 4) {
        alert('Solo puedes comparar hasta 4 productos');
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromCompare = (productCode: string) => {
    setSelectedProducts(prev => prev.filter(p => p.code !== productCode));
  };

  if (products.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-12 text-center border border-gray-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron productos</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Intenta ajustar los filtros o buscar con otros términos para encontrar lo que necesitas.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Botón flotante de comparar */}
      {selectedProducts.length > 0 && (
        <div className="fixed bottom-24 right-6 z-40 animate-slide-up">
          <button
            onClick={() => setIsCompareModalOpen(true)}
            className="bg-[#EA0A2A] text-white px-6 py-3 rounded-full shadow-2xl hover:bg-[#C10923] transition-all flex items-center gap-2 font-semibold"
          >
            <Scale size={20} />
            Comparar ({selectedProducts.length})
          </button>
        </div>
      )}

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.code}
            product={product}
            isSelected={selectedProducts.some(p => p.code === product.code)}
            onToggleSelect={() => handleToggleSelect(product)}
          />
        ))}
      </div>

      {/* Modal de comparación */}
      <CompareModal
        products={selectedProducts}
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        onRemove={handleRemoveFromCompare}
      />

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
