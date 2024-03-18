import * as Styled from './style';

import CatButlerLogo from './../../components/CatButlerLogo';
import LikeIcon from '../../components/icons/LikeIcon';
import CartIcon from '../../components/icons/CartIcon';
import PersonIcon from '../../components/icons/PersonIcon';

export default function Header() {
  return (
    <Styled.headerContainer>
      <CatButlerLogo width={170} />
      <input className='searchInput' type="text" />
      <div className='iconBox'>
        <LikeIcon width='40' />
        <CartIcon width='38' />
        <PersonIcon width='37' />
      </div>
    </Styled.headerContainer>
  )
}