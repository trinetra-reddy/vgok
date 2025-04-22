const AboutVGOK = () => {
    return (
      <section className="section-bg py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-[var(--animation-fade-in)]">
            About <span className="text-secondary">VGOK</span> – V Gates of Knowledge
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-[var(--animation-fade-in-delay)]">
            VGOK is a cutting-edge multi-service platform designed to transform financial transactions, networking, and digital assets. Our ecosystem includes:
          </p>
        </div>
  
        {/* Highlights */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center animate-[var(--animation-fade-in-scale)]">
            <div className="text-purple-600 text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-800">VGOK Forum</h3>
            <p className="text-gray-600 mt-2">
              A hub for financial knowledge, networking, and collaboration.
            </p>
          </div>
  
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center animate-[var(--animation-fade-in-scale)] delay-100">
            <div className="text-pink-500 text-4xl mb-4">🖼️</div>
            <h3 className="text-xl font-semibold text-gray-800">VGOK NFTs</h3>
            <p className="text-gray-600 mt-2">
              Unique digital assets infused with hidden wisdom and historical narratives.
            </p>
          </div>
  
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center animate-[var(--animation-fade-in-scale)] delay-200">
            <div className="text-green-500 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-800">VGOK Tokens</h3>
            <p className="text-gray-600 mt-2">
              The primary currency for secure and efficient transactions.
            </p>
          </div>
  
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center animate-[var(--animation-fade-in-scale)] delay-300">
            <div className="text-blue-500 text-4xl mb-4">📢</div>
            <h3 className="text-xl font-semibold text-gray-800">Advertising Opportunities</h3>
            <p className="text-gray-600 mt-2">
              Promote your profile, product, or company to enhance visibility and expand your global reach.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutVGOK;
  