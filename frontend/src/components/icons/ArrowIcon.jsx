const ArrowIcon = ({
  width = '16',
  height = '25',
  fill = 'none',
  viewBox = '0 0 16 25',
  stroke = 'black',
  strokeWidth = '2'
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
        d="M2 2L13 12.5L2 23" stroke={stroke} strokeWidth={strokeWidth}
      />
    </svg>
  )
}

export default ArrowIcon;