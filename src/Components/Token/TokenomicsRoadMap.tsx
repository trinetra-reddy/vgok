import {
    Infinity,
    Rocket,
    TrendingUp,
    Globe,
    Coins,
  } from 'lucide-react';

const TokenomicsRoadMap = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-gray-100 to-white text-gray-800" data-aos="fade-up">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10 text-gray-900">Roadmap</h2>
  </div>

  <div className="relative max-w-4xl mx-auto">
    <div className="absolute left-1.5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary"></div>

    {[
      {
        phase: 'Phase 1: Token Launch & Liquidity Provision',
        color: 'text-primary',
        icon: <Rocket className="text-primary w-6 h-6" />,
        delay: 0,
        points: [
          'VGOK token launch with an initial liquidity lock (6 months).',
          'Smart contract audit for security and transparency.'
        ]
      },
      {
        phase: 'Phase 2: Integration into VGuarantee Marketplace',
        color: 'text-secondary',
        icon: <Globe className="text-secondary w-6 h-6" />,
        delay: 100,
        points: [
          'VGOK tokens become the primary payment method for transactions and guarantee services.',
          'Expansion of partnerships within financial and blockchain sectors.'
        ]
      },
      {
        phase: 'Phase 3: Staking & Governance Activation',
        color: 'text-primary',
        icon: <Coins className="text-primary w-6 h-6" />,
        delay: 200,
        points: [
          'Implementation of staking rewards and community-driven governance protocols.',
          'Introduction of exclusive benefits for long-term VGOK holders.'
        ]
      },
      {
        phase: 'Phase 4: Exchange Listings & Global Expansion',
        color: 'text-secondary',
        icon: <TrendingUp className="text-secondary w-6 h-6" />,
        delay: 300,
        points: [
          'Listing VGOK on decentralized and centralized exchanges to enhance accessibility.',
          'Expanding market adoption through global marketing initiatives.'
        ]
      },
      {
        phase: 'Phase 5: Cross-Chain Interoperability & Ecosystem Growth',
        color: 'text-primary',
        icon: <Infinity className="text-primary w-6 h-6" />,
        delay: 400,
        points: [
          'Enable multi-chain functionality, improving VGOK’s utility across different blockchain networks.',
          'Further development of ecosystem services, including advanced guarantee mechanisms and NFT expansions.'
        ]
      }
    ].map((item, idx) => (
      <div
        key={idx}
        className="relative pl-14 mb-12"
        data-aos="fade-up"
        data-aos-delay={item.delay}
      >
        <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full shadow-md">
          {item.icon}
        </div>
        <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>{item.phase}</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {item.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

    )
}

export default TokenomicsRoadMap;