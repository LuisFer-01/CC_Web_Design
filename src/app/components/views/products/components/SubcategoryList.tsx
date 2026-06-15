import { ChevronRight } from 'lucide-react';

interface Subcategory {
  name: string;
  productCount?: number;
}

interface SubcategoryListProps {
  subcategories: Subcategory[];
  activeSubcategory?: string | null;
  onSubcategoryClick: (subcategory: string) => void;
  title?: string;
}

export default function SubcategoryList({ 
  subcategories, 
  activeSubcategory, 
  onSubcategoryClick,
  title = "Subcategorías"
}: SubcategoryListProps) {
  if (subcategories.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {subcategories.map((sub) => {
          const isActive = activeSubcategory === sub.name;
          
          return (
            <button
              key={sub.name}
              onClick={() => onSubcategoryClick(sub.name)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all text-left ${
                isActive
                  ? 'bg-[#EA0A2A] text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#EA0A2A]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium text-sm">{sub.name}</span>
                {sub.productCount !== undefined && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {sub.productCount}
                  </span>
                )}
              </div>
              <ChevronRight 
                size={16} 
                className={`transition-transform ${isActive ? 'rotate-90' : ''}`} 
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}