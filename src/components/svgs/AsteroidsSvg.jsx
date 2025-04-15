const AsteroidsSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100" fill="#000" />
      
      {/* Ship */}
      <polygon points="50,60 45,68 55,68" stroke="#FFFFFF" strokeWidth="1" fill="none" />
      
      {/* Shots */}
      <line x1="50" y1="55" x2="50" y2="50" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="30" y1="40" x2="30" y2="35" stroke="#FFFFFF" strokeWidth="1" />
      
      {/* Asteroids */}
      <polygon points="20,15 15,20 15,30 20,35 30,35 35,30 35,20 30,15" stroke="#FFFFFF" strokeWidth="1" fill="none" />
      <polygon points="70,25 65,30 65,35 70,40 80,40 85,35 85,30 80,25" stroke="#FFFFFF" strokeWidth="1" fill="none" />
      <polygon points="40,80 35,85 35,90 40,95 50,95 55,90 55,85 50,80" stroke="#FFFFFF" strokeWidth="1" fill="none" />
      <polygon points="75,70 72,73 72,78 75,81 80,81 83,78 83,73 80,70" stroke="#FFFFFF" strokeWidth="1" fill="none" />
      
      {/* UFO */}
      <ellipse cx="15" cy="60" rx="7" ry="3" stroke="#FFFFFF" strokeWidth="1" fill="none" />
      <line x1="8" y1="60" x2="22" y2="60" stroke="#FFFFFF" strokeWidth="1" />
      
      {/* Stars */}
      <circle cx="10" cy="10" r="1" fill="#FFFFFF" />
      <circle cx="25" cy="45" r="1" fill="#FFFFFF" />
      <circle cx="90" cy="15" r="1" fill="#FFFFFF" />
      <circle cx="75" cy="55" r="1" fill="#FFFFFF" />
      <circle cx="60" cy="10" r="1" fill="#FFFFFF" />
      <circle cx="45" cy="25" r="1" fill="#FFFFFF" />
      <circle cx="85" cy="85" r="1" fill="#FFFFFF" />
      <circle cx="15" cy="90" r="1" fill="#FFFFFF" />
    </svg>
  )
}

export default AsteroidsSvg