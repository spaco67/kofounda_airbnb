export default function Destinations() {
  const destinations = [
    {
      title: "Beach Houses",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      location: "Coastal destinations",
    },
    {
      title: "Mountain Cabins",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      location: "Mountain getaways",
    },
    {
      title: "City Apartments",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      location: "Urban experiences",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">Popular destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div key={destination.title} className="relative rounded-lg overflow-hidden group">
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-xl font-semibold text-white">{destination.title}</h3>
              <p className="text-gray-200">{destination.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
