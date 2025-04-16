import NFT from '../assets/nft.jpg';

const NFTSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
  <div className="max-w-7xl mx-auto relative z-10">

    {/* <!-- Title --> */}
    <div className="text-center mb-16" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-primary">
        VGOK NFTs – Unlock the Hidden Knowledge
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Channel myth, mysticism & cosmic wisdom into limited digital artifacts.
      </p>
    </div>

    {/* <!-- Layout --> */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      
      {/* <!-- NFT Preview with Tilt --> */}
      <div className="relative group transform-gpu transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]" data-aos="fade-right">
        <div className="bg-white/5 border border-primary rounded-3xl shadow-xl p-6 backdrop-blur-md">
          <img src={NFT} alt="VGOK NFT Preview"
               className="rounded-2xl shadow-lg ring-2 ring-primary" />
          <p className="text-sm text-primary mt-4 text-center italic">One of the 666 limited VGOK artifacts</p>
        </div>
      </div>

      {/* <!-- Content + Benefits --> */}
      <div className="space-y-12">
        {/* <!-- Inspired Themes --> */}
        <div className="bg-white/5 p-6 rounded-3xl border border-primary shadow-lg backdrop-blur-md" data-aos="fade-left">
          <h3 className="text-2xl font-bold text-primary mb-3">🔮 Inspired Themes</h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-200">
            <li><strong>Anunnaki:</strong> Ancient gods & celestial rulers</li>
            <li><strong>Biblical Prophecies:</strong> Hidden sacred texts</li>
            <li><strong>Secret Societies:</strong> Illuminati lore</li>
            <li><strong>Aliens:</strong> Cosmic relics & artifacts</li>
            <li><strong>Zodiac:</strong> Celestial influence</li>
            <li><strong>Mysticism:</strong> Unseen arcane forces</li>
          </ul>
        </div>

        {/* <!-- Benefits --> */}
        <div className="bg-white/5 p-6 rounded-3xl border border-secondary shadow-lg backdrop-blur-md transform-gpu transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02]" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-secondary mb-3">🪙 NFT Benefits</h3>
          <ul className="list-none space-y-3 text-gray-100">
            <li><span className="text-secondary">⚡</span> 50% Off VGOK service fees</li>
            <li><span className="text-secondary">🔥</span> Only 666 NFTs (rare)</li>
            <li><span className="text-secondary">🎁</span> 100 reserved for bonuses</li>
            <li><span className="text-secondary">🎉</span> 100% off first deal (referral bonus)</li>
            <li><span className="text-secondary">🌐</span> View on 
              <a href="#" className="underline hover:text-white text-secondary">Rarible</a> & 
              <a href="#" className="underline hover:text-white text-secondary">OpenSea</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>

  {/* <!-- Animated Backgrounds --> */}
  <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
  <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl rotate-45 animate-pulse-slow"></div>
</section>


  );
};

export default NFTSection;