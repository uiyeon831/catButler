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
        <div className='textBox'>
          <p className='title'>CEO</p>
          <p className='content'>백의연</p>
        </div>
        <div className='textBox'>
          <p className='title'>ADDRESS</p>
          <p className='content'>서울특별시 냥냥구 냥냥동 12</p>
        </div>
        <div className='textBox'>
          <p className='title'>BUSINESS NUMBER</p>
          <p className='content'>123-45-67890</p>
        </div>
        <div className='textBox'>
          <p className='title'>NUMBER</p>
          <p className='content'>010-1234-5678</p>
        </div>
        <div className='textBox'>
          <p className='title'>EMAIL</p>
          <p className='content'>catButler@catbutler.co.kr</p>
        </div>
      </div>
      <div className='customerService'>
        <p className='title serviceContent'>고객센터</p>
        <p className='companyNumber serviceContent'>02-1234-5678</p>
        <p className='serviceContent'>평일 09:00~18:00</p>
        <p className='serviceContent'>점심시간 12:00~13:00</p>
        <p className='serviceContent'>토, 일, 공휴일 휴무</p>
      </div>
    </Styled.footerContainer>
  )
}