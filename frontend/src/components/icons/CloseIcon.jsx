const CloseIcon = ({
  width = '18',
  height = '20',
  fill = 'none',
  viewBox = '0 0 28 30',
  stroke = '#8C8A7E',
  strokeWidth = '3',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M27 1L1 28.1842" 
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M27 28.1842L1 0.999997" 
        stroke={stroke} 
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      /> 
    </svg>
  )
}

export default CloseIcon;