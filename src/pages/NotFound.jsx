import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-6xl font-arcade text-primary mb-4 animate-glow">GAME OVER</h1>
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-primary rounded-full animate-pulse-slow opacity-20"></div>
          <div className="relative flex items-center justify-center h-full">
            <span className="text-5xl">👾</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">404 - Page Not Found</h2>
        <p className="text-surface-400 max-w-md mx-auto">
          The page you're looking for has vanished into the digital void. 
          Perhaps it was eaten by a Pac-Man or smashed by a falling Tetris block.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="arcade-btn flex items-center justify-center gap-2"
          >
            <Home size={18} />
            <span>Return Home</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="arcade-btn arcade-btn-secondary"
          >
            Go Back
          </button>
        </div>
        
        <div className="mt-12 font-arcade text-xs text-surface-500">
          INSERT COIN TO CONTINUE
        </div>
      </motion.div>
      
      {/* Pixel art decorations */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden md:block">
        <div className="w-16 h-16 bg-primary"></div>
      </div>
      <div className="absolute top-10 right-10 opacity-20 hidden md:block">
        <div className="w-8 h-8 bg-secondary"></div>
        <div className="w-8 h-8 bg-accent mt-2"></div>
      </div>
    </div>
  )
}

export default NotFound