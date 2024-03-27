const WarningAlertIcon = ({
  width = '40',
  height = '40',
  fill = '#FAAD14',
  viewBox = '0 0 43 43',
  stroke = 'white',
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
      <circle cx="21.5" cy="21.5" r="21.5" fill="#FAAD14"/>
      <circle cx="1.5" cy="1.5" r="1.5" transform="matrix(1 0 0 -1 20 31)" fill="white"/>
      <rect width="1.5" height="13" rx="1.30435" transform="matrix(1 0 0 -1 20.8696 24.0435)" fill="white"/>
    </svg>
  )
}

export default WarningAlertIcon;