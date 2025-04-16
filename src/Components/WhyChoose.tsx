// import whyChooseImg from "https://source.unsplash.com/featured/?trust,teamwork";

const WhyChoose = () => {
  return (
    <section className="section-bg py-16 px-6 md:px-12 lg:px-24">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
        Why Choose <span className="text-secondary">VGOK</span>?
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fade-in-delay">
        In today’s digital landscape, countless transactions fail due to unreliable partners,
        scams, and misleading promises. VGOK eliminates these risks by connecting
        serious professionals and ensuring secure transactions.
      </p>
    </div>
  
    <div className="mt-16 m-auto grid gap-8 md:grid-cols-2">
      {/* <!-- Card 1 --> */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in-scale">
        <div className="flex items-start gap-4">
          <div className="text-blue-600 text-3xl">💼</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Example 1: Commitment Check</h3>
            <p className="text-gray-600 mt-2">
              Negotiating a multi-million-dollar deal? If your client won't deposit a modest guarantee,
              it might signal a lack of seriousness or reliability.
            </p>
          </div>
        </div>
      </div>
  
      {/* <!-- Card 2 --> */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in-scale delay-200">
        <div className="flex items-start gap-4">
          <div className="text-yellow-500 text-3xl">⚠️</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Example 2: Payment Risk</h3>
            <p className="text-gray-600 mt-2">
              Paying upfront without escrow protection? You're risking it all — some providers vanish
              post-payment. VGOK ensures accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    {/* <!-- Final Message --> */}
    <div className="mt-16 text-center max-w-3xl mx-auto text-gray-700 animate-fade-in-delay-2">
      <p className="text-lg">
        Since 2018, online scams have surged. Verifying trust and accountability is no longer optional —
        it’s essential. VGOK is built for professionals who value <strong>security</strong>, <strong>transparency</strong>, and <strong>performance</strong>.
      </p>
    </div>
  </section>
  
  );
};

export default WhyChoose;
