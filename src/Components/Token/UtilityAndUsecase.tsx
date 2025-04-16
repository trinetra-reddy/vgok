import {
    Gift,
    UserCheck,
    Image,
    Shield,
    ShoppingCart,
    Currency
  } from 'lucide-react';

const UtilityAndUsecase = () => {
    return(
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">VGOK Utility & Use Cases</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            VGOK tokens power a versatile financial ecosystem, offering multiple utilities that enhance platform functionality and user engagement. Here are some of the key use cases:
          </p>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Marketplace Transactions */}
          <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl text-blue-500">
              <ShoppingCart />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Marketplace Transactions</h3>
              <p className="text-gray-600">VGOK serves as the primary currency for seamless transactions on the VGOK platform.</p>
            </div>
          </div>
      
          {/* Secure Guarantee Services */}
          <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl text-green-500">
              <Shield />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Secure Guarantee Services</h3>
              <p className="text-gray-600">Enables trust-based guarantees for buyers, sellers, and consultants, reducing fraud risks.</p>
            </div>
          </div>
      
          {/* NFT Acquisitions */}
          <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl text-purple-500">
              <Image />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">NFT Acquisitions</h3>
              <p className="text-gray-600">Purchase exclusive VGOK NFTs inspired by Anunnaki, biblical themes, secret societies, extraterrestrial theories, and hidden knowledge.</p>
            </div>
          </div>
      
          {/* Governance & Voting */}
          <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="400">
            <div className="text-4xl text-red-500">
              <UserCheck />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Governance & Voting</h3>
              <p className="text-gray-600">Token holders participate in decision-making, influencing platform updates and policies.</p>
            </div>
          </div>
      
          {/* Staking & Rewards */}
          <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="500">
            <div className="text-4xl text-teal-500">
              <Currency />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Staking & Rewards</h3>
              <p className="text-gray-600">Users can stake VGOK to earn passive income while strengthening the ecosystem.</p>
            </div>
          </div>
      
          {/* Exclusive Discounts & Premium Access */}
          <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="600">
            <div className="text-4xl text-yellow-500">
              <Gift />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Exclusive Discounts & Premium Access</h3>
              <p className="text-gray-600">Enjoy reduced fees, VIP features, and priority access to platform services.</p>
            </div>
          </div>
        </div>
      </section>
      

    )
}
export default UtilityAndUsecase;