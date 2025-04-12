import {
    Lock,
    Users,
    Building2,
    Rocket,
    ShieldCheck
  } from 'lucide-react';

const ReleaseSchedule = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">Vesting & Release Schedule</h2>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
      A structured vesting plan ensures gradual token distribution to maintain price stability and prevent market manipulation. Below is the breakdown of the VGOK vesting and release schedule:
    </p>
  </div>

  <div className="relative pt-12 pb-24">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
      {/* Public Sale & Liquidity */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="w-12 h-12 bg-blue-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
          <Lock />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Public Sale & Liquidity</h3>
        <p className="text-gray-600">Locked for 6 months, followed by a phased release.</p>
      </div>

      {/* Team & Advisors */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="200">
        <div className="w-12 h-12 bg-green-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
          <Users />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Team & Advisors</h3>
        <p className="text-gray-600">12-month lock-up, with 10% unlocked monthly thereafter.</p>
      </div>

      {/* Development & Operations */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="300">
        <div className="w-12 h-12 bg-yellow-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
          <Building2 />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Development & Operations</h3>
        <p className="text-gray-600">Locked for 6 months, with a 24-month gradual release.</p>
      </div>

      {/* Marketing & Partnerships */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="400">
        <div className="w-12 h-12 bg-red-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
          <Rocket />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Marketing & Partnerships</h3>
        <p className="text-gray-600">Distributed strategically to support sustainable growth and partnerships.</p>
      </div>

      {/* Community Rewards & Staking */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="500">
        <div className="w-12 h-12 bg-purple-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
          <ShieldCheck />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Rewards & Staking</h3>
        <p className="text-gray-600">Released over time to encourage engagement and adoption.</p>
      </div>

      {/* Reserve & Future Growth */}
      <div className="text-center" data-aos="fade-up" data-aos-delay="600">
        <div className="w-12 h-12 bg-teal-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
          <Lock />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Reserve & Future Growth</h3>
        <p className="text-gray-600">Held for expansion, new partnerships, and ecosystem sustainability.</p>
      </div>
    </div>
  </div>
</section>

    )
}
export default ReleaseSchedule;