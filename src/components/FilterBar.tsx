import { Search } from 'lucide-react';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
      <div className="space-y-6">
        {/* Search Section */}
        <div>
          <label htmlFor="search" className="block text-sm font-semibold text-gray-800 mb-3">
            Search Assessments
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="search"
              placeholder="Search by name, abbreviation, or body part..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 text-gray-900 bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Category Filter Section */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-4">
            Filter by Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 border ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg border-blue-600 hover:bg-blue-700 transform hover:scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-md'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
