// export default function Home() {
//     return <h2 className="text-2xl font-bold text-secondary text-center">Home Page</h2>
//   }
import React from 'react';
import WhyChoose from "../Components/WhyChoose";
import Hero from '../Components/Hero';

  const Home = () => {
    return (
      <div className="bg-white text-gray-800">
        <Hero/>

        {/* Why Choose Section */}
        <WhyChoose/>      
  
        {/* Marketplace Section */}
        <section className="py-12 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Marketplace</h2>
          <p>
            VGuarantee offers a financial marketplace where users can list and explore financial products. Customers can post their offerings, and interested parties may connect directly to discuss opportunities.
          </p>
        </section>
  
        {/* Guarantee Services Section */}
        <section className="bg-forumLightGray py-12 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Guarantee Services</h2>
          <p className="mb-4">
            We provide an online guarantee service that ensures commitment and accountability in transactions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Mutual Guarantee:</strong> Both parties deposit a guarantee to secure performance.</li>
            <li><strong>Buyer Guarantee:</strong> The buyer deposits a guarantee to confirm commitment and ensure execution.</li>
          </ul>
          <p className="mt-4">
            Understanding that time is valuable and unreliable partners can lead to significant financial and professional losses, VGuarantee safeguards your investments and transactions for secure and efficient deal closures.
          </p>
        </section>
  
        {/* VGOK NFTs Section */}
        <section className="py-12 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-primary mb-4">VGOK NFTs</h2>
          <p className="mb-4">
            V Gates of Knowledge (VGOK) presents a series of NFTs inspired by historical and mythological narratives—including the Anunnaki, the Old Testament, the New Testament, secret societies, conspiracies, and extraterrestrial themes.
          </p>
          <p className="mb-4">
            These NFTs embody ancient wisdom and are crafted in Classical, Majestic, Dreamlike, and Mystical artistic styles.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Each NFT purchase grants a 50% discount on our guarantee platform service fees.</li>
            <li>666 NFTs will be issued, with 100 reserved for referrals and special bonuses.</li>
            <li>Referral bonus NFT holders receive a 100% discount on their first transaction.</li>
          </ul>
        </section>
  
        {/* VGOK Tokens Section */}
        <section className="bg-forumLightGray py-12 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-primary mb-4">VGOK Tokens</h2>
          <p>
            V Gates of Knowledge (VGOK) is a cryptocurrency built on the Solana network, destined to serve as the primary transaction currency on our platform.
            Over time, VGOK will offer multiple benefits, positioning it as a game-changer for users.
          </p>
          <p className="mt-2">
            For more details, please visit the <strong>VGOK</strong> tab to explore our roadmap and whitepaper.
          </p>
        </section>
  
        {/* VGOK Forum Section */}
        <section className="py-12 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-primary mb-4">VGOK Forum</h2>
          <p className="mb-4">
            The VGOK Forum is an open platform designed for professionals engaged in financial transactions. Here, users can:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Ask questions</li>
            <li>Share insights</li>
            <li>Engage in meaningful discussions</li>
          </ul>
          <p>
            We encourage direct communication between users and key decision-makers, ensuring transparency and efficiency.
            Join us in building a trusted and dynamic ecosystem for secure transactions!
          </p>
        </section>
      </div>
    );
  };
  
  export default Home;
  