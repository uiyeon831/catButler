const GoogleIcon = ({
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
      <circle cx="34.5" cy="34.5" r="34" fill="white" stroke="#D9D9D9"/>
      <g clipPath="url(#clip0_66_167)">
        <path fillRule="evenodd" clipRule="evenodd" d="M49.38 34.8444C49.38 33.7421 49.2767 32.6916 49.1044 31.6755H34.5V37.6688H42.8356C42.4739 39.5977 41.3889 41.251 39.7356 42.3533V46.2455H44.7472C47.675 43.5416 49.3628 39.5805 49.3628 34.8444H49.38Z" fill="#4285F4"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M34.5 50.0001C38.685 50.0001 42.1983 48.6051 44.7644 46.2456L39.7528 42.3534C38.3578 43.2834 36.5839 43.8345 34.5 43.8345C30.47 43.8345 27.0428 41.1134 25.82 37.4451H20.6533V41.4578C23.2022 46.5212 28.4378 50.0001 34.5 50.0001Z" fill="#34A853"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M25.82 37.445C25.51 36.515 25.3378 35.5161 25.3378 34.5C25.3378 33.4838 25.51 32.485 25.82 31.555V27.5422H20.6533C19.6028 29.6433 19 32.0027 19 34.5C19 36.9972 19.6028 39.3738 20.6533 41.4577L25.8372 37.445H25.82Z" fill="#FBBC05"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M34.5 25.1655C36.7733 25.1655 38.8228 25.9405 40.4244 27.4905L44.8678 23.0472C42.1811 20.5499 38.6678 19.0172 34.5 19.0172C28.4378 18.9999 23.2022 22.4788 20.6533 27.5422L25.8372 31.5549C27.06 27.8866 30.47 25.1655 34.5172 25.1655H34.5Z" fill="#EA4335"/>
      </g>
      <defs>
        <clipPath id="clip0_66_167">
          <rect width="31" height="31" fill="white" transform="translate(19 19)"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default GoogleIcon;