import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Checkbox from '../../components/Checkbox';

//styled-components
import * as Styled from './style';
import { Btn, Input } from '../../components/style';

//icon
import CatButlerLogo from "../../components/CatButlerLogo";
import { loginEmailCheck, loginPasswordCheck } from '../../components/inputValueCheck';
import KakaoIcon from './../../components/icons/KakaoIcon';
import NaverIcon from './../../components/icons/NaverIcon';
import GoogleIcon from './../../components/icons/GoogleIcon';

export default function LoginPage() {
  const [isCheck, setIsCheck] = useState(false);

  //로그인 기능 ↓↓
  const [loginObj, setloginObj] = useState({
    email: ' ',
    password: ' ',
  })

  const [unCorrectText, setUnCorrectText] = useState({
    email: '',
    password: '',
  })

  const onLoginHandler = (e) => {
    const { name, value } = e.target;
    setloginObj({
      ...loginObj,
      [name]: value
    });

  }
  let correctCount = 0;

  const valueIsRight = () => {
    correctCount = 0;

    const isEmail = loginEmailCheck(loginObj.email);
    if(isEmail === 'true'){
      setUnCorrectText(prev => ({...prev, email: ''}));
      correctCount += 1;
    } else {
      setUnCorrectText(prev => ({...prev, email: isEmail}));
    }

    const isPassword = loginPasswordCheck(loginObj.password);
    if(isPassword === 'true'){
      setUnCorrectText(prev => ({...prev, password: ''}));
      correctCount += 1;
    } else {
      setUnCorrectText(prev => ({...prev, password: isPassword}));
    }
  }

  useEffect(() => {
    valueIsRight();
  },[loginObj])

  const submitHandler = async(e) => {
    e.preventDefault();
    valueIsRight();

    const body = {
      email: loginObj.email,
      password: loginObj.password,
    }

    if(correctCount !== Object.keys(loginObj).length){
      alert('회원정보를 확인해주세요');
    } else if(correctCount === Object.keys(loginObj).length) {
      try {
        console.log(body);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Styled.LoginContainer>
        <Link to='/'><CatButlerLogo /></Link>
        <div className='whetherMember'>
          <div className='member'>회원로그인</div>
          <div>비회원로그인</div>
        </div>
        <div className='loginBox'>
          <form onSubmit={submitHandler}>
            <div className='inputBox'> 
              <div className='InputContainer'>
                <Input 
                  type='text'
                  name='email'
                  placeholder='이메일'
                  onChange={onLoginHandler}
                />
                <p className='unRightText'>{unCorrectText.email}</p>
              </div>
              <div className='InputContainer'>
                <Input 
                  type='password'
                  name='password'
                  autoComplete='off'
                  placeholder='비밀번호'
                  onChange={onLoginHandler}
                />
                <p className='unRightText'>{unCorrectText.password}</p>
              </div>
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
          <Link to={'/join'}>회원가입</Link>
        </div>
        <div className='socialLogin'>
          <p>소셜로 로그인</p>
          <div className='socialLoginIconBox'>
            <KakaoIcon />
            <NaverIcon />
            <GoogleIcon />
          </div>
        </div>
      </Styled.LoginContainer>
    </>
  )
}