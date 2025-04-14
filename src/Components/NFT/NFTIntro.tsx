import { BookOpen, Star, Brain, Globe2 } from "lucide-react";

const NFTIntro: React.FC = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow Text */}
        <p className="uppercase text-sm tracking-widest font-semibold mb-2">
          Discover the Hidden Knowledge
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-10 drop-shadow">
          VGOK NFT Whitepaper
        </h1>

        {/* Main Paragraph */}
        <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-12 drop-shadow">
          <strong>V Gates of Knowledge (VGOK) NFT</strong> is an innovative digital asset collection inspired by the mysteries of the Anunnaki, the Old and New Testaments, secret societies, conspiracies, extraterrestrial phenomena, Zodiac, Astrology, Witchcraft, and more.
          <br /><br />
          Designed for collectors, researchers, and enthusiasts, VGOK NFTs provide a gateway to hidden knowledge, historical mysteries, and intellectual discovery. Our mission is to promote learning, foster exploration, and build an engaged community around esoteric wisdom and digital ownership.
        </p>

        {/* Icon Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
            <BookOpen className="w-12 h-12 text-white mb-3" />
            <p className="text-white text-sm font-medium">Scriptural Mysteries</p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
            <Star className="w-12 h-12 text-white mb-3" />
            <p className="text-white text-sm font-medium">Zodiac & Astrology</p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
            <Brain className="w-12 h-12 text-white mb-3" />
            <p className="text-white text-sm font-medium">Esoteric Knowledge</p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="400">
            <Globe2 className="w-12 h-12 text-white mb-3" />
            <p className="text-white text-sm font-medium">Extraterrestrial Theories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTIntro;

// import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { BookOpen, Star, Brain, Globe2 } from "lucide-react";

// AOS.init();

// const NFTIntro: React.FC = () => {
//   return (
//     <section className="relative py-20 px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Eyebrow Text */}
//         <p className="uppercase text-sm tracking-widest font-semibold mb-2">
//           Discover the Hidden Knowledge
//         </p>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-10 drop-shadow">
//           VGOK NFT Whitepaper
//         </h1>

//         {/* Main Paragraph */}
//         <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-12 drop-shadow">
//           <strong>V Gates of Knowledge (VGOK) NFT</strong> is an innovative digital asset collection inspired by the mysteries of the Anunnaki, the Old and New Testaments, secret societies, conspiracies, extraterrestrial phenomena, Zodiac, Astrology, Witchcraft, and more.
//           <br /><br />
//           Designed for collectors, researchers, and enthusiasts, VGOK NFTs provide a gateway to hidden knowledge, historical mysteries, and intellectual discovery. Our mission is to promote learning, foster exploration, and build an engaged community around esoteric wisdom and digital ownership.
//         </p>

//         {/* Icon Highlights */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
//           <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
//             <BookOpen className="w-12 h-12 text-white mb-3" />
//             <p className="text-white text-sm font-medium">Scriptural Mysteries</p>
//           </div>

//           <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
//             <Star className="w-12 h-12 text-white mb-3" />
//             <p className="text-white text-sm font-medium">Zodiac & Astrology</p>
//           </div>

//           <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
//             <Brain className="w-12 h-12 text-white mb-3" />
//             <p className="text-white text-sm font-medium">Esoteric Knowledge</p>
//           </div>

//           <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="400">
//             <Globe2 className="w-12 h-12 text-white mb-3" />
//             <p className="text-white text-sm font-medium">Extraterrestrial Theories</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NFTIntro;
