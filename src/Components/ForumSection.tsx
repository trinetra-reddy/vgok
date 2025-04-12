import forumImg from "https://source.unsplash.com/featured/?discussion,community";

const ForumSection = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">VGOK Forum</h2>
          <div className="space-y-4 text-lg">
            <p>The VGOK Forum is designed for professionals in financial transactions. Users can:</p>
            <ul className="list-disc pl-6">
              <li>Ask questions</li>
              <li>Share insights</li>
              <li>Engage in discussions</li>
            </ul>
            <p>
              We encourage transparency and direct communication between users and decision-makers to ensure efficiency.
            </p>
          </div>
        </div>
        <img src={forumImg} alt="VGOK Forum" className="rounded-2xl shadow-md" />
      </div>
    </section>
  );
};

export default ForumSection;