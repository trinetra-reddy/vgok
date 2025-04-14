
import { Users, Gift, ShoppingBag } from "lucide-react";

const NftCollectionTokenomics = () => {
  return (
    <section className="section-bg py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        {/* Eyebrow + Heading */}
        <p className="uppercase text-sm tracking-widest font-semibold text-secondary mb-2">
          Limited Edition Drop
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
          NFT Collection & Tokenomics
        </h2>

        {/* Tokenomics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-primary/5 p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="50">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-7 h-7 text-primary" />
              <h3 className="text-lg font-semibold text-gray-800">Total Supply</h3>
            </div>
            <p className="text-gray-700">666 unique NFTs in the VGOK Genesis Collection.</p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-3">
              <Gift className="w-7 h-7 text-secondary" />
              <h3 className="text-lg font-semibold text-gray-800">Community & Rewards</h3>
            </div>
            <p className="text-gray-700">
              100 NFTs allocated for referral bonuses, contests, giveaways, and marketing campaigns.
            </p>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="150">
            <div className="flex items-center gap-3 mb-3">
              <ShoppingBag className="w-7 h-7 text-primary" />
              <h3 className="text-lg font-semibold text-gray-800">Public Sale</h3>
            </div>
            <p className="text-gray-700">
              566 NFTs available for public sale to help fund development, growth, and R&D.
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg text-gray-700">
            Every VGOK NFT is a piece of art and intellect — featuring rare designs rooted in ancient
            secrets, spiritual symbolism, and forbidden knowledge. These collectibles are crafted to
            spark curiosity, fuel research, and connect seekers across the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NftCollectionTokenomics;
