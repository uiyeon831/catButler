import * as Styled from './JoinSuccessStyle.js';
import CatLogo from './../icons/CatLogo';
import { Link } from 'react-router-dom';


export default function JoinSuccess() {
  return (
    <Styled.JoinSuccessModal>
      <div className='container'>
        <CatLogo />
        <div className='textBox'>
          <p className='title'>회원가입 완료!</p>
          <p>로그인 후 모든 서비스 이용이 가능합니다.</p>
        </div>
        <div className='btnBox'>
          <Link to={'/login'}>
            <Styled.ModalBtn $color={'login'}>로그인</Styled.ModalBtn>
          </Link>
          <Link to={'/'}>
            <Styled.ModalBtn>메인페이지</Styled.ModalBtn>
          </Link>
        </div>
      </div>
    </Styled.JoinSuccessModal>
  )
}