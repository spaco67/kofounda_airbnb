export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-rose-500 to-airbnb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">Become a Host</h2>
            <p className="text-xl mb-8">
              Earn extra income and unlock new opportunities by sharing your space.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-airbnb px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb"
              alt="Host welcoming guests" 
              className="rounded-2xl shadow-xl w-full max-w-md h-64 object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
            <div className="text-3xl font-bold mb-2">$9.8K</div>
            <p>Average monthly income for Hosts in your area*</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
            <div className="text-3xl font-bold mb-2">93%</div>
            <p>Of Hosts say sharing their space helps them afford their homes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
            <div className="text-3xl font-bold mb-2">50M+</div>
            <p>Guest arrivals to Airbnb listings in the past year</p>
          </div>
        </div>
        
        <p className="text-white/70 text-sm mt-8">
          * Based on Host earnings data from the past 12 months. Individual results may vary.
        </p>
      </div>
    </div>
  )
}
