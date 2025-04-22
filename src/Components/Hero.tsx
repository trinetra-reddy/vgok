import HeroImage from '../assets/hero.jpg';
// import { Link } from "react-router-dom";

const Hero = () => {
    return (
      // bg-gradient-to-r from-primary to-secondary
      <section className="py-16 md:py-20 md:min-h-[650px] bg-[#000417] text-white px-4 md:px-16 flex flex-col md:flex-row items-center gap-10 justify-between">
        <div className="max-w-xl">
          {/* <p className="text-sm uppercase tracking-widest text-secondary mb-4">Trusted Financial Assurance</p> */}
          <h1 className="text-5xl font-bold text-white mb-6">Why Buy a VGOK NFT?</h1>
          <p className="text-lg text-white">
          Immerse yourself in the VGOK NFT Collection, where each piece is a gateway to ancient mysteries and esoteric knowledge, encompassing categories like digital art, collectibles, and utility NFTs. Beyond owning unique digital assets, you can participate in our referral program to earn rewards, including chances to win international trips, iPhones, Samsung devices, iPad Air, Seiko watches, and exclusive VGOK merchandise.
          </p>
          <a href="https://t.me/vgok_nft" target="_blank" 
          className="transition-colors transition-bg border border-secondary p-4 inline-block mt-6 bg-secondary text-white">
            Explore More
          </a>
          {/* <Link
              key="Forum"
              to="/forum"
              className="transition-colors transition-bg border border-secondary p-4 inline-block mt-6 bg-secondary text-white"
            >
                Explore More
            </Link> */}
        </div>
        <img
          src={HeroImage}
          alt="Hero Illustration"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </section>
    );
  };
  
  export default Hero;