import { Filter } from 'lucide-react';
import { productsDatabase } from '../../../../data/products';

interface ProductFiltersProps {
  selectedCategory: string;
  selectedSubcategory: string;
  selectedBrand: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
  onBrandChange: (brand: string) => void;
}

export default function ProductFilters({
  selectedCategory,
  selectedSubcategory,
  selectedBrand,
  onCategoryChange,
  onSubcategoryChange,
  onBrandChange
}: ProductFiltersProps) {
  // Obtener categorías únicas
  const categories = Array.from(new Set(productsDatabase.map(p => p.category)));
  
  // Obtener subcategorías basadas en la categoría seleccionada
  const subcategories = selectedCategory
    ? Array.from(new Set(
        productsDatabase
          .filter(p => p.category === selectedCategory)
          .map(p => p.subcategory)
      ))
    : [];

  // Obtener marcas basadas en filtros actuales
  const availableBrands = Array.from(new Set(
    productsDatabase
      .filter(p => {
        if (selectedCategory && p.category !== selectedCategory) return false;
        if (selectedSubcategory && p.subcategory !== selectedSubcategory) return false;
        return true;
      })
      .map(p => p.brand)
  ));

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="text-[#EA0A2A]" size={24} />
        <h3 className="text-xl font-bold text-gray-900">Filtros</h3>
      </div>

      <div className="space-y-4">
        {/* Filtro por Categoría */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Categoría
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              onCategoryChange(e.target.value);
              onSubcategoryChange('');
            }}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#EA0A2A]"
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por Subcategoría */}
        {subcategories.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Subcategoría
            </label>
            <select
              value={selectedSubcategory}
              onChange={(e) => onSubcategoryChange(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#EA0A2A]"
            >
              <option value="">Todas las subcategorías</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Filtro por Marca */}
        {availableBrands.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Marca
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => onBrandChange(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#EA0A2A]"
            >
              <option value="">Todas las marcas</option>
              {availableBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Botón para limpiar filtros */}
        {(selectedCategory || selectedSubcategory || selectedBrand) && (
          <button
            onClick={() => {
              onCategoryChange('');
              onSubcategoryChange('');
              onBrandChange('');
            }}
            className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          >
            Limpiar filtros
          </button>
        )}
      </div>
    </div>
  );
}
