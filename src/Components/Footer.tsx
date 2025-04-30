import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from React Router
import {
  Facebook,
  Twitter,
  Instagram,
  Mail
} from 'lucide-react';
import { FaTelegramPlane, FaTiktok, FaDiscord } from 'react-icons/fa';
import BackToTopButton from './BackToTopButton';

const Footer: React.FC = () => {  
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
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 bg-primary hover:bg-[#12b67c] text-white p-3 rounded-full shadow-lg transition"
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </button> */}
      <BackToTopButton/>

      {/* Footer */}
      <footer className="text-white py-16 px-6 md:px-20 bg-primary to-black">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* New Call to Action and Contact */}
          <div className="text-center text-white">
            <h3 className="text-xl font-semibold mb-2">Join Us in Building a Secure and Dynamic Digital Ecosystem!</h3>
            <p className="text-sm">For inquiries, please contact:</p>
            <a
              href="mailto:support@vgok.org"
              className="text-primary hover:text-[#12b67c] transition"
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
                      className="hover:underline hover:font-semibold transition"
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
                  className="w-full sm:w-auto px-4 py-2 rounded-md border-2 border-white dark:border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-[#12b67c] transition text-white px-4 py-2 rounded-md"
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
                  <a href="https://www.facebook.com/share/158vqcnhxt/" aria-label="Facebook" className="hover:underline transition"><Facebook size={20} /></a>
                  <a href="https://x.com/VGOK_Official" aria-label="Twitter" className="hover:underline transition"><Twitter size={20} /></a>
                  <a href="https://www.instagram.com/vgok_official?utm_source=qr&igsh=c2Jqa2hrZXltczBh" aria-label="Instagram" className="hover:underline transition"><Instagram size={20} /></a>                  
                  <a href="https://t.me/vgok_nft" aria-label="Telegram" className="hover:underline transition"><FaTelegramPlane size={20} /></a>
                  <a href="https://www.tiktok.com/@vgok_official?_t=ZS-8uyWlOfY2um&_r=1" aria-label="Tiktok" className="hover:underline transition"><FaTiktok size={20} /></a>
                  <a href="https://discord.gg/9bE9TQKp6a" aria-label="FaDiscord" className="hover:underline transition"><FaDiscord size={20} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Text */}
          <div className="mt-12 text-center text-sm text-white">
            &copy; {new Date().getFullYear()} VGOK. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
