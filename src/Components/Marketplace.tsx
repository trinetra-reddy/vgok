// src/components/home/Marketplace.jsx
import marketplaceImg from "https://source.unsplash.com/featured/?finance,market";

const Marketplace = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">Marketplace</h2>
          <p className="text-lg">
            VGuarantee offers a financial marketplace where users can list and explore financial products. Customers can post their offerings, and interested parties may connect directly to discuss opportunities.
          </p>
        </div>
        <img src={marketplaceImg} alt="Marketplace" className="rounded-2xl shadow-md" />
      </div>
    </section>
  );
};

export default Marketplace;