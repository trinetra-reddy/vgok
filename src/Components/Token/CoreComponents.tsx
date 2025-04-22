import { ShieldCheck,  Server, Coins, Users, Blocks } from 'lucide-react';
const CoreComponents = () => {
  return (
    <section className="section-bg py-16 px-6 md:px-12 lg:px-24">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up">
        Explore <span className="text-secondary">Core Components</span>
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        The VGOK ecosystem is built on two powerful pillars — VGOK for transaction security, and the VGOK blockchain framework for powering digital utility, NFTs, and decentralized community governance.
      </p>
    </div>

    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <div data-aos="fade-right" className="space-y-6">
        <div className="flex items-center gap-4">
          <Server className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-semibold text-primary">VGuarantee Platform</h3>
        </div>
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-gray-500 mt-1" />
          <p className="text-gray-700">
            <strong>Secure Marketplace:</strong> A trusted environment for buyers, sellers, and consultants to connect.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <Blocks className="w-6 h-6 text-gray-500 mt-1" />
          <p className="text-gray-700">
            <strong>Smart Contract Guarantees:</strong> Blockchain-based protection to ensure reliable and fraud-free transactions.
          </p>
        </div>
      </div>

      <div data-aos="fade-left" className="space-y-6">
        <div className="flex items-center gap-4">
          <Coins className="w-8 h-8 text-secondary" />
          <h3 className="text-2xl font-semibold text-secondary">VGOK Ecosystem</h3>
        </div>
        <div className="flex items-start gap-4">
          <Coins className="w-6 h-6 text-gray-500 mt-1" />
          <p className="text-gray-700">
            <strong>VGOK Tokens:</strong> Utility tokens on the Solana blockchain powering payments, rewards, and services.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-gray-500 mt-1" />
          <p className="text-gray-700">
            <strong>VGOK NFTs:</strong> Limited digital collectibles to drive exclusivity and engagement.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <Users className="w-6 h-6 text-gray-500 mt-1" />
          <p className="text-gray-700">
            <strong>Community Forum:</strong> A decentralized hub for updates, governance, and user collaboration.
          </p>
        </div>
      </div>
    </div>
  </section>
    // <section className="section-bg py-16 px-6 md:px-12 lg:px-24">
    //     <div className="max-w-6xl mx-auto text-center">
    //       <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
    //         Explore <span className="text-secondary">Core Components</span>
    //       </h2>
    //       <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fade-in-delay">
    //         The VGOK ecosystem is built on two powerful pillars — VGOK for transaction security, and the VGOK blockchain framework for powering digital utility, NFTs, and decentralized community governance.
    //       </p>
    //     </div>

    //     <div className="mt-16 m-auto grid gap-8 md:grid-cols-2">
    //       {/* VGOK Platform */}
    //       <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in-scale">
    //         <div className="flex items-start gap-4">
    //           <Server className="text-primary w-8 h-8" />
    //           <div>
    //             <h3 className="text-xl font-semibold text-gray-800">VGOK Platform</h3>
    //             <p className="text-gray-600 mt-2">
    //               <strong>Secure Marketplace:</strong> A trusted environment for buyers, sellers, and consultants to connect.
    //             </p>
    //             <p className="text-gray-600 mt-2">
    //               <strong>Smart Contract Guarantees:</strong> Blockchain-based protection to ensure reliable and fraud-free transactions.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* VGOK Ecosystem */}
    //       <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in-scale delay-200">
    //         <div className="flex items-start gap-4">
    //           <Coins className="text-secondary w-8 h-8" />
    //           <div>
    //             <h3 className="text-xl font-semibold text-gray-800">VGOK Ecosystem</h3>
    //             <p className="text-gray-600 mt-2">
    //               <strong>VGOK Tokens:</strong> Utility tokens on the Solana blockchain powering payments, rewards, and services.
    //             </p>
    //             <p className="text-gray-600 mt-2">
    //               <strong>VGOK NFTs:</strong> Limited digital collectibles to drive exclusivity and engagement.
    //             </p>
    //             <p className="text-gray-600 mt-2">
    //               <strong>Community Forum:</strong> A decentralized hub for updates, governance, and user collaboration.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
  );
};

export default CoreComponents;
