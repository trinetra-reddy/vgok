import tokenImg from "https://source.unsplash.com/featured/?blockchain,crypto";

const TokenSection = () => {
  return (
    <section className="bg-forumLightGray py-12 px-4 md:px-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">VGOK Tokens</h2>
          <p className="text-lg">
            VGOK is a cryptocurrency on the Solana network and serves as the main transaction currency on our platform. It offers various benefits and supports platform growth.
          </p>
          <p className="mt-2 text-lg">
            Visit the VGOK tab to explore our roadmap and whitepaper.
          </p>
        </div>
        <img src={tokenImg} alt="VGOK Tokens" className="rounded-2xl shadow-md" />
      </div>
    </section>
  );
};

export default TokenSection;