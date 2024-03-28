import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as Styled from './style';

//icnon
import CatButlerLogo from './../../components/CatButlerLogo';
import LikeIcon from '../../components/icons/LikeIcon';
import CartIcon from '../../components/icons/CartIcon';
import PersonIcon from '../../components/icons/PersonIcon';
import SearchIcon from '../../components/icons/SearchIcon';
import ArrowIcon from './../../components/icons/ArrowIcon';
import { Btn } from '../../components/style';

export default function Header() {
  const [isHover, setIsHover] = useState(false);
  const [isToken, setIsToken] = useState(false);


  useEffect(() => {
    const localToken = localStorage.getItem('Token');
    const sessoionToken = sessionStorage.getItem('Token');
    if(localToken || sessoionToken) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  },[isHover])

  //token이 있을 때 hover이벤트에 보여질 내용
  const withTokenHover = <>
    <div className='textBox'>
      <p>최근 본 상품</p>
      <ArrowIcon width='10' />
    </div>
    <div className='textBox'>
      <p>주문 / 배송 조회</p>
      <ArrowIcon width='10' />
    </div>
    <div className='textBox'>
      <p>찜 리스트</p>
      <ArrowIcon width='10' />
    </div>
    <div className='textBox'>
      <p>장바구니</p>
      <ArrowIcon width='10' />
    </div>
    <div className='textBox'>
      <p>마이페이지</p>
      <ArrowIcon width='10' />
    </div>
    <div className='logout'>
      <p>로그아웃</p>
    </div>
  </>

  //token이 없을 때 hover이벤트에 보여질 내용
  const withoutTokenHover = <>
    <div className='textContainer'>
      <p>로그인 후</p>
      <p>이용 가능한 서비스입니다.</p>
    </div>
    <div className='lineContainer'><div className='line' /></div>
    <div className='btnContainer'>
      <Link to={'/login'}><Btn>로그인</Btn></Link>
      <Link to={'/join'}><Btn>회원가입</Btn></Link>
    </div>
  </>

  //hover이벤트에 보여질 내용
  const hoverContent = <Styled.HoverContainer>
    <div className='hoverBox'>
      {isToken ? withTokenHover : withoutTokenHover}
    </div>
  </Styled.HoverContainer>

  return (
    <Styled.headerContainer>
      <Link to={'/'}><CatButlerLogo width={170} /></Link>
      <div className='searchBox'>
        <input className='searchInput' type="text" />
        <div className='searchIcon'>
          <SearchIcon width='23' />
        </div>
      </div>
      <div className='iconBox'>
        <Link><LikeIcon width='38' /></Link>
        <Link><CartIcon width='36' /></Link>
        <div className='personIconBox'
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <PersonIcon width='35' />
          {isHover ? hoverContent : null}
        </div>
      </div>
    </Styled.headerContainer>
  )
}