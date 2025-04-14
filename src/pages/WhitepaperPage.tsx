import CallToAction from "../Components/CallToAction";
import CoreComponents from "../Components/Token/CoreComponents";
import WhitePaperRoadMap from "../Components/Token/WhitePaperRoadMap";
import WhitePaperIntro from "../Components/Token/WhitePaperIntro";
import WhitePaperConclusion from "../Components/Token/WhitePaperConclusion";

export default function VGOKWhitepaperPage() {
  return (
    <>
      {/* Introduction - Hero Style */}
      <WhitePaperIntro />
      <CoreComponents />
      <CallToAction />
      <WhitePaperRoadMap />
      {/* Conclusion */}
      <WhitePaperConclusion/>
    </>
  );
}
