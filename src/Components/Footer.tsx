import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from React Router
import {
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp,
  Mail
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Define the navigation links
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Token", to: "/token" },
    { name: "NFT", to: "/nft" },
    { name: "Contact Us", to: "/contact" },
    { name: "Forum", to: "/forum" }    
  ];

  return (
    <>
      {/* Floating Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 bg-[#13ca82] hover:bg-[#12b67c] text-white p-3 rounded-full shadow-lg transition"
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Footer */}
      <footer className="text-white py-16 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* New Call to Action and Contact */}
          <div className="text-center text-white">
            <h3 className="text-xl font-semibold mb-2">Join Us in Building a Secure and Dynamic Digital Ecosystem!</h3>
            <p className="text-sm">For inquiries, please contact:</p>
            <a
              href="mailto:support@vgok.org"
              className="text-[#13ca82] hover:text-[#12b67c] transition"
            >
              support@vgok.org
            </a>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="hover:text-[#13ca82] transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Mail size={18} /> Subscribe to our newsletter
              </h2>
              <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:w-auto px-4 py-2 rounded-md border-2 border-gray-300 dark:border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#13ca82] focus:border-[#13ca82]"
                />
                <button
                  type="submit"
                  className="bg-[#13ca82] hover:bg-[#12b67c] transition text-white px-4 py-2 rounded-md"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-start md:items-end justify-between h-full">
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-4">Follow us</h2>
                <div className="flex gap-4">
                  <a href="#" aria-label="Facebook" className="hover:text-[#13ca82] transition"><Facebook size={20} /></a>
                  <a href="#" aria-label="Twitter" className="hover:text-[#13ca82] transition"><Twitter size={20} /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-[#13ca82] transition"><Linkedin size={20} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Text */}
          <div className="mt-12 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} VGuarantee. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
