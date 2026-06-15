import { X } from 'lucide-react';
import type { Product } from '../../../../../data/products';

interface CompareModalProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (productCode: string) => void;
}

export default function CompareModal({ products, isOpen, onClose, onRemove }: CompareModalProps) {
  if (!isOpen || products.length === 0) return null;

  // Obtener todas las propiedades únicas para comparar
  const allSpecs = new Set<string>();
  products.forEach(product => {
    allSpecs.add('Código');
    allSpecs.add('Categoría');
    allSpecs.add('Subcategoría');
    allSpecs.add('Marca');
    allSpecs.add('Descripción');
  });

  const specs = Array.from(allSpecs);

  const getSpecValue = (product: Product, spec: string) => {
    switch (spec) {
      case 'Código': return product.code;
      case 'Categoría': return product.category;
      case 'Subcategoría': return product.subcategory;
      case 'Marca': return product.brand;
      case 'Descripción': return product.description;
      default: return '-';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Comparar Productos</h2>
            <p className="text-sm text-gray-500 mt-1">
              {products.length} {products.length === 1 ? 'producto seleccionado' : 'productos seleccionados'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Contenido */}
        <div className="overflow-auto flex-1 p-6">
          {products.length === 1 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Selecciona al menos 2 productos para comparar
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-4 border-b-2 border-gray-200 min-w-[150px]">
                      <span className="text-sm font-semibold text-gray-700 uppercase">Especificación</span>
                    </th>
                    {products.map((product) => (
                      <th key={product.code} className="p-4 border-b-2 border-gray-200 min-w-[200px]">
                        <div className="relative">
                          <button
                            onClick={() => onRemove(product.code)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                            aria-label="Remover producto"
                          >
                            <X size={14} />
                          </button>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-32 h-32 object-cover rounded-lg mx-auto mb-3"
                          />
                          <h3 className="font-bold text-gray-900 text-sm line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">{product.code}</p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specs.map((spec) => (
                    <tr key={spec} className="hover:bg-gray-50">
                      <td className="p-4 border-b border-gray-200 font-semibold text-gray-700 text-sm">
                        {spec}
                      </td>
                      {products.map((product) => {
                        const value = getSpecValue(product, spec);
                        const isDifferent = products.some(
                          p => p !== product && getSpecValue(p, spec) !== value
                        );
                        
                        return (
                          <td key={product.code} className="p-4 border-b border-gray-200">
                            <span className={`text-sm ${isDifferent ? 'text-[#EA0A2A] font-medium' : 'text-gray-600'}`}>
                              {value}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Las diferencias se resaltan en <span className="text-[#EA0A2A] font-semibold">rojo</span>
            </p>
            <button
              onClick={onClose}
              className="bg-[#EA0A2A] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#C10923] transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}