import HeroImage from '../assets/hero.jpg';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
      <section className="py-16 md:py-20 md:min-h-[650px] bg-primary text-gray-800 px-4 md:px-16 flex flex-col md:flex-row items-center gap-10 justify-between">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-widest text-secondary mb-4">Trusted Financial Assurance</p>
          <h1 className="text-7xl font-bold text-white mb-6">Guarantee Your Deals with Confidence</h1>
          <p className="text-lg text-white">
            VGuarantee empowers professionals to make secure transactions with mutual trust and assurance in the digital age.
          </p>
          <Link
              key="Forum"
              to="/forum"
              className="transition-colors transition-bg border border-secondary p-4 inline-block mt-6 bg-secondary text-white"
            >
                Explore More
            </Link>
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