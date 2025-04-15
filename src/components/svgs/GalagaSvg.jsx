const GalagaSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="100" height="100" fill="#000" />
      
      {/* Player Ship */}
      <polygon points="50,85 45,95 55,95" fill="#FFFFFF" />
      <rect x="47" y="90" width="6" height="5" fill="#FF0000" />
      
      {/* Player Shots */}
      <rect x="49" y="60" width="2" height="10" fill="#FFFF00" />
      <rect x="49" y="40" width="2" height="10" fill="#FFFF00" />
      
      {/* Enemy Ships Formation */}
      <polygon points="30,20 25,25 35,25" fill="#FF0000" />
      <polygon points="50,20 45,25 55,25" fill="#FF0000" />
      <polygon points="70,20 65,25 75,25" fill="#FF0000" />
      
      <polygon points="20,30 15,35 25,35" fill="#0000FF" />
      <polygon points="40,30 35,35 45,35" fill="#0000FF" />
      <polygon points="60,30 55,35 65,35" fill="#0000FF" />
      <polygon points="80,30 75,35 85,35" fill="#0000FF" />
      
      <polygon points="30,40 25,45 35,45" fill="#00FF00" />
      <polygon points="50,40 45,45 55,45" fill="#00FF00" />
      <polygon points="70,40 65,45 75,45" fill="#00FF00" />
      
      {/* Boss Enemy */}
      <path d="M50,10 L40,15 L40,20 L60,20 L60,15 Z" fill="#FFFFFF" />
      <rect x="45" y="12" width="3" height="3" fill="#FF0000" />
      <rect x="52" y="12" width="3" height="3" fill="#FF0000" />
      
      {/* Stars */}
      <circle cx="10" cy="15" r="1" fill="#FFFFFF" />
      <circle cx="25" cy="5" r="1" fill="#FFFFFF" />
      <circle cx="80" cy="10" r="1" fill="#FFFFFF" />
      <circle cx="90" cy="25" r="1" fill="#FFFFFF" />
      <circle cx="15" cy="60" r="1" fill="#FFFFFF" />
      <circle cx="95" cy="70" r="1" fill="#FFFFFF" />
      <circle cx="35" cy="55" r="1" fill="#FFFFFF" />
      <circle cx="65" cy="65" r="1" fill="#FFFFFF" />
    </svg>
  )
}

export default GalagaSvg