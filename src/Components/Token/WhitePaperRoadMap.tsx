import {
    ShieldCheck,   
    Infinity,
    Clock3,
    Globe2,
    Wallet,
    TrendingUp
  } from 'lucide-react';
const WhitePaperRoadMap = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-gray-100 to-white text-gray-800" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-900">Roadmap</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting animated line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary animate-pulse rounded-full"></div>

          {[
            {
              phase: 'Phase 1: Concept & Development (0-3 Months)',
              color: 'text-primary',
              icon: <Clock3 className="text-primary w-6 h-6" />,
              delay: 0,
              points: [
                'Establish platform architecture and security framework.',
                'Initiate VGOK token development on the Solana blockchain.',
                'Design and develop the VGOK NFT collection, aligned with the project’s thematic vision.'
              ]
            },
            {
              phase: 'Phase 2: VGOK Website Launch (3-5 Months)',
              color: 'text-secondary',
              icon: <Globe2 className="text-secondary w-6 h-6" />,
              delay: 100,
              points: [
                'Deploy the VGOK platform, integrating token functionalities, NFTs, and a community forum.',
                'Launch initial advertising campaigns to drive platform awareness and user adoption.',
                'Enable users to purchase VGOK NFTs, supporting the project\'s fundraising and ecosystem growth.'
              ]
            },
           
            {
              phase: 'Phase 3: VGuarantee Platform Launch (5-11 Months)',
              color: 'text-primary',
              icon: <ShieldCheck className="text-primary w-6 h-6" />,
              delay: 200,
              points: [
                'Launch VGOK Marketplace, offering a secure platform for global transactions.',
                'Introduce smart contract-backed guarantee services, ensuring transaction security and risk mitigation.'
              ]
            },
            {
              phase: 'Phase 4: Token Launch (10-18 Months)',
              color: 'text-secondary',
              icon: <Wallet className="text-secondary w-6 h-6" />,
              delay: 300,
              points: [
                'List VGOK tokens on decentralized exchanges (DEXs).',
                'Establish liquidity pools and staking mechanisms for VGOK holders.'
              ]
            },
            {
              phase: 'Phase 5: Expansion & Growth (18-24 Months)',
              color: 'text-primary',
              icon: <TrendingUp className="text-primary w-6 h-6" />,
              delay: 400,
              points: [
                'Forge partnerships with key banking and financial institutions to expand adoption.',
                'Enhance VGOK token utility for payments, subscriptions, and exclusive discounts.',
                'Implement global marketing campaigns to drive user acquisition and adoption.',
                'Develop and launch a VGOK mobile application for seamless accessibility.'
              ]
            },
            {
              phase: 'Phase 6: Ecosystem Maturity (24+ Months)',
              color: 'text-secondary',
              icon: <Infinity className="text-secondary w-6 h-6" />,
              delay: 500,
              points: [
                'Expand guarantee services, leveraging VGOK tokens for secure financial transactions.',
                'Enable cross-chain compatibility for enhanced blockchain interoperability.',
                'Introduce staking rewards and community incentive programs to promote long-term engagement.'
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

export default WhitePaperRoadMap;