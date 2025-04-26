
import TheBible from '../../assets/nft/TheBible.jpg';
import Ann from '../../assets/nft/AnunnakiNFTpage.jpg';
import ConspiracyNFTpage from '../../assets/nft/ConspiracyNFTpage.jpg';
import AlienNFTpage from '../../assets/nft/AlienNFTpage.jpg';
import SecretsocietiesNFTpage from '../../assets/nft/SecretsocietiesNFTpage.jpg';
import Beyondimage from '../../assets/nft/Beyondimage.jpg';

const nftSections = [
  
  {
    title: "THE BIBLE – Ancient Prophecies & Divine Laws",
    subtitle: "Old Testament – Prophecies & Divine Laws 📜",
    description1: "Unlock sacred mysteries and encrypted messages from ancient scrolls. The VGOK Old Testament NFTs echo the wisdom of prophets, celestial laws, and forgotten spiritual codes",
    subtitle2: "New Testament – Light, Faith & Revelation",
    description2:
      "Step into a realm of enlightenment. The VGOK New Testament NFTs reflect divine teachings, spiritual rebirth, and a digital path to higher truths hidden in the blockchain.",
    cta:
      "👉 Only those who hold one will unlock the mysteries of creation. Are you among the chosen?",
    emoji: "📜",
    theme: "secondary",
    image: TheBible
  },
  {
    title: "The Anunnaki – The Gods Who Descended from the Stars",
    subtitle: "VGOK: The Anunnaki Gods NFTs 🔱",
    description1:
      "Legends speak of the Anunnaki, ancient deities who descended from the heavens and shaped human civilization. Their whispers echo through time, leaving behind sacred symbols, lost knowledge, and cryptic secrets.",
    description2:
      "Some believe that these NFTs hold the key to unlocking forbidden truths about our origins. Are they mere collectibles, or do they carry the legacy of celestial rulers?",
    cta:
      "👉 Only NFT holders will uncover the divine connection. Will you awaken to the truth?",
    emoji: "🔱",
    theme: "primary",
    image: Ann
  },
  {
    title: "Secret Societies – Unlock the Forbidden Chambers",
    subtitle: "VGOK: The Secret Society NFTs 🔑",
    description1:
      "For centuries, hidden organizations have shaped the world in silence. The VGOK Secret Society NFTs grant access to a realm whispered about in ancient texts and underground chambers.",
    description2:
      "Are these NFTs a gateway to wealth, influence, and forbidden wisdom, or merely a digital artifact of hidden history?",
    cta:
      "👉 Only those who hold one will gain access to the unseen world. Will you remain in the shadows, or step into the light?",
    emoji: "🔑",
    theme: "secondary",
    image: SecretsocietiesNFTpage
  },
  {
    title: "Extraterrestrial Mysteries – The Alien Artifacts",
    subtitle: "VGOK: The Alien Artifact NFTs 👽🛸",
    description1:
      "Some believe we are not alone. Rumors suggest that VGOK Alien NFTs are more than just digital art—they may be cosmic messages, encrypted star maps, or fragments of lost extraterrestrial technology.",
    description2:
      "Are these NFTs evidence of ancient visitors, or just theories woven into the blockchain?",
    cta:
      "👉 First contact begins now. Will you be among the first to decode the mystery?",
    emoji: "👽🛸",
    theme: "primary",
    image: AlienNFTpage
  },
  {
    title: "Conspiracies – The Hidden Truths Revealed",
    subtitle: "VGOK: The NFT Conspiracy Unveiled 🕵️‍♂️",
    description1:
      "From secret societies and forbidden technology to hidden global agendas, VGOK NFTs may hold the keys to unraveling the biggest conspiracy theories of our time.",
    description2:
      "Some say they contain encrypted messages from lost civilizations, while others believe they are blueprints for a decentralized new world order.",
    cta:
      "👉 Only those who dare to own one will uncover the truth. Are you ready to decode the mystery?",
    emoji: "🕵️‍♂️",
    theme: "secondary",
    image: ConspiracyNFTpage
  },
  {
    title: "Beyond the Veil – More Mysteries Await",
    subtitle: "The VGOK NFT Collection expands beyond these themes, exploring witchcraft, astrology, zodiac signs, and other hidden aspects of the universe.",
    description1:
      "Our NFTs are currently available on Rarible and OpenSea. Support our vision by liking, sharing, and spreading awareness about the hidden truths of the world.",        
    emoji: "🕵️‍♂️",
    theme: "secondary",
    image: Beyondimage
  }
];

const VGOKNFTSections = () => {
  return (
    <>
      {nftSections.map((section, index) => {
        const isReversed = index % 2 !== 0;
        const ctaBg = section.theme === "primary" ? "bg-primary" : "bg-secondary";

        return (
          <section
            key={index}
            className="section-bg text-gray-900 py-20 px-6 md:px-12 lg:px-24"
          >
            <div
              className={`max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center ${isReversed ? "md:flex-row-reverse" : ""}`}
            >
              {/* Visual Emoji */}
              <div
                className="w-full overflow-hidden bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center text-6xl"
                data-aos="zoom-in"
              >
                {/* {section.emoji} */}
                {section.image && <img src={section.image} alt={section.title}/>}
              </div>

              {/* Text Section */}
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold leading-snug mb-4"
                  data-aos={isReversed ? "fade-left" : "fade-right"}
                >
                  {section.title.split(" – ")[0]} –{' '}
                  <span className="text-secondary">{section.title.split(" – ")[1]}</span>
                </h2>

                <p
                  className="text-lg text-gray-800 mb-6"
                  data-aos={isReversed ? "fade-left" : "fade-right"}
                  data-aos-delay="100"
                >
                  <strong className="text-primary">{section.subtitle}</strong>
                  <br />
                  {section.description1}
                </p>

                <p
                  className="text-gray-700 mb-6"
                  data-aos={isReversed ? "fade-left" : "fade-right"}
                  data-aos-delay="200"
                >
                  {section.subtitle2 && <>
                   <strong className="text-primary">{section.subtitle2}</strong>
                    <br />
                    </>}
                  {section.description2}
                </p>

                {section.cta && <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className={`inline-block ${ctaBg} text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition`}>
                    {section.cta.split("\n")[0]}
                    <br />
                    <span className="italic text-sm text-white/80">
                      {section.cta.split("\n")[1] || ''}
                    </span>
                  </div>
                </div>}

              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default VGOKNFTSections;
