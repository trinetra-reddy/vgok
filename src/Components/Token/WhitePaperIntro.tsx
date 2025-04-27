import { ShieldCheck, Globe, Target, Palette } from 'lucide-react';

const WhitePaperIntro = () => {
    return (
       <section className="relative text-white section-bg px-6 py-20 space-y-32">
       <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center" data-aos="fade-up">
         <div className="space-y-6">
           <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            <span className="text-secondary">Revolutionizing </span> Secure Digital Transactions
            </h1>
           <p className="text-lg text-gray-700">
           VGOK (V Gates of Knowledge) revolutionizes digital transactions, art, gaming, and financial security with blockchain technology. Our multi-service platform offers secure online interactions and network growth.
           </p>
           <ul className="mt-6 space-y-4">
             <li className="flex items-start gap-4">
               <ShieldCheck className="text-primary w-10 h-10 mt-1" />
               <span className="text-gray-700"><strong>VGuarantee:</strong> A trust-driven marketplace offering secure transactions and smart contract-based guarantee services.</span>
             </li>
             <li className="flex items-start gap-4">
               <Globe className="text-secondary w-10 h-10 mt-1" />
               <span className="text-gray-700"><strong>VGOK:</strong> A blockchain-powered ecosystem integrating utility tokens, NFTs, and a knowledge-sharing community forum.</span>
             </li>
             <li className="flex items-start gap-4">
               <Palette className="text-secondary w-10 h-10 mt-1" />
               <span className="text-gray-700"><strong>VGOK Arts & NFTs:</strong>  A trusted marketplace empowering the art community to buy, sell, trade, gain global recognition, and expand their networks.</span>
             </li>
           </ul>
         </div>

         <div className="relative space-y-6" data-aos="zoom-in">
           <div className="flex items-center gap-4">
             <div className="bg-primary/10 p-4 rounded-full">
               <Target className="text-primary w-8 h-8" />
             </div>
             <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
           </div>
           <p className="text-gray-700 text-lg">
             Together, these platforms aim to create a transparent, secure, and efficient digital economy built on innovation and decentralized trust.
           </p>
           <div className="w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
         </div>
       </div>
     </section>
    )
}

export default WhitePaperIntro;