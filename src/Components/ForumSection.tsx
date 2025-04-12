const ForumSection = () => {
  return (
    <section className="section-bg py-16 px-6 md:px-20" id="vgok-forum">
    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        <span className="text-secondary">VGOK Forum </span> – Engage, Learn, and Grow
      </h2>
      <p className="text-lg text-gray-600">
        The VGOK Forum is an interactive knowledge hub where professionals can:
      </p>
    </div>

    <div className="max-w-4xl mx-auto mt-12 space-y-10">
      <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
        <span className="text-2xl">💬</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Ask Questions</h3>
          <p className="text-gray-600">
            Get expert insights and financial guidance tailored to your needs.
          </p>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
        <span className="text-2xl">📘</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Share Knowledge</h3>
          <p className="text-gray-600">
            Contribute valuable information and share your experiences with peers.
          </p>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
        <span className="text-2xl">🌐</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Network with Industry Leaders</h3>
          <p className="text-gray-600">
            Engage in meaningful discussions with key decision-makers and thought leaders.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-16 max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-delay="400">
      <p className="text-md text-gray-700 italic">
        We believe in open communication, transparency, and empowering users through direct engagement.
      </p>
    </div>
  </section>
  );
};

export default ForumSection;
