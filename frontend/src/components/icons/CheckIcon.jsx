const CheckIcon = ({
  width = '31',
  height = '31',
  fill = 'none',
  viewBox = '0 0 31 31',
  stroke = 'black'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="30" height="30" rx="15" fill={fill} stroke={stroke}/>
      <path 
        d="M9 13.9568L14.6009 21L22 10" stroke={stroke} strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  )
}

export default CheckIcon;