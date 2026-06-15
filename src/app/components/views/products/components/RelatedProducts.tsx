import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../../../../data/products';

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    // Navegar a la página de detalle del producto
    // En producción, esto sería una ruta dinámica
    navigate(`/products/${product.code}`);
  };

  if (products.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.code}
          onClick={() => handleProductClick(product)}
          className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#EA0A2A]"
        >
          {/* Imagen */}
          <div className="relative h-48 overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-[#EA0A2A] text-white px-2 py-1 rounded text-xs font-bold">
              {product.code}
            </div>
          </div>

          {/* Contenido */}
          <div className="p-4">
            <div className="mb-2">
              <span className="text-xs text-[#EA0A2A] font-semibold uppercase">
                {product.brand}
              </span>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#EA0A2A] transition-colors">
              {product.name}
            </h3>

            <p className="text-gray-600 text-xs mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500">{product.subcategory}</span>
              <ArrowRight 
                size={16} 
                className="text-[#EA0A2A] group-hover:translate-x-1 transition-transform" 
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}