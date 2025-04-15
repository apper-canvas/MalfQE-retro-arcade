const RetroBackgroundSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 1200 800" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="retro-background" fill="none">
        {/* Grid lines */}
        <path d="M0 0 L1200 0 L1200 800 L0 800 Z" stroke="#444" strokeWidth="2" />
        <path d="M0 100 L1200 100" stroke="#444" strokeWidth="1" />
        <path d="M0 200 L1200 200" stroke="#444" strokeWidth="1" />
        <path d="M0 300 L1200 300" stroke="#444" strokeWidth="1" />
        <path d="M0 400 L1200 400" stroke="#444" strokeWidth="1" />
        <path d="M0 500 L1200 500" stroke="#444" strokeWidth="1" />
        <path d="M0 600 L1200 600" stroke="#444" strokeWidth="1" />
        <path d="M0 700 L1200 700" stroke="#444" strokeWidth="1" />
        
        <path d="M100 0 L100 800" stroke="#444" strokeWidth="1" />
        <path d="M200 0 L200 800" stroke="#444" strokeWidth="1" />
        <path d="M300 0 L300 800" stroke="#444" strokeWidth="1" />
        <path d="M400 0 L400 800" stroke="#444" strokeWidth="1" />
        <path d="M500 0 L500 800" stroke="#444" strokeWidth="1" />
        <path d="M600 0 L600 800" stroke="#444" strokeWidth="1" />
        <path d="M700 0 L700 800" stroke="#444" strokeWidth="1" />
        <path d="M800 0 L800 800" stroke="#444" strokeWidth="1" />
        <path d="M900 0 L900 800" stroke="#444" strokeWidth="1" />
        <path d="M1000 0 L1000 800" stroke="#444" strokeWidth="1" />
        <path d="M1100 0 L1100 800" stroke="#444" strokeWidth="1" />
        
        {/* Small Squares */}
        <rect x="150" y="150" width="20" height="20" fill="#FF00FF" />
        <rect x="850" y="250" width="20" height="20" fill="#FF00FF" />
        <rect x="350" y="550" width="20" height="20" fill="#FF00FF" />
        <rect x="750" y="650" width="20" height="20" fill="#FF00FF" />
        <rect x="1050" y="350" width="20" height="20" fill="#FF00FF" />
        
        {/* Circles */}
        <circle cx="250" cy="350" r="30" stroke="#00BFFF" strokeWidth="2" />
        <circle cx="650" cy="250" r="30" stroke="#00BFFF" strokeWidth="2" />
        <circle cx="950" cy="550" r="30" stroke="#00BFFF" strokeWidth="2" />
        <circle cx="450" cy="650" r="30" stroke="#00BFFF" strokeWidth="2" />
        
        {/* Triangles */}
        <path d="M550 150 L580 200 L520 200 Z" fill="#FFCC00" />
        <path d="M850 450 L880 500 L820 500 Z" fill="#FFCC00" />
        <path d="M150 650 L180 700 L120 700 Z" fill="#FFCC00" />
        
        {/* Retro sun */}
        <circle cx="950" cy="150" r="50" fill="#FF0000" />
        <circle cx="950" cy="150" r="40" fill="#FF6600" />
        <circle cx="950" cy="150" r="30" fill="#FFCC00" />
        <circle cx="950" cy="150" r="20" fill="#FFFFFF" />
        
        {/* Mountain silhouettes */}
        <path d="M0 500 L100 350 L200 450 L300 300 L400 500 Z" fill="#333" />
        <path d="M350 500 L450 320 L550 420 L650 280 L750 500 Z" fill="#222" />
        <path d="M700 500 L800 350 L900 420 L1000 300 L1200 500 Z" fill="#111" />
        
        {/* Pixel stars */}
        <rect x="100" y="100" width="4" height="4" fill="#FFFFFF" />
        <rect x="300" y="200" width="4" height="4" fill="#FFFFFF" />
        <rect x="700" y="150" width="4" height="4" fill="#FFFFFF" />
        <rect x="500" y="350" width="4" height="4" fill="#FFFFFF" />
        <rect x="800" y="400" width="4" height="4" fill="#FFFFFF" />
        <rect x="200" y="350" width="4" height="4" fill="#FFFFFF" />
        <rect x="1000" y="100" width="4" height="4" fill="#FFFFFF" />
        <rect x="1100" y="300" width="4" height="4" fill="#FFFFFF" />
        <rect x="900" y="350" width="4" height="4" fill="#FFFFFF" />
        <rect x="600" y="100" width="4" height="4" fill="#FFFFFF" />
        <rect x="400" y="200" width="4" height="4" fill="#FFFFFF" />
      </g>
    </svg>
  )
}

export default RetroBackgroundSvg