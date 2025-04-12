import nftImg from "https://source.unsplash.com/featured/?nft,art";

const NFTSection = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">VGOK NFTs</h2>
          <div className="space-y-4 text-lg">
            <p>
              VGOK presents a series of NFTs inspired by historical and mythological narratives. These NFTs embody ancient wisdom and are crafted in Classical, Majestic, Dreamlike, and Mystical artistic styles.
            </p>
            <ul className="list-disc pl-6">
              <li>50% discount on our guarantee platform service fees with each NFT purchase.</li>
              <li>666 NFTs issued, with 100 reserved for referrals and bonuses.</li>
              <li>Referral NFT bonus grants 100% discount on first transaction.</li>
            </ul>
          </div>
        </div>
        <img src={nftImg} alt="VGOK NFTs" className="rounded-2xl shadow-md" />
      </div>
    </section>
  );
};

export default NFTSection;