import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // assuming you're using lucide-react

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsVisible(scrollTop > pageHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 bg-primary hover:bg-[#12b67c] text-white p-3 rounded-full shadow-lg transition"
      aria-label="Back to Top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTopButton;
