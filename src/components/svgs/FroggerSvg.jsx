const FroggerSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100" fill="#000" />
      
      {/* Road */}
      <rect x="0" y="55" width="100" height="30" fill="#222222" />
      <rect x="5" y="65" width="10" height="2" fill="#FFFFFF" />
      <rect x="25" y="65" width="10" height="2" fill="#FFFFFF" />
      <rect x="45" y="65" width="10" height="2" fill="#FFFFFF" />
      <rect x="65" y="65" width="10" height="2" fill="#FFFFFF" />
      <rect x="85" y="65" width="10" height="2" fill="#FFFFFF" />
      
      {/* River */}
      <rect x="0" y="10" width="100" height="30" fill="#0066CC" />
      
      {/* Safe zones */}
      <rect x="0" y="40" width="100" height="15" fill="#009900" />
      <rect x="0" y="85" width="100" height="15" fill="#009900" />
      <rect x="0" y="0" width="100" height="10" fill="#009900" />
      
      {/* Logs */}
      <rect x="10" y="15" width="20" height="8" fill="#8B4513" rx="3" ry="3" />
      <rect x="60" y="15" width="30" height="8" fill="#8B4513" rx="3" ry="3" />
      <rect x="30" y="30" width="25" height="8" fill="#8B4513" rx="3" ry="3" />
      
      {/* Cars */}
      <rect x="15" y="60" width="12" height="6" fill="#FF0000" rx="1" ry="1" />
      <rect x="70" y="70" width="15" height="8" fill="#FFFF00" rx="1" ry="1" />
      <rect x="40" y="75" width="10" height="5" fill="#00FF00" rx="1" ry="1" />
      
      {/* Frog */}
      <rect x="48" y="90" width="4" height="4" fill="#00FF00" />
      <rect x="46" y="88" width="2" height="2" fill="#00FF00" />
      <rect x="52" y="88" width="2" height="2" fill="#00FF00" />
      <rect x="46" y="92" width="2" height="2" fill="#00FF00" />
      <rect x="52" y="92" width="2" height="2" fill="#00FF00" />
    </svg>
  )
}

export default FroggerSvg