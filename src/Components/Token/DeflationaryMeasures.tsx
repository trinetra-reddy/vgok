import {
    Lock,
    Repeat,
    ShieldCheck,
  } from 'lucide-react';

const DeflationaryMeasures = () => {
    return (
//         <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
//   <div className="max-w-6xl mx-auto text-center">
//     <h2 className="text-4xl font-bold text-gray-900 mb-6">Deflationary Measures</h2>
//     <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
//       VGOK implements several deflationary mechanisms designed to increase the long-term value of the token and reduce its circulating supply, creating scarcity and ensuring greater stability:
//     </p>
//   </div>

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//     {/* Token Buyback & Burn */}
//     <div className="bg-white p-6 rounded-xl border-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
//       <div className="flex items-center justify-between">
//         <div className="text-4xl text-blue-500">
//           <Repeat />
//         </div>
//         <p className="text-xl font-semibold text-blue-500">Token Buyback & Burn</p>
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Token Buyback & Burn</h3>
//       <p className="text-gray-600">A portion of platform fees will be used to buy back and burn VGOK tokens, reducing supply and enhancing scarcity.</p>
//     </div>

//     {/* Staking Rewards with Locking Mechanism */}
//     <div className="bg-white p-6 rounded-xl border-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
//       <div className="flex items-center justify-between">
//         <div className="text-4xl text-green-500">
//           <ShieldCheck />
//         </div>
//         <p className="text-xl font-semibold text-green-500">Staking Rewards with Locking</p>
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Staking Rewards with Locking Mechanism</h3>
//       <p className="text-gray-600">Encourages long-term holding, locking tokens for rewards, and strengthening token stability.</p>
//     </div>

//     {/* Limited Supply */}
//     <div className="bg-white p-6 rounded-xl border-4 border-red-500 shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
//       <div className="flex items-center justify-between">
//         <div className="text-4xl text-red-500">
//           <Lock />
//         </div>
//         <p className="text-xl font-semibold text-red-500">Limited Supply</p>
//       </div>
//       <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Limited Supply</h3>
//       <p className="text-gray-600">No additional VGOK tokens will be minted beyond the fixed 1 billion supply, ensuring controlled inflation.</p>
//     </div>
//   </div>
// </section>
<section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">Deflationary Measures</h2>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
      VGOK implements several deflationary mechanisms designed to increase the long-term value of the token and reduce its circulating supply, creating scarcity and ensuring greater stability:
    </p>
  </div>

  <div className="flex flex-col items-center justify-center space-y-12 sm:flex-row sm:space-y-0 sm:space-x-12 sm:items-start">
    
    {/* Token Buyback & Burn */}
    <div className="flex flex-col items-center justify-center text-center border-t-4 border-blue-500 pt-8 space-y-6">
      <div className="text-4xl text-blue-500">
        <Repeat />
      </div>
      <p className="text-xl font-semibold text-blue-500">Token Buyback & Burn</p>
      <p className="text-gray-600">A portion of platform fees will be used to buy back and burn VGOK tokens, reducing supply and enhancing scarcity.</p>
    </div>

    {/* Arrow */}
    <div className="text-4xl text-gray-500">
      <span>&#8595;</span>
    </div>

    {/* Staking Rewards with Locking Mechanism */}
    <div className="flex flex-col items-center justify-center text-center border-t-4 border-green-500 pt-8 space-y-6">
      <div className="text-4xl text-green-500">
        <ShieldCheck />
      </div>
      <p className="text-xl font-semibold text-green-500">Staking Rewards with Locking</p>
      <p className="text-gray-600">Encourages long-term holding, locking tokens for rewards, and strengthening token stability.</p>
    </div>

    {/* Arrow */}
    <div className="text-4xl text-gray-500">
      <span>&#8595;</span>
    </div>

    {/* Limited Supply */}
    <div className="flex flex-col items-center justify-center text-center border-t-4 border-red-500 pt-8 space-y-6">
      <div className="text-4xl text-red-500">
        <Lock />
      </div>
      <p className="text-xl font-semibold text-red-500">Limited Supply</p>
      <p className="text-gray-600">No additional VGOK tokens will be minted beyond the fixed 1 billion supply, ensuring controlled inflation.</p>
    </div>
  </div>
</section>

    )
}
export default DeflationaryMeasures;