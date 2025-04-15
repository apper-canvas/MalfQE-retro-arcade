import { Gamepad2, Github, Twitter, Facebook } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-surface-800 border-t border-surface-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Gamepad2 size={24} className="text-primary" />
              <span className="text-xl font-bold text-white">RetroArcade</span>
            </Link>
            <p className="text-surface-400 mb-4">
              Rediscover the golden age of arcade gaming with our authentic recreations of classic games.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-surface-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-surface-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-surface-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-surface-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/#games" className="text-surface-400 hover:text-white transition-colors">Games</Link></li>
              <li><Link to="/#leaderboard" className="text-surface-400 hover:text-white transition-colors">Leaderboard</Link></li>
              <li><a href="#" className="text-surface-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-surface-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-surface-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-surface-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-surface-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-surface-400 mb-4">
              Subscribe to our newsletter for updates on new games and features.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-4 py-2 bg-surface-900 border border-surface-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-surface-700 text-center text-surface-400">
          <p>&copy; {new Date().getFullYear()} RetroArcade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer