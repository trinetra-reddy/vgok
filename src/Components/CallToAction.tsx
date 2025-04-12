const CallToAction = () => {
    return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white text-center py-24 px-6 md:px-12 lg:px-24" data-aos="zoom-in">
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Ready to Join the <span className="text-black/80">Future of Digital Trust?</span>
      </h2>
      <p className="text-lg md:text-xl text-white/90">
        Become a part of the VGOK revolution. Secure your digital interactions, invest in NFTs, and drive the future of decentralized finance.
      </p>
      <div className="mt-8">
        <a
          href="#get-started"
          className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started with VGOK
        </a>
      </div>
    </div>
  </section>
    )
}

export default CallToAction;