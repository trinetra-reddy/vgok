
const AnunnakiSection = () => {
  return (
    <section className="section-bg text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold leading-snug mb-4"
            data-aos="fade-right"
          >
            The Anunnaki –{" "}
            <span className="text-secondary">The Gods Who Descended from the Stars</span>
          </h2>
          <p
            className="text-lg text-gray-800 mb-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <strong className="text-secondary">VGOK: The Anunnaki Gods NFTs 🔱</strong>
            <br />
            Legends speak of the Anunnaki, ancient deities who descended from the heavens and
            shaped human civilization. Their whispers echo through time, leaving behind sacred
            symbols, lost knowledge, and cryptic secrets.
          </p>
          <p
            className="text-gray-700 mb-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Some believe that these NFTs hold the key to unlocking forbidden truths about our
            origins. Are they mere collectibles, or do they carry the legacy of celestial rulers?
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="inline-block bg-secondary text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition">
              👉 Only NFT holders will uncover the divine connection.
              <br />
              <span className="italic text-sm text-white/80">Will you awaken to the truth?</span>
            </div>
          </div>
        </div>

        {/* Optional Placeholder Visual */}
        <div data-aos="zoom-in" data-aos-delay="400">
          <div className="w-full h-72 md:h-96 bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center text-6xl text-secondary">
            🔱
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnunnakiSection;
