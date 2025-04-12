// export default function Home() {
//     return <h2 className="text-2xl font-bold text-secondary text-center">Home Page</h2>
//   }
import React from 'react';
import WhyChoose from "../Components/WhyChoose";
import Hero from '../Components/Hero';
import AboutUs from '../Components/AboutUs';
import Marketplace from '../Components/Marketplace';
import NFTSection from '../Components/NFTSection';
import TokenSection from '../Components/TokenSection';
import ForumSection from '../Components/ForumSection';

  const Home = () => {
    return (
      <div className="bg-white text-gray-800">
        <Hero/>
        {/* About us Section */}
        <AboutUs/>
        {/* Why Choose Section */}
        <WhyChoose/>      
  
        {/* Marketplace */}
        <Marketplace/>
       
      {/* NFT Section */}
      <NFTSection/>
      
      {/* VGOK Tokens Section */}
      <TokenSection/>
      <ForumSection/>
      </div>
    );
  };
  
  export default Home;
  