export default function Experiences() {
  const experiences = [
    {
      title: "Cooking Class in Paris",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
      price: 65,
      rating: 4.8,
      reviews: 128,
    },
    {
      title: "Wine Tasting in Tuscany",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
      price: 85,
      rating: 4.9,
      reviews: 256,
    },
    {
      title: "Surfing in Hawaii",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f",
      price: 75,
      rating: 4.7,
      reviews: 182,
    },
  ]

  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Unique Experiences</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div key={experience.title} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{experience.title}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-600">From ${experience.price} / person</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm text-gray-600">
                    {experience.rating} ({experience.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
