const NewTestamentSection = () => {
  return (
    <section className="section-bg text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Textual Content on the Left */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold leading-snug mb-4"
            data-aos="fade-right"
          >
            The New Testament –{" "}
            <span className="text-secondary">The Path to Enlightenment</span>
          </h2>

          <p
            className="text-lg text-gray-800 mb-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <strong className="text-secondary">VGOK: The New Testament Bible NFTs ✨</strong>
            <br />
            Faith, prophecy, and enlightenment—these sacred concepts are woven into the VGOK New
            Testament NFTs. Hidden within the blockchain lies a divine mystery waiting to be
            revealed.
          </p>

          <p
            className="text-gray-700 mb-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Some believe these NFTs contain timeless spiritual teachings, while others see them as a
            modern symbol of faith in the digital age.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="inline-block bg-secondary text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition">
              👉 Only NFT holders will discover the deeper meaning.
              <br />
              <span className="italic text-sm text-white/80">Will you seek the truth?</span>
            </div>
          </div>
        </div>

        {/* Icon or Illustration on the Right */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <div className="w-full h-72 md:h-96 bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center text-6xl text-secondary">
            ✨
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTestamentSection;
