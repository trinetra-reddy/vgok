const AboutUs = () => {
  return (
    <section className="section-bg py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-[var(--animation-fade-in)]">
          About <span className="text-secondary">VGOK</span> – Ensuring Secure
          Transactions
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-[var(--animation-fade-in-delay)]">
          VGOK is a trusted platform dedicated to safeguarding digital
          transactions and protecting users from fraud. As a secure
          intermediary, we facilitate safe and reliable exchanges, particularly
          when dealing with unknown parties.
        </p>
      </div>

      {/* <!-- Icon with Value Highlights --> */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center animate-[var(--animation-fade-in-scale)]">
          <div className="text-blue-600 text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-semibold text-gray-800">
            Secure Intermediary
          </h3>
          <p className="text-gray-600 mt-2">
            Acting as a neutral third party to ensure both sides are protected.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center animate-[var(--animation-fade-in-scale)] delay-100">
          <div className="text-green-500 text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-800">Fraud Prevention</h3>
          <p className="text-gray-600 mt-2">
            Reduces risk by verifying transactions before completion.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center animate-[var(--animation-fade-in-scale)] delay-200">
          <div className="text-yellow-500 text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold text-gray-800">Trust-Centric</h3>
          <p className="text-gray-600 mt-2">
            Enabling reliable exchanges between unfamiliar parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
