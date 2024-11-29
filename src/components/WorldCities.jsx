import { useState } from 'react'

export default function WorldCities() {
  const [activeTab, setActiveTab] = useState('popular')

  const cities = {
    popular: [
      {
        name: "Paris",
        country: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        description: "The City of Light",
        rating: 4.9,
        price: "€150",
        properties: 12500
      },
      {
        name: "Tokyo",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        description: "Where tradition meets future",
        rating: 4.8,
        price: "¥15000",
        properties: 8900
      },
      {
        name: "New York",
        country: "United States",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
        description: "The City That Never Sleeps",
        rating: 4.7,
        price: "$200",
        properties: 15600
      },
      {
        name: "Dubai",
        country: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        description: "City of the Future",
        rating: 4.9,
        price: "AED 500",
        properties: 5600
      }
    ],
    trending: [
      {
        name: "Santorini",
        country: "Greece",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
        description: "Magical sunsets",
        rating: 4.9,
        price: "€180",
        properties: 3200
      },
      {
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
        description: "Island of the Gods",
        rating: 4.8,
        price: "IDR 1.5M",
        properties: 7800
      },
      {
        name: "Cape Town",
        country: "South Africa",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
        description: "Where mountains meet ocean",
        rating: 4.7,
        price: "R 1500",
        properties: 4200
      },
      {
        name: "Reykjavik",
        country: "Iceland",
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
        description: "Land of Fire and Ice",
        rating: 4.8,
        price: "ISK 25000",
        properties: 2100
      }
    ],
    upcoming: [
      {
        name: "Porto",
        country: "Portugal",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
        description: "Historic coastal charm",
        rating: 4.7,
        price: "€90",
        properties: 3800
      },
      {
        name: "Medellin",
        country: "Colombia",
        image: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c",
        description: "City of Eternal Spring",
        rating: 4.6,
        price: "COP 250K",
        properties: 4100
      },
      {
        name: "Ljubljana",
        country: "Slovenia",
        image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72",
        description: "Green capital of Europe",
        rating: 4.8,
        price: "€85",
        properties: 1800
      },
      {
        name: "Tbilisi",
        country: "Georgia",
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d",
        description: "Where Europe meets Asia",
        rating: 4.7,
        price: "GEL 150",
        properties: 2900
      }
    ]
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">World Cities to Visit</h2>
        
        <div className="flex space-x-4 mb-8">
          {['popular', 'trending', 'upcoming'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab
                  ? 'bg-airbnb text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities[activeTab].map((city) => (
            <div
              key={city.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-medium">
                  {city.price}/night
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{city.name}</h3>
                    <p className="text-gray-600 text-sm">{city.country}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm text-gray-600">{city.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{city.description}</p>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{city.properties.toLocaleString()} properties</span>
                  <button className="text-airbnb hover:underline font-medium">
                    View Listings
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
