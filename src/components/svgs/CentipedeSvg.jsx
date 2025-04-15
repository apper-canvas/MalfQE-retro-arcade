const CentipedeSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100" fill="#000" />
      
      {/* Mushrooms */}
      <rect x="15" y="15" width="6" height="6" fill="#FF00FF" />
      <rect x="35" y="25" width="6" height="6" fill="#FF00FF" />
      <rect x="60" y="40" width="6" height="6" fill="#FF00FF" />
      <rect x="75" y="25" width="6" height="6" fill="#FF00FF" />
      <rect x="25" y="55" width="6" height="6" fill="#FF00FF" />
      <rect x="50" y="65" width="6" height="6" fill="#FF00FF" />
      <rect x="80" y="70" width="6" height="6" fill="#FF00FF" />
      
      {/* Centipede */}
      <circle cx="30" cy="10" r="4" fill="#00FF00" />
      <circle cx="22" cy="10" r="4" fill="#00FF00" />
      <circle cx="14" cy="10" r="4" fill="#00FF00" />
      <circle cx="14" cy="18" r="4" fill="#00FF00" />
      <circle cx="22" cy="18" r="4" fill="#00FF00" />
      <circle cx="30" cy="18" r="4" fill="#00FF00" />
      <circle cx="38" cy="18" r="4" fill="#00FF00" />
      <circle cx="46" cy="18" r="4" fill="#00FF00" />
      <circle cx="54" cy="18" r="4" fill="#FF0000" /> {/* Head */}
      
      {/* Player */}
      <rect x="45" y="90" width="10" height="5" fill="#FFFFFF" />
      
      {/* Player Shot */}
      <rect x="49" y="70" width="2" height="5" fill="#FFFFFF" />
      <rect x="49" y="50" width="2" height="5" fill="#FFFFFF" />
      
      {/* Spider */}
      <circle cx="70" cy="80" r="5" fill="#FF8800" />
      <line x1="65" y1="75" x2="60" y2="70" stroke="#FF8800" strokeWidth="2" />
      <line x1="75" y1="75" x2="80" y2="70" stroke="#FF8800" strokeWidth="2" />
      <line x1="65" y1="85" x2="60" y2="90" stroke="#FF8800" strokeWidth="2" />
      <line x1="75" y1="85" x2="80" y2="90" stroke="#FF8800" strokeWidth="2" />
    </svg>
  )
}

export default CentipedeSvg