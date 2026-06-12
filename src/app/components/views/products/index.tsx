import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsDatabase, type Product } from '../../../../data/products';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';
import SearchBar from './SearchBar';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const subcategory = searchParams.get('sub') || '';

    setSearchQuery(search);
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);

    filterProducts(search, category, subcategory, selectedBrand);
  }, [searchParams]);

  useEffect(() => {
    filterProducts(searchQuery, selectedCategory, selectedSubcategory, selectedBrand);
  }, [selectedCategory, selectedSubcategory, selectedBrand]);

  const filterProducts = (
    search: string,
    category: string,
    subcategory: string,
    brand: string
  ) => {
    let filtered = [...productsDatabase];

    // Búsqueda por coincidencias parciales (case insensitive)
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

    // Filtrar por categoría
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Filtrar por subcategoría
    if (subcategory) {
      filtered = filtered.filter((product) => product.subcategory === subcategory);
    }

    // Filtrar por marca
    if (brand) {
      filtered = filtered.filter((product) => product.brand === brand);
    }

    // Si no hay filtros, mostrar todos los productos (o los primeros 20)
    if (!search && !category && !subcategory && !brand) {
      filtered = filtered.slice(0, 20);
    }

    setFilteredProducts(filtered);
  };

  return (
    <section className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#EA0A2A]/10 rounded-full px-4 py-2 mb-4">
            <p className="text-[#EA0A2A] font-semibold text-sm">CATÁLOGO DE PRODUCTOS</p>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Busca y Encuentra lo que Necesitas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Amplio catálogo de productos industriales de las mejores marcas
          </p>
        </div>

        <SearchBar />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              selectedBrand={selectedBrand}
              onCategoryChange={setSelectedCategory}
              onSubcategoryChange={setSelectedSubcategory}
              onBrandChange={setSelectedBrand}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Mostrando <span className="font-bold text-[#EA0A2A]">{filteredProducts.length}</span> productos
              </p>
              {(searchQuery || selectedCategory || selectedSubcategory || selectedBrand) && (
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setSelectedSubcategory('');
                    setSelectedBrand('');
                    setSearchQuery('');
                  }}
                  className="text-sm text-[#EA0A2A] hover:text-[#C10923] font-semibold"
                >
                  Limpiar filtros
                </button>
              )}
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </section>
  );
}