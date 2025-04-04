
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface ResourceSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  tagCategories?: string[];
}

const ResourceSearch: React.FC<ResourceSearchProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  tagCategories = ['API Guide', 'SDK', 'Code Samples', 'Tutorials', 'Documentation']
}) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search for resources, guides, code samples..."
          className="w-full px-5 py-4 pl-12 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-wex-blue/40 text-foreground"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-foreground/60" />
      </div>
      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        {tagCategories.map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              searchQuery === tag 
                ? 'bg-wex-blue/20 text-wex-blue dark:bg-wex-lightBlue/20 dark:text-wex-lightBlue' 
                : 'bg-foreground/5 hover:bg-foreground/10'
            }`}
            onClick={() => setSearchQuery(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResourceSearch;
