import { ArrowRight, ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";

const GuaranteeServices = () => {
  const features = [
    {
      title: "Secure & Instant Transactions",
      description: "Experience ultra-fast, low-cost transfers powered by Solana’s advanced technology."
    },
    {
      title: "Primary Currency for the Ecosystem",
      description: "Use VGOK Tokens for marketplace purchases, service guarantees, and NFTs."
    },
    {
      title: "Governance & Staking",
      description: "Vote on proposals and earn staking rewards as a VGOK token holder."
    }
  ];
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-6 py-16">
    <div className="text-center mb-20" data-aos="fade-down">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-primary tracking-tight">
        VGOK Tokens
      </h1>
      <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
        Powering the Future of Digital Transactions
      </p>
    </div>

    <div className="relative max-w-6xl mx-auto" data-aos="fade-up">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary z-0"></div>
      {features.map((feature, index) => (
        <div
          key={index}
          className={`relative w-full mb-24 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <div className="w-1/2 flex flex-col items-center relative">
            <div className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${index % 2 === 0 ? "-right-6" : "-left-6"}`}>
              <div className="bg-primary text-white p-1 rounded-full">
                <ArrowBigRight className={`w-6 h-6 transform ${index % 2 === 0 ? "rotate-0" : "rotate-180"}`} />
              </div>
            </div>
            <div className="relative z-10 bg-white rounded-xl p-6 shadow-md w-full">
              <h2 className="text-xl font-semibold text-primary mb-2">{feature.title}</h2>
              <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-20" data-aos="zoom-in">
      {/* <button className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300">
        
      </button> */}
       <Link
              key="Tokenomics"
              to="/Tokenomics"
              className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
                Explore Tokenomics <ArrowRight size={20} />
            </Link>
    </div>
  </div>
  );
};

export default GuaranteeServices;