import CallToAction from "../Components/CallToAction";
import DeflationaryMeasures from "../Components/Token/DeflationaryMeasures";
import ReleaseSchedule from "../Components/Token/ReleaseSchedule";
import TokenDistribution from "../Components/Token/TokenDistribution";
import TokenomicsOverview from "../Components/Token/TokenomicsOverview";
import TokenomicsRoadMap from "../Components/Token/TokenomicsRoadMap";
import UtilityAndUsecase from "../Components/Token/UtilityAndUsecase";

const Tokenomics = () => {
  return (
    <>
      <TokenomicsOverview />
      <TokenDistribution/>
      <UtilityAndUsecase/>
      <ReleaseSchedule/>
      <DeflationaryMeasures/>
      <CallToAction />
      <TokenomicsRoadMap />
      <section
        className="bg-gradient-to-r from-primary to-secondary text-white text-center py-24 px-6 md:px-12 lg:px-24"
        data-aos="zoom-in"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            VGOK: The Future of Secure Digital Transactions
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            VGOK is more than just a token—it is a fundamental pillar of a
            secure, knowledge-driven, and blockchain-powered financial
            ecosystem. With a robust tokenomics model, strong deflationary
            mechanisms, and strategic roadmap, VGOK is set to redefine digital
            transactions and marketplace security.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-lg md:text-xl text-white/90">
              🔗 Learn More:{" "}
              <a href="https://VGOK.org" className="underline">
                VGOK.org
              </a>{" "}
              |{" "}
              <a href="https://VGOK.org" className="underline">
                VGOK.org
              </a>
            </p>
            <p className="text-lg md:text-xl text-white/90">
              🚀 Join the VGOK movement and be part of the future of
              decentralized finance!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
