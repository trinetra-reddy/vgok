
import { BookOpen, Brain, Users, Rocket } from "lucide-react";

const PurposeOfVGOK = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
          Purpose of VGOK NFTs
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Knowledge Dissemination */}
          <div
            className="bg-primary/5 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-7 h-7 text-primary" />
              <h3 className="text-lg font-semibold text-gray-800">
                Knowledge Dissemination
              </h3>
            </div>
            <p className="text-gray-700">
              Each NFT unlocks access to exclusive research materials, hidden insights, and
              thought-provoking narratives rooted in history and mythology.
            </p>
          </div>

          {/* Learning & Exploration */}
          <div
            className="bg-primary/5 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-7 h-7 text-secondary" />
              <h3 className="text-lg font-semibold text-gray-800">
                Learning & Exploration
              </h3>
            </div>
            <p className="text-gray-700">
              Holders gain access to expert-curated content, deep dives into conspiracies, and a
              learning journey like no other.
            </p>
          </div>

          {/* Community Engagement */}
          <div
            className="bg-primary/5 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-7 h-7 text-primary" />
              <h3 className="text-lg font-semibold text-gray-800">
                Community Engagement
              </h3>
            </div>
            <p className="text-gray-700">
              Engage with a vibrant community through interactive events, gamified experiences, and
              discussions that challenge the mind.
            </p>
          </div>

          {/* Funding Innovation */}
          <div
            className="bg-primary/5 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-7 h-7 text-secondary" />
              <h3 className="text-lg font-semibold text-gray-800">
                Funding Innovation
              </h3>
            </div>
            <p className="text-gray-700">
              Proceeds from NFT sales support cutting-edge research, platform development, and
              future-ready technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeOfVGOK;
