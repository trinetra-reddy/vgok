
const AboutVGOKArts = () => {
  return (
    <section className="section-bg text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8" data-aos="fade-up">
          About <span className="text-primary">VGOK Arts & NFTs</span> — Securing Authentic Art Worldwide
        </h2>

        <p className="text-lg text-gray-800 mb-12" data-aos="fade-up" data-aos-delay="100">
          VGOK Arts & NFTs is a trusted platform connecting physical art with NFTs through secure, blockchain-verified transactions.
          Artists can sell real paintings paired with NFTs, ensuring proof of ownership and earning royalties safely.
        </p>

        <div className="grid gap-10 md:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
          {/* Secure Transactions */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-4xl mb-4">🔒💳</div>
            <h3 className="text-xl font-semibold mb-3">Secure Transactions</h3>
            <p className="text-gray-700">
              VGOK acts as a transparent intermediary, guaranteeing safe, scam-free deals for both artists and collectors.
            </p>
          </div>

          {/* Empowering Global Artists */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-4xl mb-4">🎨🌍
            </div>
            <h3 className="text-xl font-semibold mb-3">Empowering Global Artists</h3>
            <p className="text-gray-700">
              We offer a platform for talented, often undiscovered artists to showcase their work to a global audience and grow their careers.
            </p>
          </div>

          {/* Community & Competitions */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-4xl mb-4">🤝🏆
            </div>
            <h3 className="text-xl font-semibold mb-3">Community & Competitions</h3>
            <p className="text-gray-700">
              Join a worldwide network of artists, participate in global competitions, and gain international recognition through VGOK.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVGOKArts;
