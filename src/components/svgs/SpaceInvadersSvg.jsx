const SpaceInvadersSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100" fill="#000" />
      
      {/* Space Invader 1 */}
      <rect x="30" y="20" width="10" height="10" fill="#00FF00" />
      <rect x="60" y="20" width="10" height="10" fill="#00FF00" />
      <rect x="40" y="30" width="20" height="10" fill="#00FF00" />
      <rect x="30" y="30" width="10" height="10" fill="#00FF00" />
      <rect x="60" y="30" width="10" height="10" fill="#00FF00" />
      <rect x="30" y="40" width="40" height="10" fill="#00FF00" />
      <rect x="20" y="50" width="10" height="10" fill="#00FF00" />
      <rect x="70" y="50" width="10" height="10" fill="#00FF00" />
      <rect x="20" y="40" width="10" height="10" fill="#00FF00" />
      <rect x="70" y="40" width="10" height="10" fill="#00FF00" />
      <rect x="40" y="50" width="20" height="10" fill="#00FF00" />
      <rect x="30" y="60" width="10" height="10" fill="#00FF00" />
      <rect x="60" y="60" width="10" height="10" fill="#00FF00" />
      
      {/* Player Ship */}
      <rect x="45" y="85" width="10" height="5" fill="#FFFFFF" />
      <rect x="40" y="90" width="20" height="5" fill="#FFFFFF" />
      <rect x="30" y="95" width="40" height="5" fill="#FFFFFF" />
      
      {/* Player Shot */}
      <rect x="49" y="70" width="2" height="10" fill="#FFFFFF" />
      
      {/* Enemy Shot */}
      <rect x="30" y="75" width="2" height="5" fill="#FF0000" />
    </svg>
  )
}

export default SpaceInvadersSvg