
import { Lightbulb, Rocket, ShieldCheck, PenTool } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow Text */}
        <p className="uppercase text-sm tracking-widest font-semibold text-secondary mb-2">
          Our Purpose
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
          Project Vision & Mission
        </h2>

        {/* Vision Block */}
        <div
          className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl shadow-md mb-14"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-left">
            <Lightbulb className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Vision</h3>
              <p className="text-base text-gray-700">
                To establish <strong>VGOK NFT</strong> as a leading knowledge-driven ecosystem, promoting intellectual curiosity, historical exploration, and digital asset innovation while cultivating a community of thinkers, learners, and visionaries.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-start gap-4">
            <PenTool className="w-8 h-8 text-secondary mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">Integrate Art, History & Cryptography</h4>
              <p>Develop an immersive NFT project combining artistic expression with historical and mythological narratives.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Rocket className="w-8 h-8 text-secondary mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">Deliver Tangible Utility</h4>
              <p>Offer NFT holders exclusive benefits, premium content, and platform access.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-secondary mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">Support R&D</h4>
              <p>Secure funding to advance technology, security, and content creation for long-term innovation.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-secondary mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">Create a Sustainable Ecosystem</h4>
              <p>Build a secure, evolving NFT platform that grows with the community’s needs and contributions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
