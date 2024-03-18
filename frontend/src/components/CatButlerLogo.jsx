import Logo from '../assets/logo/cat-butler-logo (+text).png';

export default function CatButlerLogo({ width=220 }) {
  return (
    <>
      <img src={Logo} alt="" width={width} />
    </>
  )
}
