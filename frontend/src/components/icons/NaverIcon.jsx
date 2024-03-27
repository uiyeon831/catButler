const NaverIcon = ({
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
      <circle cx="34.5" cy="34.5" r="34.5" fill="#02C759"/>
      <path 
        d="M38.628 35.3762L28.995 22H21V47H29.372V33.6238L39.005 47H47V22H38.628V35.3762Z" 
        fill="white"
      />
    </svg>
  )
}

export default NaverIcon;