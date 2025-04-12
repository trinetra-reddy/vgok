import CallToAction from "../Components/CallToAction";
import CoreComponents from "../Components/Token/CoreComponents";
import WhitePaperRoadMap from "../Components/Token/WhitePaperRoadMap";
import WhitePaperIntro from "../Components/Token/WhitePaperIntro";

export default function VGOKWhitepaperPage() {
  return (
    <>
      {/* Introduction - Hero Style */}
      <WhitePaperIntro />
      <CoreComponents />
      <CallToAction />
      <WhitePaperRoadMap />
      {/* Conclusion */}
      <section
        className="bg-gradient-to-l from-primary to-secondary text-white text-center py-24 px-6 md:px-12 lg:px-24"
        data-aos="zoom-in"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            VGOK – Pioneering the Future of Secure Digital Transactions
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            VGOK is revolutionizing secure digital transactions by integrating
            blockchain technology with real-world financial solutions. Our
            strategic roadmap ensures a scalable, secure, and user-friendly
            ecosystem, built on trust, innovation, and transparency.
          </p>
          <p className="text-lg md:text-xl text-white/90">
            This white paper serves as a comprehensive guide for stakeholders,
            investors, and users, outlining our commitment to revolutionizing
            financial security and marketplace transactions.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-white/90 text-lg">
              🔗{" "}
              <a
                href="https://VGOK.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Explore More: VGOK.org | VGuarantee.org
              </a>
            </p>
            <p className="text-white/90 text-lg">
              🚀 Join the movement. Shape the future.
            </p>
            <a
              href="#join-us"
              className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started with VGOK
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
