const InformationalAlertIcon = ({
  width = '40',
  height = '40',
  fill = '#1677FF',
  viewBox = '0 0 297 297',
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
    <circle cx="148.5" cy="148.5" r="148.5" fill="#1677FF"/>
    <circle cx="153.155" cy="90.992" r="15.0152" fill="white"/>
    <path d="M144.146 133.034C144.146 128.059 148.18 124.025 153.155 124.025V124.025C158.131 124.025 162.164 128.059 162.164 133.034V205.107C162.164 210.083 158.131 214.116 153.155 214.116V214.116C148.18 214.116 144.146 210.083 144.146 205.107V133.034Z" fill="white"/>
    </svg>
  )
}

export default InformationalAlertIcon;