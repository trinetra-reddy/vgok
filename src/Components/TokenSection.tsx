import { ArrowRight } from "lucide-react";
const TokenSection = () => {
  const features = [
    {
      title: "Secure & Instant Transactions",
      description: "Experience ultra-fast, low-cost transfers powered by Solana’s advanced technology.",
      border:'border-blue-100'
    },
    {
      title: "Primary Currency for the Ecosystem",
      description: "Use VGOK Tokens for marketplace purchases, service guarantees, and NFTs.",
      border:"border-yellow-100"
    },
    {
      title: "Governance & Staking",
      description: "Vote on proposals and earn staking rewards as a VGOK token holder.",
      border:"border-primary"
    }
  ];

  return (
    <div className="section-bg py-20 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-20" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-primary tracking-tight">
        <span className="text-secondary">VGOK</span> Tokens
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Powering the Future of Digital Transactions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10" data-aos="fade-up">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl p-10 border  relative group shadow-lg hover:shadow-xl transition duration-300 ${feature.border}`}
          >
            <div className="absolute -top-4 left-4 w-10 h-10 bg-primary text-black flex items-center justify-center rounded-full shadow-md">
              {index + 1}
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:underline">
              {feature.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-20" data-aos="zoom-in">
        <button className="inline-flex items-center gap-2 bg-primary hover:bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300">
          Explore Tokenomics <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TokenSection;