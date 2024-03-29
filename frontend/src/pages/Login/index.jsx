import { Link } from 'react-router-dom';
import { useState } from 'react';

import Checkbox from '../../components/Checkbox';
import CheckInputValue from '../../components/CheckInputValue';

//styled-components
import * as Styled from './style';
import { Btn, Input } from '../../components/style';

//icon
import CatButlerLogo from "../../components/CatButlerLogo";

export default function LoginPage() {
  const [isCheck, setIsCheck] = useState(false);

  const inputContent = [
    {id: 'email', type: 'text', placeholder: '이메일'},
    {id: 'loginPassword', type: 'password', placeholder: '비밀번호'},
  ]

  return (
    <>
      <Styled.LoginContainer>
        <Link to='/'><CatButlerLogo /></Link>
        <div className='whetherMember'>
          <div className='member'>회원로그인</div>
          <div>비회원로그인</div>
        </div>
        <div className='loginBox'>
          <form>
            <div className='inputBox'> 
              {inputContent && inputContent.map((element) => {
                  return (
                    <div key={element.id}>
                      <CheckInputValue
                        id={element.id}
                        type={element.type}
                        placeholder={element.placeholder}
                      />
                    </div>
                  )
                })}
            </div>
            <div className='checkContainer'>
              <div onClick={() => {setIsCheck(!isCheck)}}>
                <Checkbox 
                  width='25' 
                  height='25' 
                  content='로그인 상태 유지' 
                  isCheck={isCheck}
                />
              </div>
            </div>
            <Btn>로그인</Btn>
          </form>
        </div>
        <div className='findPassword'>
          <Link>비밀번호 찾기</Link>
          |
          <Link>아이디 찾기</Link>
          |
          <Link>회원가입</Link>
        </div>
      </Styled.LoginContainer>
    </>
  )
}