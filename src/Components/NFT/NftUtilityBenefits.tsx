

const NftUtilityBenefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
          Utility & Benefits for NFT Holders
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🎁",
              title: "Exclusive Discounts",
              desc: "Special pricing on platform services and premium content."
            },
            {
              icon: "🚀",
              title: "Priority Access",
              desc: "Early entry to new projects, research reports, and exclusive releases."
            },
            {
              icon: "🤝",
              title: "Community Participation",
              desc: "Influence project development, decision-making, and governance."
            },
            {
              icon: "🔒",
              title: "Private Community Access",
              desc: "Invitations to exclusive Discord channels, AMAs, and expert Q&As."
            },
            {
              icon: "💎",
              title: "Airdrops & Rewards",
              desc: "Potential token airdrops, staking rewards, and NFT upgrades."
            },
            {
              icon: "🎉",
              title: "Raffles & Contests",
              desc: "Opportunities to win NFTs, crypto rewards, and merchandise."
            },
            {
              icon: "🛍️",
              title: "Merchandise & Digital Goods",
              desc: "Access to exclusive VGOK-themed apparel, books, and collectibles."
            },
            {
              icon: "📢",
              title: "Token Launch Notifications",
              desc: "Get updates on token launches and platform expansions."
            },
            {
              icon: "🎯",
              title: "Referral Bonus",
              desc: "NFT holders enjoy 100% discount on their first transaction."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NftUtilityBenefits;
