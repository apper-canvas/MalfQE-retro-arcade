const DonkeyKongSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100" fill="#000" />
      
      {/* Platforms */}
      <rect x="5" y="95" width="90" height="5" fill="#FF8000" />
      <rect x="5" y="75" width="80" height="5" fill="#FF8000" />
      <rect x="15" y="55" width="80" height="5" fill="#FF8000" />
      <rect x="5" y="35" width="80" height="5" fill="#FF8000" />
      <rect x="15" y="15" width="70" height="5" fill="#FF8000" />
      
      {/* Ladders */}
      <rect x="20" y="75" width="5" height="20" fill="#FFFFFF" />
      <rect x="30" y="55" width="5" height="20" fill="#FFFFFF" />
      <rect x="70" y="35" width="5" height="20" fill="#FFFFFF" />
      <rect x="40" y="15" width="5" height="20" fill="#FFFFFF" />
      
      {/* Mario */}
      <rect x="15" y="85" width="5" height="5" fill="#FF0000" />
      <rect x="15" y="90" width="5" height="5" fill="#0000FF" />
      
      {/* Donkey Kong */}
      <rect x="75" y="5" width="15" height="10" fill="#8B4513" />
      <rect x="70" y="10" width="5" height="5" fill="#8B4513" />
      <rect x="90" y="10" width="5" height="5" fill="#8B4513" />
      
      {/* Barrels */}
      <rect x="45" y="65" width="10" height="5" fill="#8B4513" rx="2" ry="2" />
      <rect x="60" y="45" width="10" height="5" fill="#8B4513" rx="2" ry="2" />
      <rect x="30" y="25" width="10" height="5" fill="#8B4513" rx="2" ry="2" />
    </svg>
  )
}

export default DonkeyKongSvg