import { Link } from 'react-router-dom';

import * as Styled from './style';

//icnon
import CatButlerLogo from './../../components/CatButlerLogo';
import LikeIcon from '../../components/icons/LikeIcon';
import CartIcon from '../../components/icons/CartIcon';
import PersonIcon from '../../components/icons/PersonIcon';

export default function Header() {
  return (
    <Styled.headerContainer>
      <Link to={'/'}><CatButlerLogo width={170} /></Link>
      <input className='searchInput' type="text" />
      <div className='iconBox'>
        <Link><LikeIcon width='38' /></Link>
        <Link><CartIcon width='36' /></Link>
        <PersonIcon width='35' />
      </div>
    </Styled.headerContainer>
  )
}