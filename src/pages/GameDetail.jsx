import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ChevronLeft, 
  Play, 
  Calendar, 
  BadgeInfo, 
  Award, 
  Gamepad2, 
  Share2, 
  User, 
  Trophy, 
  Star 
} from 'lucide-react'
import { useState } from 'react'
import GAMES from '../data/GAMES'

const GameDetail = () => {
  const { gameId } = useParams()
  const navigate = useNavigate()
  const [isGameActive, setIsGameActive] = useState(false)
  
  // Find the game with the matching ID
  const game = GAMES.find(g => g.id === gameId)
  
  // If no game is found, redirect to the home page
  if (!game) {
    navigate('/')
    return null
  }
  
  const handleStartGame = () => {
    setIsGameActive(true)
  }
  
  const handleExitGame = () => {
    setIsGameActive(false)
  }
  
  const GameHeader = () => (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <Link 
          to="/" 
          className="p-2 rounded-full bg-surface-800 hover:bg-surface-700 transition-colors"
          aria-label="Back to games"
        >
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-3xl font-arcade text-primary">{game.title}</h1>
      </div>
      <button
        onClick={handleStartGame}
        className="arcade-btn flex items-center gap-2"
      >
        <Play size={20} />
        <span>Play Game</span>
      </button>
    </div>
  )

  return (
    <div>
      {isGameActive ? (
        <div className="relative h-[calc(100vh-120px)] min-h-[600px]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black"
          >
            <div className="relative h-full w-full crt-screen scanlines">
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-arcade text-primary mb-4">{game.title}</h2>
                <div className="w-full max-w-2xl aspect-video border-4 border-primary flex items-center justify-center">
                  <game.SvgComponent className="w-full h-full p-8" />
                </div>
                <button 
                  onClick={handleExitGame}
                  className="mt-6 arcade-btn bg-red-500 hover:bg-red-600 flex items-center gap-2"
                >
                  <ChevronLeft size={16} />
                  <span>Exit Game</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <GameHeader />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-surface-800/50 backdrop-blur-sm rounded-lg border border-surface-700 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center bg-black">
                    <game.SvgComponent className="h-full w-full" />
                  </div>
                  <div className="absolute top-4 right-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < game.popularity ? 'fill-yellow-400 text-yellow-400' : 'text-surface-600'} 
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Game Description</h2>
                  <p className="text-surface-300 mb-6 whitespace-pre-line">
                    {game.longDescription || game.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold mb-3">Game Details</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Calendar size={18} className="text-primary" />
                          <span className="text-surface-300">Release Year: </span>
                          <span>{game.year}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <BadgeInfo size={18} className="text-primary" />
                          <span className="text-surface-300">Category: </span>
                          <span>{game.category}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award size={18} className="text-primary" />
                          <span className="text-surface-300">Difficulty: </span>
                          <span>{game.difficulty}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <User size={18} className="text-primary" />
                          <span className="text-surface-300">Creator: </span>
                          <span>{game.creator || 'Unknown'}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-3">Controls</h3>
                      <ul className="space-y-2">
                        {game.controls.arrows && (
                          <li className="flex items-center gap-2">
                            <Gamepad2 size={18} className="text-secondary" />
                            <span>Arrow Keys</span>
                          </li>
                        )}
                        {game.controls.wasd && (
                          <li className="flex items-center gap-2">
                            <Gamepad2 size={18} className="text-secondary" />
                            <span>WASD Keys</span>
                          </li>
                        )}
                        {game.controls.touch ? (
                          <li className="flex items-center gap-2">
                            <Gamepad2 size={18} className="text-secondary" />
                            <span>Touch Compatible</span>
                          </li>
                        ) : (
                          <li className="flex items-center gap-2 text-surface-500">
                            <Gamepad2 size={18} />
                            <span>Not Touch Compatible</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={handleStartGame}
                      className="arcade-btn flex items-center gap-2 text-lg py-3 px-8"
                    >
                      <Play size={24} />
                      <span>Play Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-surface-800/50 backdrop-blur-sm rounded-lg border border-surface-700 overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">High Scores</h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-surface-900 p-3 rounded-lg">
                      <Trophy size={24} className="text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm text-surface-400">World Record</p>
                      <p className="text-lg font-mono font-bold">{game.highScore?.toLocaleString() || 'Unknown'}</p>
                      <p className="text-sm text-surface-300">{game.recordHolder || 'Unknown'}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3">Your Best Score</h3>
                  <div className="bg-surface-900 rounded-lg p-4 mb-6">
                    <p className="text-center text-sm text-surface-400 mb-2">Play to set your score!</p>
                    <div className="text-center text-xl font-mono font-bold text-primary">0</div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3">Share Game</h3>
                  <div className="flex justify-center gap-4">
                    <button className="p-3 rounded-full bg-surface-900 hover:bg-surface-700 transition-colors">
                      <Share2 size={20} className="text-surface-300" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface-800/50 backdrop-blur-sm rounded-lg border border-surface-700 overflow-hidden mt-6">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Similar Games</h2>
                  <div className="space-y-4">
                    {GAMES
                      .filter(g => g.id !== game.id && g.category === game.category)
                      .slice(0, 3)
                      .map(similarGame => (
                        <Link 
                          key={similarGame.id}
                          to={`/games/${similarGame.id}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-700/50 transition-colors"
                        >
                          <div className="w-16 h-16 overflow-hidden rounded bg-black flex items-center justify-center">
                            <similarGame.SvgComponent />
                          </div>
                          <div>
                            <h3 className="font-bold">{similarGame.title}</h3>
                            <p className="text-xs text-surface-400">{similarGame.category} • {similarGame.year}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between">
            <Link 
              to="/"
              className="arcade-btn arcade-btn-secondary flex items-center gap-2"
            >
              <ChevronLeft size={16} />
              <span>Back to Games</span>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default GameDetail