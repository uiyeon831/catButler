const SearchIcon = ({
  width = '31',
  height = '31',
  fill = 'none',
  viewBox = '0 0 31 31',
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
      <circle cx="13" cy="13" r="11.5" stroke="black" strokeWidth="3"/>
      <path 
        d="M28 28L22 22" stroke="black" strokeWidth="3" strokeLinecap="round"
      />
    </svg>
  )
}

export default SearchIcon;