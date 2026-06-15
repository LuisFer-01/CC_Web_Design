import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsDatabase, type Product } from '../../../../data/products';
import Breadcrumbs from '../../commons/Breadcrumbs';
import CategoryGrid from './components/CategoryGrid';
import ProductFilters from './components/ProductFilters';
import ProductGrid from './components/ProductGrid';

const mainCategories = [
  { name: 'Todos', value: '' },
  { name: 'Correas', value: 'Correas' },
  { name: 'Mangueras', value: 'Mangueras' },
  { name: 'Rodamientos', value: 'Rodamientos' },
  { name: 'Bandas', value: 'Bandas Transportadoras' },
  { name: 'Cadenas', value: 'Cadenas' },
  { name: 'Más', value: 'more' }
];

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'categories' | 'products'>('categories');
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const subcategory = searchParams.get('sub') || '';

    setSearchQuery(search);
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);

    if (search || category || subcategory) {
      setViewMode('products');
      filterProducts(search, category, subcategory, selectedBrand);
    } else {
      setViewMode('categories');
    }
  }, [searchParams]);

  useEffect(() => {
    if (viewMode === 'products') {
      filterProducts(searchQuery, selectedCategory, selectedSubcategory, selectedBrand);
    }
  }, [selectedCategory, selectedSubcategory, selectedBrand]);

  const filterProducts = (
    search: string,
    category: string,
    subcategory: string,
    brand: string
  ) => {
    let filtered = [...productsDatabase];

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.code.toLowerCase().includes(searchLower) ||
          product.brand.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower) ||
          product.subcategory.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (subcategory) {
      filtered = filtered.filter((product) => product.subcategory === subcategory);
    }

    if (brand) {
      filtered = filtered.filter((product) => product.brand === brand);
    }

    if (!search && !category && !subcategory && !brand) {
      filtered = filtered.slice(0, 20);
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setActiveTab(categoryName);
    setViewMode('products');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleTabClick = (categoryValue: string) => {
    setActiveTab(categoryValue);
    if (categoryValue === 'more') {
      setViewMode('categories');
      setSelectedCategory('');
    } else {
      setSelectedCategory(categoryValue);
      setViewMode('products');
    }
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <section className="pt-16 sm:pt-18 md:pt-20 bg-white min-h-screen">
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Contenido Principal */}
      <div className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Vista de Categorías */}
          {viewMode === 'categories' && (
            <div>
              <CategoryGrid onCategoryClick={handleCategoryClick} />
            </div>
          )}

          {/* Vista de Productos */}
          {viewMode === 'products' && (
            <div>
              {/* Tabs de Navegación */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-1 pb-3 border-b border-gray-200">
                  {mainCategories.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => handleTabClick(tab.value)}
                      className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                        activeTab === tab.value
                          ? 'text-[#EA0A2A] border-b-2 border-[#EA0A2A] -mb-[13px]'
                          : 'text-gray-600 hover:text-[#EA0A2A]'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
                
                {/* Contador de resultados */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-600">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
                    {selectedCategory && <span className="font-medium text-gray-900"> en {selectedCategory}</span>}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filtros Laterales - Solo Subcategoría y Marca */}
                <div className="lg:col-span-1">
                  <ProductFilters
                    selectedCategory={selectedCategory}
                    selectedSubcategory={selectedSubcategory}
                    selectedBrand={selectedBrand}
                    onCategoryChange={setSelectedCategory}
                    onSubcategoryChange={setSelectedSubcategory}
                    onBrandChange={setSelectedBrand}
                    hideCategoryFilter={true} // Ocultar filtro de categoría (ya está en tabs)
                  />
                </div>

                {/* Grid de productos */}
                <div className="lg:col-span-3">
                  <ProductGrid products={filteredProducts} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
