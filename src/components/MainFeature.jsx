import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Gamepad2, ArrowRight, X, Star } from 'lucide-react'

// Game data
const GAMES = [
  {
    id: 'pacman',
    title: 'Pac-Man',
    description: 'Navigate through a maze while eating dots and avoiding ghosts.',
    thumbnail: 'https://cdn.pixabay.com/photo/2021/02/08/15/44/pacman-5995222_1280.png',
    year: 1980,
    difficulty: 'Medium',
    category: 'Maze',
    popularity: 5,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    }
  },
  {
    id: 'tetris',
    title: 'Tetris',
    description: 'Arrange falling blocks to create complete rows without gaps.',
    thumbnail: 'https://cdn.pixabay.com/photo/2016/09/15/19/24/tetris-1672582_1280.png',
    year: 1984,
    difficulty: 'Medium',
    category: 'Puzzle',
    popularity: 5,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    }
  },
  {
    id: 'space-invaders',
    title: 'Space Invaders',
    description: 'Defend Earth from waves of descending alien invaders.',
    thumbnail: 'https://cdn.pixabay.com/photo/2013/07/12/14/45/space-invaders-148825_1280.png',
    year: 1978,
    difficulty: 'Easy',
    category: 'Shooter',
    popularity: 4,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    }
  },
  {
    id: 'donkey-kong',
    title: 'Donkey Kong',
    description: 'Help Mario rescue the princess from the giant ape Donkey Kong.',
    thumbnail: 'https://cdn.pixabay.com/photo/2021/02/11/15/40/arcade-6005417_1280.png',
    year: 1981,
    difficulty: 'Hard',
    category: 'Platform',
    popularity: 4,
    controls: {
      arrows: true,
      wasd: true,
      touch: false
    }
  },
  {
    id: 'galaga',
    title: 'Galaga',
    description: 'Shoot down swarms of alien ships while dodging their attacks.',
    thumbnail: 'https://cdn.pixabay.com/photo/2021/02/11/15/35/arcade-6005411_1280.png',
    year: 1981,
    difficulty: 'Medium',
    category: 'Shooter',
    popularity: 3,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    }
  },
  {
    id: 'frogger',
    title: 'Frogger',
    description: 'Guide frogs across a busy road and hazardous river to safety.',
    thumbnail: 'https://cdn.pixabay.com/photo/2021/02/11/15/38/arcade-6005415_1280.png',
    year: 1981,
    difficulty: 'Medium',
    category: 'Arcade',
    popularity: 3,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    }
  },
  {
    id: 'asteroids',
    title: 'Asteroids',
    description: 'Pilot a spaceship and destroy asteroids while avoiding collisions.',
    thumbnail: 'https://cdn.pixabay.com/photo/2021/02/11/15/34/arcade-6005410_1280.png',
    year: 1979,
    difficulty: 'Hard',
    category: 'Shooter',
    popularity: 3,
    controls: {
      arrows: true,
      wasd: true,
      touch: false
    }
  },
  {
    id: 'centipede',
    title: 'Centipede',
    description: 'Shoot at a descending centipede that splits into segments when hit.',
    thumbnail: 'https://cdn.pixabay.com/photo/2021/02/11/15/36/arcade-6005412_1280.png',
    year: 1980,
    difficulty: 'Medium',
    category: 'Shooter',
    popularity: 2,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    }
  }
]

const MainFeature = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGame, setSelectedGame] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: 'All',
    difficulty: 'All',
    year: 'All',
    controls: 'All'
  })
  const [filteredGames, setFilteredGames] = useState(GAMES)
  const [isGameActive, setIsGameActive] = useState(false)
  
  // Apply filters and search
  useEffect(() => {
    let result = [...GAMES]
    
    // Apply search
    if (searchTerm) {
      result = result.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    // Apply category filter
    if (filters.category !== 'All') {
      result = result.filter(game => game.category === filters.category)
    }
    
    // Apply difficulty filter
    if (filters.difficulty !== 'All') {
      result = result.filter(game => game.difficulty === filters.difficulty)
    }
    
    // Apply year filter
    if (filters.year !== 'All') {
      if (filters.year === 'Before 1980') {
        result = result.filter(game => game.year < 1980)
      } else if (filters.year === '1980-1985') {
        result = result.filter(game => game.year >= 1980 && game.year <= 1985)
      } else if (filters.year === 'After 1985') {
        result = result.filter(game => game.year > 1985)
      }
    }
    
    // Apply controls filter
    if (filters.controls !== 'All') {
      if (filters.controls === 'Touch Compatible') {
        result = result.filter(game => game.controls.touch)
      }
    }
    
    setFilteredGames(result)
  }, [searchTerm, filters])
  
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }
  
  const resetFilters = () => {
    setFilters({
      category: 'All',
      difficulty: 'All',
      year: 'All',
      controls: 'All'
    })
    setSearchTerm('')
  }
  
  const handleGameSelect = (game) => {
    setSelectedGame(game)
  }
  
  const handleStartGame = () => {
    setIsGameActive(true)
  }
  
  const handleExitGame = () => {
    setIsGameActive(false)
  }

  return (
    <div className="bg-surface-800/50 backdrop-blur-sm rounded-lg border border-surface-700 overflow-hidden">
      {/* Game view when active */}
      {isGameActive && selectedGame && (
        <div className="relative h-[600px]">
          <div className="absolute inset-0 bg-black">
            <div className="relative h-full w-full crt-screen scanlines">
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-arcade text-primary mb-4">{selectedGame.title}</h2>
                <div className="w-3/4 h-3/4 border-4 border-primary flex items-center justify-center">
                  <p className="text-center font-arcade text-sm">
                    Game simulation would load here.<br />
                    Use arrow keys or WASD to control.
                  </p>
                </div>
                <button 
                  onClick={handleExitGame}
                  className="mt-6 arcade-btn flex items-center gap-2"
                >
                  <X size={16} />
                  <span>Exit Game</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Game browser when not playing */}
      {!isGameActive && (
        <>
          {/* Search and filter bar */}
          <div className="p-4 bg-surface-900 border-b border-surface-700 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-surface-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search games..."
                className="w-full pl-10 pr-4 py-2 bg-surface-800 border border-surface-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                Object.values(filters).some(val => val !== 'All')
                  ? 'bg-primary text-white'
                  : 'bg-surface-800 hover:bg-surface-700'
              }`}
            >
              <Filter size={18} />
              <span>Filters</span>
              {Object.values(filters).some(val => val !== 'All') && (
                <span className="ml-1 w-5 h-5 flex items-center justify-center bg-white text-primary text-xs font-bold rounded-full">
                  {Object.values(filters).filter(val => val !== 'All').length}
                </span>
              )}
            </button>
          </div>
          
          {/* Filters panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-surface-800 border-b border-surface-700"
              >
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Category filter */}
                  <div>
                    <label className="block text-sm font-medium text-surface-300 mb-2">Category</label>
                    <select
                      value={filters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="w-full p-2 bg-surface-900 border border-surface-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="All">All Categories</option>
                      <option value="Maze">Maze</option>
                      <option value="Puzzle">Puzzle</option>
                      <option value="Shooter">Shooter</option>
                      <option value="Platform">Platform</option>
                      <option value="Arcade">Arcade</option>
                    </select>
                  </div>
                  
                  {/* Difficulty filter */}
                  <div>
                    <label className="block text-sm font-medium text-surface-300 mb-2">Difficulty</label>
                    <select
                      value={filters.difficulty}
                      onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                      className="w-full p-2 bg-surface-900 border border-surface-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="All">All Difficulties</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>
                  
                  {/* Year filter */}
                  <div>
                    <label className="block text-sm font-medium text-surface-300 mb-2">Release Year</label>
                    <select
                      value={filters.year}
                      onChange={(e) => handleFilterChange('year', e.target.value)}
                      className="w-full p-2 bg-surface-900 border border-surface-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="All">All Years</option>
                      <option value="Before 1980">Before 1980</option>
                      <option value="1980-1985">1980-1985</option>
                      <option value="After 1985">After 1985</option>
                    </select>
                  </div>
                  
                  {/* Controls filter */}
                  <div>
                    <label className="block text-sm font-medium text-surface-300 mb-2">Controls</label>
                    <select
                      value={filters.controls}
                      onChange={(e) => handleFilterChange('controls', e.target.value)}
                      className="w-full p-2 bg-surface-900 border border-surface-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="All">All Control Types</option>
                      <option value="Touch Compatible">Touch Compatible</option>
                    </select>
                  </div>
                </div>
                
                <div className="p-4 flex justify-end border-t border-surface-700">
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 text-sm text-surface-300 hover:text-white transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Game selection */}
          <div className="p-4">
            {filteredGames.length === 0 ? (
              <div className="text-center py-12">
                <Gamepad2 size={48} className="mx-auto text-surface-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">No Games Found</h3>
                <p className="text-surface-400 mb-4">
                  We couldn't find any games matching your search criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="arcade-btn"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredGames.map(game => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`game-card cursor-pointer ${
                      selectedGame?.id === game.id ? 'border-primary shadow-neon' : ''
                    }`}
                    onClick={() => handleGameSelect(game)}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={game.thumbnail} 
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-900 to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 p-3">
                        <h3 className="text-base font-bold text-white">{game.title}</h3>
                        <p className="text-xs text-surface-300">{game.year} • {game.category}</p>
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={12} 
                              className={i < game.popularity ? 'fill-yellow-400 text-yellow-400' : 'text-surface-600'} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          
          {/* Game details and play button */}
          {selectedGame && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-surface-900 border-t border-surface-700 flex flex-col md:flex-row gap-4 items-start md:items-center"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-bold">{selectedGame.title}</h3>
                <p className="text-surface-400 text-sm mt-1">{selectedGame.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs px-2 py-1 rounded bg-surface-700 text-surface-300">
                    {selectedGame.year}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-surface-700 text-surface-300">
                    {selectedGame.category}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-surface-700 text-surface-300">
                    {selectedGame.difficulty}
                  </span>
                  {selectedGame.controls.touch && (
                    <span className="text-xs px-2 py-1 rounded bg-secondary/20 text-secondary">
                      Touch Compatible
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={handleStartGame}
                className="arcade-btn flex items-center gap-2 whitespace-nowrap"
              >
                <span>Play Now</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          )}
        </>
      )}
    </div>
  )
}

export default MainFeature