const ArcadeCabinetSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008888" stopOpacity="1" />
          <stop offset="100%" stopColor="#003366" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Cabinet Body */}
      <rect x="20" y="10" width="60" height="85" fill="#222222" rx="2" ry="2" />
      <rect x="25" y="15" width="50" height="40" fill="#111111" rx="2" ry="2" />
      
      {/* Screen */}
      <rect x="28" y="18" width="44" height="34" fill="url(#screenGradient)" rx="1" ry="1" />
      
      {/* Game Scene (Pac-Man) */}
      <circle cx="40" cy="30" r="4" fill="#FFCC00" />
      <polygon points="40,30 40,26 50,30 40,34" fill="#FFCC00" />
      <rect x="55" y="25" width="2" height="2" fill="#FFFFFF" />
      <rect x="60" y="35" width="2" height="2" fill="#FFFFFF" />
      <rect x="50" y="40" width="2" height="2" fill="#FFFFFF" />
      
      {/* Control Panel */}
      <rect x="25" y="60" width="50" height="15" fill="#111111" />
      <circle cx="35" cy="67" r="5" fill="#FF0000" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="65" cy="67" r="5" fill="#FF0000" stroke="#FFFFFF" strokeWidth="1" />
      <rect x="45" y="65" width="10" height="5" fill="#000000" stroke="#FFFFFF" strokeWidth="1" />
      
      {/* Marquee */}
      <rect x="15" y="5" width="70" height="8" fill="#3333CC" />
      <text x="50" y="12" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="#FFFFFF">ARCADE</text>
      
      {/* Base */}
      <rect x="15" y="95" width="70" height="5" fill="#111111" />
    </svg>
  )
}

export default ArcadeCabinetSvg