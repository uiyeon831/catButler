import * as Styled from './style';
import CatButlerLogo from './../../components/CatButlerLogo';

export default function Footer() {
  return (
    <Styled.footerContainer>
      <CatButlerLogo width={170} />
      <div className='companyContent'> 
        <div className='textBox'>
          <p className='title'>COMPANY</p>
          <p className='content'>냥집사</p>
        </div>
      </div>
    </Styled.footerContainer>
  )
}