const ErrorAlertIcon = ({
  width = '40',
  height = '40',
  fill = '#FF4D4F',
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
      <circle cx="21.5" cy="21.5" r="21.5" fill="#FF4D4F"/>
      <path d="M28.0747 15L14.9999 28.6703" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M28.0747 28.6703L14.9999 15" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>
  )
}

export default ErrorAlertIcon;