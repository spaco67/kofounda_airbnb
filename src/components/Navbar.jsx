import { FiGlobe, FiMenu, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-8 w-auto" src="/airbnb.svg" alt="Airbnb" />
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/experiences" className="hover:bg-gray-50 px-3 py-2 rounded-full">
              Experiences
            </Link>
            <Link to="/contact" className="hover:bg-gray-50 px-3 py-2 rounded-full">
              Contact
            </Link>
            <button className="hover:bg-gray-50 px-3 py-2 rounded-full">
              Become a Host
            </button>
            <button className="inline-flex items-center">
              <FiGlobe className="h-5 w-5" />
            </button>
            
            {user ? (
              <div className="relative flex items-center space-x-4">
                <span className="text-sm">Welcome, {user.name}</span>
                <button onClick={logout} className="text-airbnb hover:underline">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-airbnb">
                  Login
                </Link>
                <Link to="/register" className="text-gray-700 hover:text-airbnb">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
