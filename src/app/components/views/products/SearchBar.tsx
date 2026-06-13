import { Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const popularProducts = [
  'Correas',
  'Rodamientos',
  'Mangueras',
  'Retenes',
  'Cadenas',
  'Poleas'
];

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    navigate(`/products?search=${encodeURIComponent(suggestion)}`);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Buscar Productos</h2>
      <div ref={searchContainerRef} className="relative">
        <form onSubmit={handleSearch}>
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Buscar por código, producto, marca, categoría..."
              className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-l-lg focus:outline-none focus:border-[#EA0A2A] text-lg"
            />
            <button
              type="submit"
              className="bg-[#EA0A2A] text-white px-8 py-4 rounded-r-lg hover:bg-[#C10923] transition-colors font-semibold"
            >
              <Search size={24} />
            </button>
          </div>
        </form>

        {showSuggestions && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
            {searchQuery.length === 0 ? (
              <>
                <p className="px-4 py-2 text-xs text-gray-500 font-semibold uppercase">Búsquedas populares</p>
                {popularProducts.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(product)}
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#EA0A2A] transition-colors"
                  >
                    {product}
                  </button>
                ))}
              </>
            ) : (
              <div className="px-4 py-3 text-sm text-gray-600">
                Presiona Enter o haz clic en buscar para: <span className="font-semibold text-[#EA0A2A]">"{searchQuery}"</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}