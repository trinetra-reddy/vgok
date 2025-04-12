import guaranteeImg from "https://source.unsplash.com/featured/?security,contract";

const GuaranteeServices = () => {
  return (
    <section className="bg-forumLightGray py-12 px-4 md:px-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">Guarantee Services</h2>
          <div className="space-y-4 text-lg">
            <p>
              We provide an online guarantee service that ensures commitment and accountability in transactions:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Mutual Guarantee:</strong> Both parties deposit a guarantee to secure performance.</li>
              <li><strong>Buyer Guarantee:</strong> The buyer deposits a guarantee to confirm commitment and ensure execution.</li>
            </ul>
            <p>
              VGuarantee safeguards your investments and transactions for secure and efficient deal closures.
            </p>
          </div>
        </div>
        <img src={guaranteeImg} alt="Guarantee Services" className="rounded-2xl shadow-md" />
      </div>
    </section>
  );
};

export default GuaranteeServices;