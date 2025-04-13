import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Token", to: "/token" },
    { name: "NFT", to: "/nft" },
    { name: "Contact Us", to: "/contact" },
    // { name: "Forum", to: "/forum" },
    { name: "Login", to: "/login" },
  ];

  return (
    <>
      <div className="p-3 bg-secondary">
        <p className="text-white text-right rotate">
          ⚡ VGuarantee website development in progress. COMING SOON!
        </p>
      </div>
      <header className="bg-primary text-white sticky top-0 z-11">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="text-2xl font-bold text-secondary">VGuarantee</div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile nav toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile nav menu */}
        {isOpen && (
          <nav className="md:hidden bg-primary px-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
