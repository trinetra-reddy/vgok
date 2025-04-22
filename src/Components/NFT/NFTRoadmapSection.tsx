import { CheckCircle } from 'lucide-react';

const NFTRoadmapSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Roadmap & Future Plans
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Our strategic roadmap outlines a phased approach to continuous development and community growth.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Phase 1 */}
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-primary">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Phase 1: Launch & Community Building</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1" /> Official VGOK NFT collection release.</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1" /> Marketing campaigns, giveaways, contests, and referral programs.</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1" /> Community engagement via social media, Discord, and interactive discussions.</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-secondary">
            <h2 className="text-2xl font-semibold text-primary mb-4">Phase 2: Utility & Platform Expansion</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle className="text-secondary mt-1" /> Development of an exclusive knowledge-sharing platform for NFT holders.</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-secondary mt-1" /> Introduction of premium content, research reports, and discussion forums.</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-secondary mt-1" /> Special discounts and perks for NFT holders.</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-primary">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Phase 3: Advanced Features & Web3 Integration</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1" /> Implementation of staking mechanisms and rewards for NFT holders.</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1" /> Exploration of Metaverse integration and interactive experiences.</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1" /> Collaborations with researchers, historians, and digital artists.</li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div className="bg-white rounded-2xl shadow p-6 border-t-4 border-secondary">
            <h2 className="text-2xl font-semibold text-primary mb-4">Phase 4: Expansion & Long-Term Development</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle className="text-secondary mt-1" /> Real-world applications, including VIP access to exclusive physical events.</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-secondary mt-1" /> Expansion of the VGOK ecosystem with new NFT collections and DAO governance.</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-secondary mt-1" /> Continuous platform security enhancements and technological innovations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTRoadmapSection;
