import { Eye, ShoppingCart } from 'lucide-react';
import type { Product } from '../../../../data/products';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-12 text-center">
        <p className="text-xl text-gray-600 mb-4">No se encontraron productos</p>
        <p className="text-gray-500">Intenta con otros filtros o términos de búsqueda</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.code}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200"
        >
          <div className="relative h-56 overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-2 left-2 bg-[#EA0A2A] text-white px-2 py-1 rounded text-xs font-bold">
              {product.code}
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button className="bg-white text-[#EA0A2A] p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Eye size={20} />
              </button>
              <button className="bg-[#EA0A2A] text-white p-2 rounded-full hover:bg-[#C10923] transition-colors">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-2">
              <span className="text-xs text-[#EA0A2A] font-semibold uppercase">
                {product.brand}
              </span>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
              {product.name}
            </h3>

            <p className="text-gray-600 text-xs mb-3 line-clamp-2 min-h-[32px]">
              {product.description}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span className="bg-gray-100 px-2 py-1 rounded">
                {product.category}
              </span>
            </div>

            <button className="w-full bg-[#EA0A2A] text-white px-4 py-2 rounded-lg hover:bg-[#C10923] transition-colors font-semibold text-sm flex items-center justify-center gap-2">
              <ShoppingCart size={16} />
              Cotizar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}