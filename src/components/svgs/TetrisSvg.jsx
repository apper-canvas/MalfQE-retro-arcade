const TetrisSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100" fill="#000" />
      
      {/* L shape */}
      <rect x="10" y="10" width="10" height="10" fill="#FF8000" />
      <rect x="10" y="20" width="10" height="10" fill="#FF8000" />
      <rect x="10" y="30" width="10" height="10" fill="#FF8000" />
      <rect x="20" y="30" width="10" height="10" fill="#FF8000" />
      
      {/* I shape */}
      <rect x="40" y="10" width="10" height="10" fill="#00FFFF" />
      <rect x="40" y="20" width="10" height="10" fill="#00FFFF" />
      <rect x="40" y="30" width="10" height="10" fill="#00FFFF" />
      <rect x="40" y="40" width="10" height="10" fill="#00FFFF" />
      
      {/* T shape */}
      <rect x="60" y="10" width="10" height="10" fill="#800080" />
      <rect x="70" y="10" width="10" height="10" fill="#800080" />
      <rect x="80" y="10" width="10" height="10" fill="#800080" />
      <rect x="70" y="20" width="10" height="10" fill="#800080" />
      
      {/* Z shape */}
      <rect x="10" y="50" width="10" height="10" fill="#FF0000" />
      <rect x="20" y="50" width="10" height="10" fill="#FF0000" />
      <rect x="20" y="60" width="10" height="10" fill="#FF0000" />
      <rect x="30" y="60" width="10" height="10" fill="#FF0000" />
      
      {/* O shape */}
      <rect x="50" y="50" width="10" height="10" fill="#FFFF00" />
      <rect x="60" y="50" width="10" height="10" fill="#FFFF00" />
      <rect x="50" y="60" width="10" height="10" fill="#FFFF00" />
      <rect x="60" y="60" width="10" height="10" fill="#FFFF00" />
      
      {/* S shape */}
      <rect x="70" y="50" width="10" height="10" fill="#00FF00" />
      <rect x="80" y="50" width="10" height="10" fill="#00FF00" />
      <rect x="60" y="60" width="10" height="10" fill="#00FF00" />
      <rect x="70" y="60" width="10" height="10" fill="#00FF00" />
      
      {/* Falling piece */}
      <rect x="10" y="80" width="10" height="10" fill="#0000FF" />
      <rect x="20" y="80" width="10" height="10" fill="#0000FF" />
      <rect x="30" y="80" width="10" height="10" fill="#0000FF" />
      <rect x="20" y="70" width="10" height="10" fill="#0000FF" />
    </svg>
  )
}

export default TetrisSvg