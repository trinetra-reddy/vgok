import { LogOut, ChevronDown, User } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useState, useRef, useEffect } from "react";

const AppHeader = () => {
  const { user, setAuthenticatedUser } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleLogout = () => {
    setAuthenticatedUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-blue-950 shadow px-6 flex items-center justify-between z-50 w-full">
      {/* Logo */}
      <div className="text-xl font-bold text-white tracking-wide">VGOK</div>

      {/* Right Side: All Topics + Avatar */}
      <div className="flex items-center gap-6">
        {/* All Topics Link */}
        <Link
          className={`text-sm transition border-b-2 px-2 pb-1 ${location.pathname === "/user/allTopics"
            ? "text-white border-white font-semibold"
            : "text-white border-transparent hover:border-white"
            }`}

          to="/user/allTopics"
          data-discover="true"
        >
          All Topics
        </Link>

        {/* Avatar + Name + Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 text-sm text-white font-medium"
          >
            <span>{user?.firstName || "User"}</span>

            <div className="w-9 h-9 rounded-full border-2 border-white bg-white text-blue-950 flex items-center justify-center font-bold">
              {user?.firstName?.[0]?.toUpperCase() || "U"}
            </div>

            <ChevronDown
              size={18}
              className={`text-white transition-transform ${open ? "rotate-180" : "rotate-0"}`}
            />
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <User size={16} /> Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 text-red-600 cursor-pointer"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
