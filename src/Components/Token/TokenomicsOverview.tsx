const TokenomicsOverview = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">VGOK Tokenomics Overview</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        VGOK is the driving force behind a decentralized, secure, and transparent financial ecosystem. Below is an overview of the key elements that make VGOK a solid choice for blockchain adoption and digital transactions.
      </p>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Token Overview Card */}
      <div className="bg-white p-6 rounded-xl border-2 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Token Overview</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Token Name:</strong> V Gates of Knowledge (VGOK)</li>
          <li><strong>Token Symbol:</strong> VGOK</li>
          <li><strong>Blockchain:</strong> Solana</li>
          <li><strong>Token Type:</strong> Utility Token</li>
          <li><strong>Total Supply:</strong> 1,000,000,000 VGOK</li>
          <li><strong>Liquidity Lock:</strong> 6 months</li>
        </ul>
      </div>
  
      {/* Key Features Card */}
      <div className="bg-white p-6 rounded-xl border-2 border-green-500 shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Security:</strong> Blockchain-backed for trust and transparency.</li>
          <li><strong>Utility:</strong> Token usable for transactions, purchases, and rewards.</li>
          <li><strong>Staking:</strong> Staking rewards for long-term holders and ecosystem participants.</li>
          <li><strong>Governance:</strong> Community-driven governance protocols to guide development.</li>
        </ul>
      </div>
  
      {/* Token Utility Card */}
      <div className="bg-white p-6 rounded-xl border-2 border-yellow-500 shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Token Utility</h3>
        <p className="text-gray-600">
          VGOK serves as the primary currency within the VGOK ecosystem, providing value through secure financial transactions, digital asset exchanges, and access to exclusive services within the marketplace. VGOK powers the decentralized guarantees and financial security services offered by VGOK.
        </p>
      </div>
    </div>
  </section>
  
  );
};
export default TokenomicsOverview;
