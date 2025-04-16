
const Marketplace = () => {
  return (
    <section className="section-bg py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* <!-- Title --> */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 animate-[var(--animation-fade-in)]">
            VGOK Marketplace <span className="text-secondary">&</span>{" "}
            Guarantee Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore trusted financial products and enforce security with modern
            guarantee options.
          </p>
        </div>

        {/* <!-- Marketplace and Guarantee Split --> */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* <!-- Fancy Marketplace Card --> */}
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 relative overflow-hidden animate-[var(--animation-fade-in-scale)]">
            <div className="absolute top-0 right-0 opacity-10 text-[120px] font-bold text-blue-200 leading-none pointer-events-none">
              🛍️
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Financial Marketplace
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Discover financial services, list your offerings, and connect with
              verified clients. VGOK ensures all deals are secure,
              transparent, and built on trust.
            </p>
            <div className="mt-6">
              <a href="#" className="text-secondary font-medium hover:underline">
                Browse Marketplace →
              </a>
            </div>
          </div>

          {/* <!-- Fancy Guarantee Cards --> */}
          <div className="space-y-8">
            {/* <!-- Mutual Guarantee --> */}
            <div className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all animate-[var(--animation-fade-in-scale)]">
              <div className="flex items-start gap-4">
                <div className="text-green-500 text-3xl">🔁</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Mutual Guarantee
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Both parties commit funds to ensure reliability and
                    performance. Ideal for balanced partnerships.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Buyer Guarantee --> */}
            <div className="bg-white/80 backdrop-blur-md border border-yellow-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all animate-[var(--animation-fade-in-scale)] delay-100">
              <div className="flex items-start gap-4">
                <div className="text-yellow-500 text-3xl">💰</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Buyer Guarantee
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Buyers deposit a guarantee to secure execution. Best for
                    service-based or milestone payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Why It Matters - Callout --> */}
        <div className="mt-20">
          <div className="bg-blue-50/40 border border-blue-200 rounded-3xl p-10 shadow-lg text-center max-w-4xl mx-auto animate-[var(--animation-fade-in-delay)]">
            <div className="text-4xl text-secondary mb-4">💡</div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              Why It Matters
            </h4>
            <p className="text-lg text-gray-700">
              In business, time is money — and working with unreliable partners
              can cost you more than just cash.
              <span className="font-semibold text-secondary">
                VGOK safeguards your investments
              </span>{" "}
              and creates a culture of accountability and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
