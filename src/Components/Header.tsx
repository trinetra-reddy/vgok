import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Token", to: "/token" },
    { name: "NFT", to: "/nft" },
    { name: "Contact Us", to: "/contact" },
    { name: "Login", to: "/login" },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="p-3 bg-secondary">
        <p className="text-white text-right rotate">
          ⚡ VGuarantee website development in progress. COMING SOON!
        </p>
      </div>

      {/* Header Main */}
      <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-secondary hover:opacity-80 transition duration-300">
            VGuarantee
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-lg transition-all font-medium relative pb-1 ${
                    isActive
                      ? "text-secondary border-b-2 border-secondary"
                      : "text-white hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-secondary transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="md:hidden bg-primary px-6 pb-6 pt-2 flex flex-col gap-4"            
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    isActive ? "text-secondary" : "text-white hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
