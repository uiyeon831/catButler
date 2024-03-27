import Logo from '../../assets/logo/cat-butler-logo.png'

export default function CatLogo({ width=90 }) {
  return (
    <>
      <img src={Logo} alt="" width={width} />
    </>
  )
}
