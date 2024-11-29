export default function Hero() {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="Beautiful destination"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Find your next</span>
              <span className="block text-airbnb">adventure</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-gray-200">
              Discover unique places to stay, experiences to try, and hidden gems around the world.
            </p>
            <div className="mt-10">
              <button className="bg-airbnb text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
