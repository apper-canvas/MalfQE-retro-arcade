const RetroBackgroundSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="#111" />
          <rect width="9" height="9" fill="#222" />
        </pattern>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#5000FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000022" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Grid background */}
      <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
      
      {/* Glow effect */}
      <rect x="0" y="0" width="100" height="100" fill="url(#glow)" />
      
      {/* Abstract horizon line */}
      <line x1="0" y1="70" x2="100" y2="70" stroke="#440088" strokeWidth="0.5" />
      
      {/* Abstract sun/moon */}
      <circle cx="50" cy="25" r="8" fill="#FF00FF" opacity="0.6" />
      <circle cx="50" cy="25" r="6" fill="#8800FF" opacity="0.8" />
      
      {/* Grid lines going to vanishing point */}
      <line x1="0" y1="70" x2="50" y2="50" stroke="#440088" strokeWidth="0.5" />
      <line x1="20" y1="70" x2="50" y2="50" stroke="#440088" strokeWidth="0.5" />
      <line x1="40" y1="70" x2="50" y2="50" stroke="#440088" strokeWidth="0.5" />
      <line x1="60" y1="70" x2="50" y2="50" stroke="#440088" strokeWidth="0.5" />
      <line x1="80" y1="70" x2="50" y2="50" stroke="#440088" strokeWidth="0.5" />
      <line x1="100" y1="70" x2="50" y2="50" stroke="#440088" strokeWidth="0.5" />
      
      {/* Random stars */}
      <circle cx="10" cy="15" r="0.5" fill="#FFFFFF" />
      <circle cx="25" cy="10" r="0.5" fill="#FFFFFF" />
      <circle cx="40" cy="20" r="0.5" fill="#FFFFFF" />
      <circle cx="75" cy="15" r="0.5" fill="#FFFFFF" />
      <circle cx="85" cy="30" r="0.5" fill="#FFFFFF" />
      <circle cx="95" cy="10" r="0.5" fill="#FFFFFF" />
      <circle cx="15" cy="40" r="0.5" fill="#FFFFFF" />
      <circle cx="60" cy="35" r="0.5" fill="#FFFFFF" />
    </svg>
  )
}

export default RetroBackgroundSvg