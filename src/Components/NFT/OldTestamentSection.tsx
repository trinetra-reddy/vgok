const OldTestamentSection = () => {
  return (
    <section className="section-bg text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Graphic or Icon on the Left */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <div className="w-full h-72 md:h-96 bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center text-6xl text-secondary">
            📜
          </div>
        </div>

        {/* Textual Content on the Right */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold leading-snug mb-4"
            data-aos="fade-left"
          >
            The Old Testament –{" "}
            <span className="text-secondary">Ancient Prophecies & Divine Laws</span>
          </h2>

          <p
            className="text-lg text-gray-800 mb-6"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <strong className="text-secondary">VGOK: The Old Testament Bible NFTs 📜</strong>
            <br />
            From the dawn of time, divine laws and sacred prophecies have guided humanity. The VGOK
            Old Testament NFTs hold encrypted messages from ancient texts, prophetic wisdom, and
            lost spiritual knowledge.
          </p>

          <p
            className="text-gray-700 mb-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Could these NFTs be a bridge to ancient truths, or are they simply a digital testament
            of faith?
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="inline-block bg-secondary text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition">
              👉 Only those who hold one will unlock the mysteries of creation.
              <br />
              <span className="italic text-sm text-white/80">Are you among the chosen?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldTestamentSection;
