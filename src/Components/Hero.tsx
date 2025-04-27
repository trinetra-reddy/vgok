import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import NFTImage from '../assets/nft/slide3.jpg';
import TokenImage from '../assets/token/Slide1.png';
import ForumImage from '../assets/forum/slideforum3.jpg';

import { Link } from "react-router-dom";
const heroData = [
  {
    title: "Why Buy a VGOK NFT?",
    description: "Unlock ancient mysteries through VGOK’s digital art, collectibles, and utility NFTs. Earn rewards via our referral program, including trips, top tech devices, Seiko watches, and exclusive VGOK merchandise.",
    link: "https://t.me/vgok_nft",
    image: NFTImage,
    CTAName: "Explore More",
  },
  {
    title: "What is VGOK Token?",
    description:
      "VGOK Token powers a revolutionary ecosystem combining finance, gaming, digital assets, and trading.",
    description2:
      "Key Highlights: Innovative Ecosystem | Diverse Applications | Rewarding Opportunities",
    link: "token",
    CTAName: "Join us",
    image: TokenImage,
    linkType: 'route'
  },
  {
    title: "What is VGOK forum?",
    description:"VGOK Forum is a global, multi-category platform to learn, network, and transact securely for free, protected by guaranteed services against scams. Accessible worldwide, it’s your gateway to connect and grow with the VGOK community.",
    linkType: 'route',
    link: "forum",
    CTAName: "Join us",
    image: ForumImage,
  },
];

const Hero = () => {
  return (
    <section className="bg-white text-black flex items-center">
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="relative"
    >
      {/* Slides */}
      {heroData.map((hero, index) => (
        <SwiperSlide key={index}>
            <div className="py-16 md:py-20 px-4 md:px-16 flex flex-col md:flex-row items-center gap-10 justify-between">
                <div className="max-w-xl">
                  <h1 className="text-5xl font-bold text-black mb-6">{hero.title}</h1>
                  <p className="text-lg text-black">{hero.description}</p>
                  {hero.description2 && <p className="text-lg text-black mt-2">{hero.description2}</p>}
                  {hero.linkType !== 'route' && <a
                    href={hero.link}
                    target="_blank"
                    className="transition-colors transition-bg border border-secondary p-4 inline-block mt-6 bg-secondary text-white min-w-[160px] text-center"
                  >
                    {hero.CTAName}
                  </a>}
                  {hero.linkType === 'route' && <Link
                            key={hero.link}
                            to={hero.link}
                    target="_blank"
                    className="transition-colors transition-bg border border-secondary p-4 inline-block mt-6 bg-secondary text-white min-w-[160px] text-center"
                  >
                    {hero.CTAName}
                  </Link>}
                </div>
                <img
                  src={hero.image}
                  alt="Hero Illustration"
                  className="w-full max-w-md rounded-2xl"
                />
              </div>
        </SwiperSlide>
      ))}

      {/* Custom arrows */}
      <div className="custom-swiper-button-prev absolute top-1/2 -left-0 transform -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-teritory z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="custom-swiper-button-next absolute top-1/2 -right-0 transform -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-teritory z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Swiper>
    </section>

  );
};

export default Hero;
