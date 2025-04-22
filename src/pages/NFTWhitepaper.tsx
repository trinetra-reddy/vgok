import NFTIntro from "../Components/NFT/NFTIntro";
import VisionMission from "../Components/NFT/VisionMission";
import NftCollectionTokenomics from "../Components/NFT/NftCollectionTokenomics";
import PurposeOfVGOK from "../Components/NFT/PurposeOfVGOK";
import NftUtilityBenefits from "../Components/NFT/NftUtilityBenefits";
import NFTRoadmapSection from "../Components/NFT/NFTRoadmapSection";
import SecurityTransparencySection from "../Components/NFT/SecurityTransparencySection";
import LegalDisclaimerSection from "../Components/NFT/LegalDisclaimerSection";
import NftWhitePapersConclusion from "../Components/NFT/NftWhitePapersConclusion";

const NFTWhitepaper = () => {
  return (
    <main>
      <NFTIntro />
      <VisionMission/>
      <NftCollectionTokenomics/>
      <PurposeOfVGOK/>
      <NftUtilityBenefits/>
      <NFTRoadmapSection/>
      <SecurityTransparencySection/>
      <LegalDisclaimerSection/>
      <NftWhitePapersConclusion/>
    </main>
  );
};

export default NFTWhitepaper;
