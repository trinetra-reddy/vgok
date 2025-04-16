import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    {
      name: "Token",
      dropdown: [
        { name: "Token Whitepaper", to: "/token" },
        { name: "Tokenomics", to: "/tokenomics" },
        { name: "Token Roadmap", to: "/token-roadmap" },
      ],
    },
    {
      name: "NFT",
      dropdown: [
        { name: "NFT Content", to: "/nft" },
        { name: "NFT Whitepaper", to: "/nft-whitepaper" },
      ],
    },
    { name: "Contact Us", to: "/contact" },
    { name: "Login", to: "/login" },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <>
      {/* <div className="p-2  bg-secondary text-white text-center">
        ⚡ VGuarantee.org website development in progress. Coming Soon on 14th September!!
      </div> */}
      <div className="p-2 bg-secondary">
        <p className="text-white text-right rotate text-sm">
          ⚡ VGuarantee.org website development in progress. Coming Soon on 14th September!
        </p>
      </div>
      <header className="bg-gradient-to-r from-primary to-secondary text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-secondary">
            VGOK
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition">
                    <span>{link.name}</span>
                    <ChevronDown size={16} />
                  </div>

                  {/* Dropdown on hover */}
                  <div className="absolute top-full left-0 hidden group-hover:block bg-white text-gray-800 w-60 rounded-lg shadow-lg py-2 z-50">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.to}
                        className={clsx(
                          "block px-4 py-2 hover:bg-secondary/10 hover:text-primary transition",
                          { "text-primary font-medium": isActive(sublink.to) }
                        )}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.to}
                  className={clsx("hover:text-primary transition", {
                    "text-primary font-semibold": isActive(link.to),
                  })}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden bg-gradient-to-r from-primary to-secondary px-4 pb-6 space-y-4 text-white">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name}>
                  <p className="font-semibold">{link.name}</p>
                  <div className="ml-4 space-y-2">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.to}
                        className="block hover:text-secondary"
                        onClick={() => setIsOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-secondary"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
