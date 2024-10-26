import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const sampleGyms = [
    {
      id: 1,
      title: "Luxury Home Gym in Beverly Hills",
      description: "Fully equipped premium gym with Peloton, free weights, and recovery area",
      price: 75,
      rating: 4.9,
      reviews: 28,
      location: "Beverly Hills, CA",
      amenities: ["Peloton", "Free Weights", "Recovery Area", "Shower"],
      imageUrl: "/api/placeholder/400/250",
      hostId: "1"
    },
    {
      id: 2,
      title: "Modern Garage Gym",
      description: "Complete CrossFit setup with Olympic lifting platform",
      price: 45,
      rating: 4.7,
      reviews: 15,
      location: "Santa Monica, CA",
      amenities: ["CrossFit Equipment", "Olympic Platform", "Rogue Rack"],
      imageUrl: "/api/placeholder/400/250",
      hostId: "2"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">GymShare</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">Find a Gym</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Become a Host</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Sign Up</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Private Gym Space</h1>
          <p className="text-xl text-gray-600">Book exclusive home gyms by the hour</p>
        </div>

        {/* Search Bar */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full p-2 pl-10 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>

        {/* Gym Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleGyms.map(gym => (
            <div key={gym.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={gym.imageUrl}
                alt={gym.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{gym.title}</h2>
                <p className="text-gray-600 mb-4">{gym.location}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-1">
                    <span>⭐️ {gym.rating}</span>
                    <span className="text-gray-500">({gym.reviews} reviews)</span>
                  </div>
                  <div>
                    <span className="font-bold">${gym.price}</span>
                    <span className="text-gray-500">/hour</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {gym.amenities.map(amenity => (
                    <span key={amenity} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">How it works</a></li>
                <li><a href="#" className="hover:text-gray-300">Our story</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Host</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">List your gym</a></li>
                <li><a href="#" className="hover:text-gray-300">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
