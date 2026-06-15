import { Filter, RotateCcw } from 'lucide-react';
import { productsDatabase } from '../../../../../data/products';

interface ProductFiltersProps {
  selectedCategory: string;
  selectedSubcategory: string;
  selectedBrand: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
  onBrandChange: (brand: string) => void;
  hideCategoryFilter?: boolean;
}

export default function ProductFilters({
  selectedCategory,
  selectedSubcategory,
  selectedBrand,
  onCategoryChange,
  onSubcategoryChange,
  onBrandChange,
  hideCategoryFilter = false
}: ProductFiltersProps) {
  const subcategories = selectedCategory
    ? Array.from(new Set(
        productsDatabase
          .filter(p => p.category === selectedCategory)
          .map(p => p.subcategory)
      )).sort()
    : [];

  const availableBrands = Array.from(new Set(
    productsDatabase
      .filter(p => {
        if (selectedCategory && p.category !== selectedCategory) return false;
        if (selectedSubcategory && p.subcategory !== selectedSubcategory) return false;
        return true;
      })
      .map(p => p.brand)
  )).sort();

  const hasActiveFilters = selectedSubcategory || selectedBrand;

  const handleClearFilters = () => {
    onSubcategoryChange('');
    onBrandChange('');
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 sticky top-24">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Filter className="text-[#EA0A2A]" size={18} />
          <h3 className="text-base font-bold text-gray-900">Filtros</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="text-xs text-[#EA0A2A] hover:text-[#C10923] font-medium flex items-center gap-1"
          >
            <RotateCcw size={12} />
            Limpiar
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Filtro por Categoría - Oculto si hideCategoryFilter es true */}
        {!hideCategoryFilter && (
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
              Categoría
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                onCategoryChange(e.target.value);
                onSubcategoryChange('');
              }}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#EA0A2A] text-sm"
            >
              <option value="">Todas</option>
              {Array.from(new Set(productsDatabase.map(p => p.category))).sort().map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Filtro por Subcategoría */}
        {subcategories.length > 0 && (
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
              Subcategoría
            </label>
            <select
              value={selectedSubcategory}
              onChange={(e) => onSubcategoryChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#EA0A2A] text-sm"
            >
              <option value="">Todas</option>
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
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
              Marca
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => onBrandChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#EA0A2A] text-sm"
            >
              <option value="">Todas</option>
              {availableBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
