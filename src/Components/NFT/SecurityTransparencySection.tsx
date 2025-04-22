import { CheckCircle } from 'lucide-react';

const SecurityTransparencySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Security & Transparency
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          We prioritize security, trust, and transparency within our NFT ecosystem through:
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-start justify-between text-left">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <CheckCircle className="text-primary w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-1">Smart Contract Audits</h2>
              <p className="text-gray-700">Comprehensive audits to ensure secure, fair, and fraud-free transactions.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <CheckCircle className="text-secondary w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary mb-1">Regular Financial Updates</h2>
              <p className="text-gray-700">Community transparency with financial breakdowns and development progress.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <CheckCircle className="text-primary w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-1">Anti-Scam Measures</h2>
              <p className="text-gray-700">Implementation of proactive security protocols to protect users from fraudulent activities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTransparencySection;
