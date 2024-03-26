const KakaoIcon = ({
  width = '69',
  height = '69',
  fill = 'none',
  viewBox = '0 0 69 69',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="34.5" cy="34.5" r="34.5" fill="#FAE100"/>
      <path 
        d="M35.4933 22C27.4846 22 21 27.1712 21 33.5306C21 37.6486 23.7142 41.2671 27.7921 43.3059C27.5648 44.0755 26.3615 48.2745 26.3213 48.6121C26.3213 48.6121 26.2946 48.8551 26.455 48.9496C26.6155 49.0441 26.8027 48.9766 26.8027 48.9766C27.2573 48.9091 32.0839 45.4932 32.9262 44.8856C33.7686 45.0071 34.6243 45.0611 35.5067 45.0611C43.5154 45.0611 50 39.9034 50 33.5306C50 27.1577 43.4887 22 35.4933 22Z" 
        fill="#3C1E1E"
      />
    </svg>
  )
}

export default KakaoIcon;