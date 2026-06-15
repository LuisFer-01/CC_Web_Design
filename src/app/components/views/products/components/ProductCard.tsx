import { Check, Eye, MessageCircle, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../../../../data/products';

interface ProductCardProps {
  product: Product;
  isSelected?: boolean;
  onToggleSelect?: () => void;
}

export default function ProductCard({ product, isSelected, onToggleSelect }: ProductCardProps) {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const message = `Hola, estoy interesado en el producto: ${product.name} (Código: ${product.code})`;
    const url = `https://wa.me/59177306576?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleViewDetails = () => {
    navigate(`/products/${product.code}`);
  };

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#EA0A2A] flex flex-col relative">
      {/* Checkbox de comparación */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleSelect?.();
        }}
        className={`absolute top-3 left-3 z-10 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          isSelected
            ? 'bg-[#EA0A2A] border-[#EA0A2A]'
            : 'bg-white/90 border-gray-300 hover:border-[#EA0A2A]'
        }`}
        aria-label={isSelected ? 'Remover de comparación' : 'Agregar a comparación'}
      >
        {isSelected && <Check size={14} className="text-white" />}
      </button>

      {/* Imagen */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Código de producto */}
        <div className="absolute top-3 right-3 bg-[#EA0A2A] text-white px-3 py-1 rounded-md text-xs font-bold shadow-lg">
          {product.code}
        </div>

        {/* Marca badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-md text-xs font-semibold shadow-md">
          {product.brand}
        </div>

        {/* Overlay con acciones */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button 
            onClick={handleViewDetails}
            className="bg-white text-[#EA0A2A] p-3 rounded-full hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
            aria-label="Ver detalles"
          >
            <Eye size={20} />
          </button>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] text-white p-3 rounded-full hover:bg-[#128C7E] transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
            aria-label="Cotizar por WhatsApp"
          >
            <MessageCircle size={20} />
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Categoría */}
        <div className="mb-2">
          <span className="text-xs text-[#EA0A2A] font-semibold uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        {/* Nombre */}
        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 min-h-[48px] group-hover:text-[#EA0A2A] transition-colors">
          {product.name}
        </h3>

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px] flex-1">
          {product.description}
        </p>

        {/* Subcategoría */}
        <div className="mb-4">
          <span className="inline-block text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">
            {product.subcategory}
          </span>
        </div>

        {/* Botón cotizar */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-[#EA0A2A] text-white px-4 py-2.5 rounded-lg hover:bg-[#C10923] transition-colors font-semibold text-sm flex items-center justify-center gap-2 group/btn"
        >
          <ShoppingCart size={16} className="group-hover/btn:scale-110 transition-transform" />
          Cotizar producto
        </button>
      </div>
    </div>
  );
}
