import AnunnakiSection from "../Components/NFT/AnunnakiSection"
import NewTestamentSection from "../Components/NFT/NewTestamentSection"
import NftContentHero from "../Components/NFT/NftContentHero"
import OldTestamentSection from "../Components/NFT/OldTestamentSection"
import SecretSocietiesSection from "../Components/NFT/SecretSocietiesSection"

export default function NFT() {
    return (
      <main>
        <NftContentHero/>
        <AnunnakiSection/>
        <OldTestamentSection/>
        <NewTestamentSection/>
        <SecretSocietiesSection/>
      </main>
    )
  }