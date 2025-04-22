
import WhyChoose from "../Components/WhyChoose";
import Hero from '../Components/Hero';
import AboutUs from '../Components/AboutUs';
import Marketplace from '../Components/Marketplace';
import NFTSection from '../Components/NFTSection';
import TokenSection from '../Components/TokenSection';
import ForumSection from '../Components/ForumSection';
import AboutVGOK from "../Components/AboutVGOK";

  const Home = () => {
    return (
      <div className="bg-white text-gray-800">
        <Hero/>
        {/* About us Section */}
        <AboutVGOK/>
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
  