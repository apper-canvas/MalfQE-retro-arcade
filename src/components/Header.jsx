import { Link, useLocation } from 'react-router-dom'
import { Gamepad2, User, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-900/80 backdrop-blur-md border-b border-surface-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Gamepad2 size={24} className="text-primary" />
            <span className="text-xl font-bold text-white">RetroArcade</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'text-primary' : 'text-surface-300 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/#games" 
              className={`nav-link ${location.pathname.includes('#games') ? 'text-primary' : 'text-surface-300 hover:text-white'}`}
            >
              Games
            </Link>
            <Link 
              to="/#leaderboard" 
              className={`nav-link ${location.pathname.includes('#leaderboard') ? 'text-primary' : 'text-surface-300 hover:text-white'}`}
            >
              Leaderboard
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-surface-300 hover:text-white">
              <User size={18} />
              <span>Login</span>
            </button>
            
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full bg-surface-800 hover:bg-surface-700 md:hidden"
            >
              {isMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-800 border-b border-surface-700">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'text-primary' : 'text-surface-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/#games" 
                className={`nav-link ${location.pathname.includes('#games') ? 'text-primary' : 'text-surface-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Games
              </Link>
              <Link 
                to="/#leaderboard" 
                className={`nav-link ${location.pathname.includes('#leaderboard') ? 'text-primary' : 'text-surface-300 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <hr className="border-surface-700" />
              <Link 
                to="/login" 
                className="flex items-center gap-2 text-surface-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} />
                <span>Login</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header