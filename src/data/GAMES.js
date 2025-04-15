import { 
  PacManSvg, 
  TetrisSvg, 
  SpaceInvadersSvg, 
  DonkeyKongSvg, 
  GalagaSvg, 
  FroggerSvg,
  AsteroidsSvg,
  CentipedeSvg
} from '../components/svgs'

const GAMES = [
  {
    id: 'pacman',
    title: 'Pac-Man',
    description: 'Navigate through a maze while eating dots and avoiding ghosts.',
    longDescription: `Pac-Man is one of the most iconic arcade games of all time. Released in 1980, the player controls Pac-Man through a maze, eating pac-dots. When all dots are eaten, Pac-Man is taken to the next stage. 

Four ghosts (Blinky, Pinky, Inky and Clyde) roam the maze, trying to catch Pac-Man. If a ghost touches Pac-Man, a life is lost. Near the corners of the maze are four larger, flashing dots known as Power Pellets that provide Pac-Man with the temporary ability to eat the ghosts.`,
    SvgComponent: PacManSvg,
    year: 1980,
    difficulty: 'Medium',
    category: 'Maze',
    popularity: 5,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    },
    creator: 'Namco',
    highScore: 3333360,
    recordHolder: 'Billy Mitchell'
  },
  {
    id: 'tetris',
    title: 'Tetris',
    description: 'Arrange falling blocks to create complete rows without gaps.',
    longDescription: `Tetris is a tile-matching puzzle game originally designed and programmed by Russian game designer Alexey Pajitnov in 1984. The game has a simple goal of destroying lines of block before they reach the top of the screen.

The game is played by moving and rotating falling tetrominos (geometric shapes composed of four square blocks each) to form complete horizontal lines, which then disappear. As lines are cleared, the game speeds up, making it progressively more challenging.`,
    SvgComponent: TetrisSvg,
    year: 1984,
    difficulty: 'Medium',
    category: 'Puzzle',
    popularity: 5,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    },
    creator: 'Alexey Pajitnov',
    highScore: 999999,
    recordHolder: 'Jonas Neubauer'
  },
  {
    id: 'space-invaders',
    title: 'Space Invaders',
    description: 'Defend Earth from waves of descending alien invaders.',
    longDescription: `Space Invaders is a 1978 arcade game created by Tomohiro Nishikado. It was manufactured and sold by Taito in Japan, and licensed in the United States by the Midway division of Bally.

The player controls a laser cannon that can move horizontally across the bottom of the screen. The cannon faces a formation of 5 rows of 11 aliens that move left and right as a group, shifting downward each time they reach a screen edge. The player's goal is to eliminate all of the aliens by shooting them.`,
    SvgComponent: SpaceInvadersSvg,
    year: 1978,
    difficulty: 'Easy',
    category: 'Shooter',
    popularity: 4,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    },
    creator: 'Tomohiro Nishikado',
    highScore: 55160,
    recordHolder: 'George Leutz'
  },
  {
    id: 'donkey-kong',
    title: 'Donkey Kong',
    description: 'Help Mario rescue the princess from the giant ape Donkey Kong.',
    longDescription: `Donkey Kong is an arcade platform game released by Nintendo in 1981. It's the first appearance of Mario (originally called "Jumpman") and Donkey Kong.

The game's plot features Jumpman (later renamed Mario) as he tries to rescue a damsel in distress named Pauline from a giant ape named Donkey Kong. The hero and ape later became two of Nintendo's most popular and recognizable characters.`,
    SvgComponent: DonkeyKongSvg,
    year: 1981,
    difficulty: 'Hard',
    category: 'Platform',
    popularity: 4,
    controls: {
      arrows: true,
      wasd: true,
      touch: false
    },
    creator: 'Shigeru Miyamoto',
    highScore: 1220600,
    recordHolder: 'Billy Mitchell'
  },
  {
    id: 'galaga',
    title: 'Galaga',
    description: 'Shoot down swarms of alien ships while dodging their attacks.',
    longDescription: `Galaga is a fixed shooter arcade game developed and published by Namco in 1981. It is the sequel to 1979's Galaxian.

The player controls a spacecraft at the bottom of the screen, firing at enemy aliens that attack in formation from the top. The objective is to destroy all of the aliens in each stage while avoiding their kamikaze-like attacks. A unique feature allows enemies to capture the player's fighter, which can later be rescued for double firepower.`,
    SvgComponent: GalagaSvg,
    year: 1981,
    difficulty: 'Medium',
    category: 'Shooter',
    popularity: 3,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    },
    creator: 'Namco',
    highScore: 3999990,
    recordHolder: 'Andrew Laidlaw'
  },
  {
    id: 'frogger',
    title: 'Frogger',
    description: 'Guide frogs across a busy road and hazardous river to safety.',
    longDescription: `Frogger is a 1981 arcade game developed by Konami and licensed for North American distribution by Sega-Gremlin.

The game starts with three (in some versions, five) frogs, which the player must guide home, one at a time. The player guides a frog across a busy road and a hazardous river to its home. To win, the player must fill all five frog homes.`,
    SvgComponent: FroggerSvg,
    year: 1981,
    difficulty: 'Medium',
    category: 'Arcade',
    popularity: 3,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    },
    creator: 'Konami',
    highScore: 442860,
    recordHolder: 'Pat Laffaye'
  },
  {
    id: 'asteroids',
    title: 'Asteroids',
    description: 'Pilot a spaceship and destroy asteroids while avoiding collisions.',
    longDescription: `Asteroids is a space-themed arcade game released in 1979 by Atari, Inc. It was one of the most popular and influential games of the Golden Age of Arcade Games.

The player controls a single spaceship in an asteroid field which is periodically traversed by flying saucers. The objective is to shoot and destroy the asteroids and saucers without colliding with either, or being hit by the saucers' counter-fire.`,
    SvgComponent: AsteroidsSvg,
    year: 1979,
    difficulty: 'Hard',
    category: 'Shooter',
    popularity: 3,
    controls: {
      arrows: true,
      wasd: true,
      touch: false
    },
    creator: 'Atari',
    highScore: 41336440,
    recordHolder: 'Scott Safran'
  },
  {
    id: 'centipede',
    title: 'Centipede',
    description: 'Shoot at a descending centipede that splits into segments when hit.',
    longDescription: `Centipede is a vertically oriented shooter arcade game produced by Atari, Inc. in 1981. The player defends against centipedes, spiders, scorpions and fleas, completing a round after eliminating the centipede that winds down the playing field.

The player is represented by a small, somewhat humanoid head at the bottom of the screen. The player moves the character about the bottom area of the screen with a trackball and fires at a centipede advancing from the top of the screen down through a field of mushrooms.`,
    SvgComponent: CentipedeSvg,
    year: 1980,
    difficulty: 'Medium',
    category: 'Shooter',
    popularity: 2,
    controls: {
      arrows: true,
      wasd: true,
      touch: true
    },
    creator: 'Atari',
    highScore: 7655930,
    recordHolder: 'Donald Hayes'
  }
]

export default GAMES