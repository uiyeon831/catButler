const SuccessAlertIcon = ({
  width = '40',
  height = '40',
  fill = '#52C41A',
  viewBox = '0 0 43 43',
  stroke = 'white',
  strokeWidth = '4'
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
        d="M43 21.5C43 33.3741 33.3741 43 21.5 43C9.62588 43 0 33.3741 0 21.5C0 9.62588 9.62588 0 21.5 0C33.3741 0 43 9.62588 43 21.5Z" 
        fill={fill}
      />
      <path 
        d="M31 14L18.6608 28L12 20.4426" 
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

export default SuccessAlertIcon;