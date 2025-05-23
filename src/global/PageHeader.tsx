// components/common/PageHeader.tsx
import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  createLabel?: string;
  createLink?: string;
  createButton?: ReactNode; 


  statusValue?: string;
  onStatusChange?: (val: string) => void;
  onStatusClick?: () => void;
  statusOptions?: { label: string; value: string }[];

}

const PageHeader = ({
  title,
  searchPlaceholder = "Search...",
  onSearch,
  createLabel = "Create New",
  createLink,
  createButton,

  statusValue,
  onStatusChange,
  statusOptions,

}: PageHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
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

        {/* Status dropdown + button */}
        {statusOptions?.length ? (<div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <select
            value={statusValue}
            onChange={(e) => onStatusChange?.(e.target.value)}
            className="px-3 py-2 text-sm outline-none min-h-[42px] px-2"
          >
            {statusOptions?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>) : ''
        }

        {/* Use createButton if passed; else fallback to Link */}
        {createButton
          ? createButton
          : createLink && (
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
