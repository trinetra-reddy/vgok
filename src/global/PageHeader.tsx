// components/common/PageHeader.tsx
import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  createLabel?: string;
  createLink?: string;
}

const PageHeader = ({
  title,
  searchPlaceholder = "Search...",
  onSearch,
  createLabel = "Create New",
  createLink = "/create",
}: PageHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h1 className="text-xl font-semibold">{title}</h1>

      <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder={searchPlaceholder}
            onChange={(e) => onSearch?.(e.target.value)}
            className="px-4 py-2 outline-none"
          />
          <button className="bg-blue-950 px-3 py-3 text-white">
            <Search size={16} />
          </button>
        </div>

        {createLink && (
          <Link
            to={createLink}
            className="border border-[#4269c2] text-[#4269c2] px-4 py-2 rounded hover:bg-blue-950 hover:text-white transition-all flex items-center gap-2"
          >
            <Plus size={16} /> {createLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
