import { FiGlobe } from 'react-icons/fi'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal
} from 'react-icons/fa'

export default function Footer() {
  const footerLinks = {
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Safety Information', href: '#' },
      { name: 'Cancellation Options', href: '#' },
      { name: 'COVID-19 Response', href: '#' },
      { name: 'Supporting Disabilities', href: '#' },
      { name: 'Report Concern', href: '#' }
    ],
    community: [
      { name: 'Airbnb.org: Disaster Relief', href: '#' },
      { name: 'Support Afghan Refugees', href: '#' },
      { name: 'Combating Discrimination', href: '#' },
      { name: 'Community Guidelines', href: '#' }
    ],
    hosting: [
      { name: 'Try Hosting', href: '#' },
      { name: 'AirCover: Protection', href: '#' },
      { name: 'Explore Hosting Resources', href: '#' },
      { name: 'Visit Community Forum', href: '#' },
      { name: 'How to Host Responsibly', href: '#' }
    ],
    about: [
      { name: 'Newsroom', href: '#' },
      { name: 'Learn About Features', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Investors', href: '#' },
      { name: 'Gift Cards', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaLinkedinIn, href: '#' }
  ]

  const paymentMethods = [
    { icon: FaCcVisa, name: 'Visa' },
    { icon: FaCcMastercard, name: 'Mastercard' },
    { icon: FaCcAmex, name: 'American Express' },
    { icon: FaCcPaypal, name: 'PayPal' }
  ]

  return (
    <footer className="bg-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Support Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-airbnb text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-airbnb text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hosting Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Hosting</h3>
            <ul className="space-y-3">
              {footerLinks.hosting.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-airbnb text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-airbnb text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links and Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-600 hover:text-airbnb transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              {paymentMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <Icon
                    key={index}
                    className="h-8 w-8 text-gray-600"
                    title={method.name}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">© 2023 Airbnb, Inc.</span>
              <span className="text-gray-300">·</span>
              <a href="#" className="text-sm text-gray-600 hover:text-airbnb">Privacy</a>
              <span className="text-gray-300">·</span>
              <a href="#" className="text-sm text-gray-600 hover:text-airbnb">Terms</a>
              <span className="text-gray-300">·</span>
              <a href="#" className="text-sm text-gray-600 hover:text-airbnb">Sitemap</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-airbnb">
                <FiGlobe className="h-5 w-5 mr-2" />
                <span className="text-sm">English (US)</span>
              </button>
              <button className="text-sm text-gray-600 hover:text-airbnb">
                $ USD
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
