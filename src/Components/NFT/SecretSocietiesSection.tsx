const SecretSocietiesSection = () => {
  return (
    <section className="section-bg text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Icon / Illustration on the Left */}
        <div data-aos="zoom-in">
          <div className="w-full h-72 md:h-96 bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center text-6xl text-primary">
            🔑
          </div>
        </div>

        {/* Textual Content on the Right */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold leading-snug mb-4"
            data-aos="fade-left"
          >
            Secret Societies –{" "}
            <span className="text-secondary">Unlock the Forbidden Chambers</span>
          </h2>

          <p
            className="text-lg text-gray-800 mb-6"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <strong className="text-primary">VGOK: The Secret Society NFTs 🔑</strong>
            <br />
            For centuries, hidden organizations have shaped the world in silence. The VGOK Secret
            Society NFTs grant access to a realm whispered about in ancient texts and underground
            chambers.
          </p>

          <p
            className="text-gray-700 mb-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Are these NFTs a gateway to wealth, influence, and forbidden wisdom, or merely a digital
            artifact of hidden history?
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition">
              👉 Only those who hold one will gain access to the unseen world.
              <br />
              <span className="italic text-sm text-white/80">
                Will you remain in the shadows, or step into the light?
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretSocietiesSection;
