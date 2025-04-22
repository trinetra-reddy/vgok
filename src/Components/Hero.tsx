import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import HeroImage from '../assets/hero.jpg';
import TokenImage from '../assets/Token.png';
import ForumImage from '../assets/FORUM.jpg';

import { Link } from "react-router-dom";
const heroData = [
  {
    title: "Why Buy a VGOK NFT?",
    description:
      "Immerse yourself in the VGOK NFT Collection, where each piece is a gateway to ancient mysteries and esoteric knowledge, encompassing categories like digital art, collectibles, and utility NFTs. Beyond owning unique digital assets, you can participate in our referral program to earn rewards, including chances to win international trips, iPhones, Samsung devices, iPad Air, Seiko watches, and exclusive VGOK merchandise.",
    link: "https://t.me/vgok_nft",
    image: HeroImage,
    CTAName: "Explore More",
  },
  {
    title: "VGOK Token: Empowering the Future of Digital Finance",
    description:
      "VGOK Token is at the forefront of a revolutionary ecosystem, seamlessly integrating finance, gaming, digital assets, and trading. Designed to provide users with unparalleled opportunities, VGOK offers a versatile platform for engaging in financial deals and exploring the dynamic world of digital assets.",
    description2:
      "Key Highlights: Innovative Ecosystem, Diverse Applications, Rewarding Opportunities",
    link: "token",
    CTAName: "Join us",
    image: TokenImage,
    linkType: 'route'
  },
  {
    title: "What is VGOK forum?",
    description:"Join the VGOK Forum: Connect, Learn, and Prosper",
    description2:"Discover VGOK's multi-category community—your gateway to learning, networking, and conducting transactions securely and for free. Our platform offers guaranteed services to protect you from scammers and time-wasters. User-friendly platform and accessible worldwide, VGOK is open to all. Start connecting with VGOK members today.",
    linkType: 'route',
    link: "forum",
    CTAName: "Join us",
    image: ForumImage,
  },
];

const Hero = () => {
  return (
    <section className="bg-[#000417] text-white flex items-center">
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
                  <h1 className="text-5xl font-bold text-white mb-6">{hero.title}</h1>
                  <p className="text-lg text-white">{hero.description}</p>
                  {hero.description2 && <p className="text-lg text-white mt-2">{hero.description2}</p>}
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
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>
        </SwiperSlide>
      ))}

      {/* Custom arrows */}
      <div className="custom-swiper-button-prev absolute top-1/2 -left-0 transform -translate-y-1/2 bg-[#13ca82] text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-[#10b176] z-10">
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
      <div className="custom-swiper-button-next absolute top-1/2 -right-0 transform -translate-y-1/2 bg-[#13ca82] text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-[#10b176] z-10">
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
