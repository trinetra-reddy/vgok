
import {
    Users,
    Rocket,
    ShieldCheck,
    Lock,
    Coins,
    Building2
  } from 'lucide-react';

const TokenDistribution = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Token Distribution</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            The VGOK token allocation is designed to ensure ecosystem sustainability, platform growth, and community incentives. Below is the breakdown of the VGOK token distribution:
          </p>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Public Sale & Liquidity Card */}
          <div className="bg-white p-6 rounded-xl border-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center justify-between">
              <div className="text-4xl text-blue-500">
                <Coins />
              </div>
              <p className="text-xl font-semibold text-blue-500">40%</p>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Public Sale & Liquidity</h3>
            <p className="text-gray-600">Liquidity locked for 6 months to maintain market stability.</p>
            <div className="text-right text-sm text-gray-600 mt-4">
              400,000,000 VGOK
            </div>
          </div>
      
          {/* Team & Advisors Card */}
          <div className="bg-white p-6 rounded-xl border-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center justify-between">
              <div className="text-4xl text-green-500">
                <Users />
              </div>
              <p className="text-xl font-semibold text-green-500">10%</p>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Team & Advisors</h3>
            <p className="text-gray-600">Vesting schedule to align with long-term project success.</p>
            <div className="text-right text-sm text-gray-600 mt-4">
              100,000,000 VGOK
            </div>
          </div>
      
          {/* Development & Operations Card */}
          <div className="bg-white p-6 rounded-xl border-4 border-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center justify-between">
              <div className="text-4xl text-yellow-500">
                <Building2 />
              </div>
              <p className="text-xl font-semibold text-yellow-500">20%</p>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Development & Operations</h3>
            <p className="text-gray-600">Supports ongoing platform innovation and maintenance.</p>
            <div className="text-right text-sm text-gray-600 mt-4">
              200,000,000 VGOK
            </div>
          </div>
      
          {/* Marketing & Partnerships Card */}
          <div className="bg-white p-6 rounded-xl border-4 border-red-500 shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center justify-between">
              <div className="text-4xl text-red-500">
                <Rocket />
              </div>
              <p className="text-xl font-semibold text-red-500">10%</p>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Marketing & Partnerships</h3>
            <p className="text-gray-600">Drives user adoption and strategic collaborations.</p>
            <div className="text-right text-sm text-gray-600 mt-4">
              100,000,000 VGOK
            </div>
          </div>
      
          {/* Community Rewards & Staking Card */}
          <div className="bg-white p-6 rounded-xl border-4 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
            <div className="flex items-center justify-between">
              <div className="text-4xl text-purple-500">
                <ShieldCheck />
              </div>
              <p className="text-xl font-semibold text-purple-500">15%</p>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Community Rewards & Staking</h3>
            <p className="text-gray-600">Incentivizes engagement, staking rewards, and loyalty programs.</p>
            <div className="text-right text-sm text-gray-600 mt-4">
              150,000,000 VGOK
            </div>
          </div>
      
          {/* Reserve & Future Growth Card */}
          <div className="bg-white p-6 rounded-xl border-4 border-teal-500 shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center justify-between">
              <div className="text-4xl text-teal-500">
                <Lock />
              </div>
              <p className="text-xl font-semibold text-teal-500">5%</p>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Reserve & Future Growth</h3>
            <p className="text-gray-600">Ensures adaptability and long-term sustainability.</p>
            <div className="text-right text-sm text-gray-600 mt-4">
              50,000,000 VGOK
            </div>
          </div>
        </div>
      </section>
      

    )
}

export default TokenDistribution;