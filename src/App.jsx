import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-arcade-gradient dark:bg-surface-900 text-surface-800 dark:text-surface-100 transition-colors duration-300">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-surface-100/80 dark:bg-surface-800/80 border-b border-surface-200 dark:border-surface-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-arcade text-xs">RA</span>
            </motion.div>
            <h1 className="text-xl font-arcade text-primary animate-glow hidden sm:block">RetroArcade</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="font-medium hover:text-primary transition-colors">Home</a>
            <a href="#games" className="font-medium hover:text-primary transition-colors">Games</a>
            <a href="#leaderboard" className="font-medium hover:text-primary transition-colors">Leaderboard</a>
            <a href="#about" className="font-medium hover:text-primary transition-colors">About</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 py-3 space-y-2 bg-surface-50 dark:bg-surface-800">
                <a href="/" className="block py-2 font-medium hover:text-primary transition-colors">Home</a>
                <a href="#games" className="block py-2 font-medium hover:text-primary transition-colors">Games</a>
                <a href="#leaderboard" className="block py-2 font-medium hover:text-primary transition-colors">Leaderboard</a>
                <a href="#about" className="block py-2 font-medium hover:text-primary transition-colors">About</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="bg-surface-100 dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-arcade text-primary">RetroArcade</h2>
              <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">
                Relive the golden age of gaming
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-surface-200 dark:border-surface-700 text-center text-sm text-surface-500">
            © {new Date().getFullYear()} RetroArcade. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App