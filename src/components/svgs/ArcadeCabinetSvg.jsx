const ArcadeCabinetSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100" fill="#000" />
      
      {/* Cabinet outline */}
      <rect x="20" y="5" width="60" height="90" fill="#222" />
      <rect x="25" y="10" width="50" height="40" fill="#000" rx="2" ry="2" />
      
      {/* Screen */}
      <rect x="28" y="13" width="44" height="34" fill="#222" />
      
      {/* Game elements on screen */}
      <rect x="35" y="20" width="5" height="5" fill="#FFCC00" /> {/* Pac-Man */}
      <rect x="50" y="25" width="5" height="5" fill="#00FFFF" /> {/* Ghost */}
      <rect x="42" y="30" width="2" height="2" fill="#FFFFFF" /> {/* Pellet */}
      <rect x="55" y="35" width="2" height="2" fill="#FFFFFF" /> {/* Pellet */}
      <rect x="60" y="20" width="2" height="2" fill="#FFFFFF" /> {/* Pellet */}
      
      {/* Controls */}
      <rect x="30" y="55" width="40" height="15" fill="#333" rx="2" ry="2" />
      <circle cx="40" cy="63" r="5" fill="#FF0000" stroke="#000" strokeWidth="1" /> {/* Joystick */}
      <circle cx="60" cy="60" r="3" fill="#0000FF" stroke="#000" strokeWidth="1" /> {/* Button */}
      <circle cx="70" cy="60" r="3" fill="#00FF00" stroke="#000" strokeWidth="1" /> {/* Button */}
      <circle cx="65" cy="68" r="3" fill="#FFFF00" stroke="#000" strokeWidth="1" /> {/* Button */}
      
      {/* Cabinet details */}
      <rect x="25" y="75" width="50" height="5" fill="#444" /> {/* Panel */}
      <rect x="35" y="80" width="30" height="10" fill="#333" /> {/* Base */}
      
      {/* Logo */}
      <rect x="35" y="77" width="30" height="1" fill="#FFCC00" />
      <rect x="45" y="85" width="10" height="1" fill="#00BFFF" />
    </svg>
  )
}

export default ArcadeCabinetSvg