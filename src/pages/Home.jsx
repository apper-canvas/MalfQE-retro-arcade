import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gamepad2, Trophy, Users, Clock, Star, ChevronRight, ChevronLeft } from 'lucide-react'
import MainFeature from '../components/MainFeature'
import { 
  RetroBackgroundSvg,
  ArcadeCabinetSvg
} from '../components/svgs'
import GAMES from '../data/GAMES'

const LEADERBOARD = [
  { id: 1, username: "PixelMaster", game: "Pac-Man", score: 203450, date: "2023-10-15" },
  { id: 2, username: "RetroQueen", game: "Tetris", score: 156780, date: "2023-10-14" },
  { id: 3, username: "ArcadeKing", game: "Space Invaders", score: 89320, date: "2023-10-16" },
  { id: 4, username: "GameGuru", game: "Donkey Kong", score: 76540, date: "2023-10-13" },
  { id: 5, username: "8BitHero", game: "Galaga", score: 65230, date: "2023-10-12" }
]

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredGames, setFilteredGames] = useState(GAMES)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [visibleGames, setVisibleGames] = useState(3)
  
  // Filter games by category
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredGames(GAMES)
    } else {
      setFilteredGames(GAMES.filter(game => game.category === activeCategory))
    }
    setCurrentSlide(0)
  }, [activeCategory])
  
  // Update visible games based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleGames(1)
      } else if (window.innerWidth < 1024) {
        setVisibleGames(2)
      } else {
        setVisibleGames(3)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const nextSlide = () => {
    setCurrentSlide(prev => 
      prev + visibleGames >= filteredGames.length ? 0 : prev + 1
    )
  }
  
  const prevSlide = () => {
    setCurrentSlide(prev => 
      prev === 0 ? Math.max(0, filteredGames.length - visibleGames) : prev - 1
    )
  }
  
  const categories = ['All', 'Maze', 'Puzzle', 'Shooter', 'Platform', 'Arcade']

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <RetroBackgroundSvg />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-arcade mb-6 text-primary animate-glow"
            >
              Relive the Golden Age of Gaming
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8"
            >
              Experience the nostalgia of classic arcade games that defined an era. 
              From Pac-Man to Tetris, Space Invaders to Donkey Kong — all your favorites 
              in one place, faithfully recreated with authentic gameplay.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#games" className="arcade-btn">
                Play Now
              </a>
              <a href="#leaderboard" className="arcade-btn arcade-btn-secondary">
                View Leaderboard
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full max-w-md aspect-square"
          >
            <div className="absolute inset-0 bg-surface-800 rounded-lg transform rotate-3 border-4 border-accent"></div>
            <div className="absolute inset-0 bg-surface-800 rounded-lg transform -rotate-3 border-4 border-primary"></div>
            <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-secondary crt-screen scanlines">
              <ArcadeCabinetSvg />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-2xl md:text-3xl font-arcade mb-12 text-center">Why RetroArcade?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Gamepad2 size={32} className="text-primary" />, 
              title: "Authentic Gameplay", 
              description: "Experience games exactly as they were in the arcade, with faithful recreations of original mechanics." 
            },
            { 
              icon: <Trophy size={32} className="text-secondary" />, 
              title: "Global Leaderboards", 
              description: "Compete with players worldwide and see your name at the top of the rankings." 
            },
            { 
              icon: <Users size={32} className="text-accent" />, 
              title: "Multiplayer Modes", 
              description: "Challenge friends to beat your high scores or play together in supported games." 
            },
            { 
              icon: <Clock size={32} className="text-primary" />, 
              title: "Save Progress", 
              description: "Pick up where you left off with game saves and continue your adventure anytime." 
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-800/50 backdrop-blur-sm p-6 rounded-lg border border-surface-700 hover:border-primary transition-colors duration-300"
            >
              <div className="mb-4 p-3 bg-surface-900 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-surface-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Main Feature - Game Selection */}
      <section id="games" className="py-12">
        <h2 className="text-2xl md:text-3xl font-arcade mb-6 text-center">Choose Your Game</h2>
        <MainFeature />
      </section>
      
      {/* Game Carousel */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-arcade">Featured Games</h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-surface-800 hover:bg-primary transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-surface-800 hover:bg-primary transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex space-x-4 mb-6 overflow-x-auto scrollbar-hide">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-surface-800 hover:bg-surface-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * (100 / visibleGames)}%)` }}
          >
            {filteredGames.map((game, index) => (
              <div 
                key={game.id}
                className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-3`}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="game-card h-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <game.SvgComponent />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-bold text-white">{game.title}</h3>
                      <p className="text-sm text-surface-300">{game.year} • {game.category}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-surface-300 mb-4">{game.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-xs font-medium px-2 py-1 rounded bg-surface-700 text-surface-300">
                          {game.difficulty}
                        </span>
                      </div>
                      <Link to={`/games/${game.id}`} className="arcade-btn text-xs py-2 px-4">
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-12">
        <h2 className="text-2xl md:text-3xl font-arcade mb-8 text-center">Global Leaderboard</h2>
        <div className="bg-surface-800/50 backdrop-blur-sm rounded-lg border border-surface-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-surface-900">
                  <th className="px-6 py-3 text-left text-xs font-medium text-surface-400 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-surface-400 uppercase tracking-wider">Player</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-surface-400 uppercase tracking-wider">Game</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-surface-400 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-surface-400 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-700">
                {LEADERBOARD.map((entry, index) => (
                  <tr key={entry.id} className="hover:bg-surface-700/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`flex items-center justify-center w-6 h-6 rounded-full ${
                          index === 0 ? 'bg-yellow-500' : 
                          index === 1 ? 'bg-gray-300' : 
                          index === 2 ? 'bg-amber-700' : 'bg-surface-700'
                        } text-surface-900 text-xs font-bold`}>
                          {index + 1}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                          {entry.username.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">{entry.username}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Link 
                        to={`/games/${entry.game.toLowerCase().replace(' ', '-')}`}
                        className="hover:text-primary transition-colors"
                      >
                        {entry.game}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-primary">{entry.score.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-400">{entry.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-arcade mb-4">Ready to Play?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Jump into the action and start playing your favorite arcade classics right now. 
            No downloads required — just pure retro gaming fun!
          </p>
          <a href="#games" className="arcade-btn">
            Start Gaming
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home