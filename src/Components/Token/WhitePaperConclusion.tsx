import { Link } from "react-router-dom";
const WhitePaperConclusion = () => {
  return (
    <section
      className="bg-gradient-to-l from-primary to-secondary text-white text-center py-24 px-6 md:px-12 lg:px-24"
      data-aos="zoom-in"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        VGOK — Shaping the Future of Secure Digital Transactions, Arts, and Gaming
        </h2>
        <p className="text-lg md:text-xl text-white/90">
        At VGOK, we are redefining the landscape of digital transactions by seamlessly blending blockchain technology with real-world financial solutions. Our comprehensive, future-focused ecosystem is designed to deliver scalable, secure, and intuitive experiences across finance, art, and gaming. Built on the pillars of trust, innovation, and transparency, VGOK empowers users to engage with confidence in a rapidly evolving digital world.
        </p>
        <p className="text-lg md:text-xl text-white/90">
          This white paper serves as a comprehensive guide for stakeholders,
          investors, and users, outlining our commitment to revolutionizing
          financial security and marketplace transactions.
        </p>
        <div className="mt-8 space-y-4">
          <p className="text-white/90 text-lg">
            🔗{" "}
            <span> Explore More: </span>
              <a
                href="https://VGOK.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                VGOK.org
              </a>
              <span> | </span>
              <a
                href="https://VGuarantee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                 VGuarantee.org
              </a>
          </p>
          <p className="text-white/90 text-lg">
            🚀 Join the movement. Shape the future.
          </p>          
          <Link
              key="SignUP"
              to="/signup"
              className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
                Get Started with VGOK
            </Link>
        </div>
      </div>
    </section>
  );
};
export default WhitePaperConclusion;
