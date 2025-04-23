
const nftSections = [
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
    theme: "primary"
  },
  {
    title: "The Old Testament – Ancient Prophecies & Divine Laws",
    subtitle: "VGOK: The Old Testament Bible NFTs 📜",
    description1:
      "From the dawn of time, divine laws and sacred prophecies have guided humanity. The VGOK Old Testament NFTs hold encrypted messages from ancient texts, prophetic wisdom, and lost spiritual knowledge.",
    description2:
      "Could these NFTs be a bridge to ancient truths, or are they simply a digital testament of faith?",
    cta:
      "👉 Only those who hold one will unlock the mysteries of creation. Are you among the chosen?",
    emoji: "📜",
    theme: "secondary"
  },
  {
    title: "The New Testament – The Path to Enlightenment",
    subtitle: "VGOK: The New Testament Bible NFTs ✨",
    description1:
      "Faith, prophecy, and enlightenment—these sacred concepts are woven into the VGOK New Testament NFTs. Hidden within the blockchain lies a divine mystery waiting to be revealed.",
    description2:
      "Some believe these NFTs contain timeless spiritual teachings, while others see them as a modern symbol of faith in the digital age.",
    cta:
      "👉 Only NFT holders will discover the deeper meaning. Will you seek the truth?",
    emoji: "✨",
    theme: "primary"
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
    theme: "secondary"
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
    theme: "primary"
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
    theme: "secondary"
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
                className="w-full h-72 md:h-96 bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center text-6xl"
                data-aos="zoom-in"
              >
                {section.emoji}
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
                  {section.description2}
                </p>

                <div
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
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default VGOKNFTSections;
