const LegalDisclaimerSection = () => {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Legal Disclaimer
          </h1>
  
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            VGOK NFTs are artistic and entertainment-based digital assets. The collection is inspired by historical, mythological, and speculative themes and does not endorse or promote real-world events, ideologies, or beliefs.
          </p>
  
          <div className="text-left space-y-4 text-gray-700 text-md md:text-lg">
            <p className="font-semibold text-secondary">📌 Important Notice:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>All content is derived from publicly available sources, including books, research materials, and social media.</li>
              <li>VGOK NFTs are intended purely for intellectual exploration and digital art appreciation.</li>
              <li>By purchasing or engaging with VGOK NFTs, users acknowledge their artistic and entertainment-focused purpose.</li>
            </ul>
            <p>
              For inquiries, please contact: <span className="text-primary font-semibold">📩 </span>
              <a href="mailto:support@vgok.org" className="text-secondary underline hover:text-primary transition-colors">
              support@vgok.org
            </a>
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default LegalDisclaimerSection;
  
  