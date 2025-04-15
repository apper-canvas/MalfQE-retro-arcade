const PacManSvg = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" fill="#FFCC00" />
      <path 
        d="M50 5 A45 45 0 0 1 95 50 A45 45 0 0 1 50 95 A45 45 0 0 1 5 50 A45 45 0 0 1 50 5 Z" 
        fill="#FFCC00" 
      />
      <path 
        d="M50 50 L85 20 A45 45 0 0 0 85 80 Z" 
        fill="#111" 
      />
      <circle cx="30" cy="30" r="5" fill="#111" />
      
      {/* Ghost */}
      <path 
        d="M130 50 A20 20 0 0 1 150 30 A20 20 0 0 1 170 50 V70 L160 60 L150 70 L140 60 L130 70 Z" 
        fill="#FF0000" 
        transform="translate(-60, 10) scale(0.7)" 
      />
      <circle cx="135" cy="40" r="4" fill="white" transform="translate(-60, 10) scale(0.7)" />
      <circle cx="135" cy="40" r="2" fill="black" transform="translate(-60, 10) scale(0.7)" />
      <circle cx="155" cy="40" r="4" fill="white" transform="translate(-60, 10) scale(0.7)" />
      <circle cx="155" cy="40" r="2" fill="black" transform="translate(-60, 10) scale(0.7)" />

      {/* Dots */}
      <circle cx="15" cy="50" r="3" fill="white" />
      <circle cx="25" cy="50" r="3" fill="white" />
      <circle cx="35" cy="50" r="3" fill="white" />
    </svg>
  )
}

export default PacManSvg