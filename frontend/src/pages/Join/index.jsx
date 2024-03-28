import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { open, close } from '../../store/alertModalSlice';

import Checkbox from '../../components/Checkbox';
import { emailCheck, passwordCheck, confirmPasswordCheck, userNameCheck, phoneNumberCheck } from '../../components/inputValueCheck';
import { api } from '../../utils/axios';
import Alert from '../../components/Alert';
import JoinSuccess from '../../components/Modal/JoinSuccess';

//styled-components
import * as Styled from './style';
import { Btn, Input } from '../../components/style';

//icon
import CatButlerLogo from "../../components/CatButlerLogo";
import ArrowIcon from './../../components/icons/ArrowIcon';

export default function JoinPage() {
  const navigate = useNavigate();

  //로그인 상태일 때 join페이지 접근 막는 useEffect
  useEffect(() => {
    const localToken = localStorage.getItem('Token');
    const sessoionToken = sessionStorage.getItem('Token');
  
    if(localToken || sessoionToken){
      navigate('/');
    }
  })

  //동의 체크 관련 기능 ↓↓
  const agreeContent = [
    {id: 1, isRequire: true, content: '냥집사 이용약관 동의', isCheck: false},
    {id: 2, isRequire: true, content: '전자금융거래 이용약관 동의', isCheck: false},
    {id: 3, isRequire: true, content: '개인정보 수집 및 이용 동의', isCheck: false},
    {id: 4, isRequire: false, content: '마케팅 목적의 개인정보 수집 및 이용 동의', isCheck: false},
    {id: 5, isRequire: false, content: '광고성 정보 수신 동의', isCheck: false, sub: [
      {id: 51, isRequire: false, content: '이메일 수신 동의', isCheck: false},
      {id: 52, isRequire: false, content: 'sns 수신 동의', isCheck: false}
    ]}
  ]

  const [contentObj, setContentObj] = useState(agreeContent);
  const [isAllCheck, setIsAllCheck] = useState(false);

  //체크 핸들러
  const isCheckHandler = (id) => {
    const changeStatus = contentObj.map(element => {
      if(element.id === id) {
        if(element.sub){
          const tempStatus = element.sub.map(status => {
            return {
              ...status,
              isCheck: !element.isCheck
            }
          })
          return{
            ...element,
            isCheck: !element.isCheck,
            sub: tempStatus
          }
        } else {
          return {
            ...element,
            isCheck: !element.isCheck
          }
        }
      } else {
        if(element.sub){
          let count = 0;
          const tempStatus = element.sub.map(status => {
            if(status.id === id) {
              if(!status.isCheck){
                count += 1;
              }
              return {
                ...status,
                isCheck: !status.isCheck,
              }
            } else {
              if(status.isCheck){
                count += 1;
              }
              return {
                ...status
              }
            }
          })
          if(count > 0) {
            return {
              ...element,
              isCheck: true,
              sub: tempStatus
            }
          } else {
            return{
              ...element,
              isCheck: false,
              sub: tempStatus
            }
          }
        } else {
          return {
            ...element
          }
        }
      }
    })
    setContentObj(changeStatus);
  }

  //전체 동의 체크 핸들러
  const isAllCheckHandler = () => {
    const changeStatus = contentObj.map(element => {
      if(element.sub) {
        const tempStatus = element.sub.map(status => {
          return {
            ...status,
            isCheck: !isAllCheck
          }
        })
        return {
          ...element,
          isCheck: !isAllCheck,
          sub: tempStatus
        }
      } else {
        return {
          ...element,
          isCheck: !isAllCheck
        }
      }
    })
    setContentObj(changeStatus);
  }

  useEffect(() => {
    //전체 동의 여부 판단
    let count = 0;
    let subCount = 0;
    
    for(let i = 0; i < contentObj.length; i++) {
      if(contentObj[i].sub){
        contentObj[i].sub.map(element => {
          if(element.isCheck){
            count += 1;
            subCount += 1;
          } else {
            subCount += 1;
          }
        })
        if(contentObj[i].isCheck) {
          count += 1;
        }
      } else {
        if(contentObj[i].isCheck) {
          count += 1;
        }
      }
    }

    if(count === contentObj.length + subCount) {
      setIsAllCheck(true);
    } else {
      setIsAllCheck(false);
    }

  }, [contentObj])


  //회원가입 기능 ↓↓
  const [joinObj, setJoinObj] = useState({
    email: ' ',
    password: ' ',
    confirmPassword: ' ',
    userName: ' ',
    phoneNumber: ' '
  })

  const [unCorrectText, setUnCorrectText] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
    phoneNumber: ''
  })

  const [isDuplication, setIsDuplication] = useState(false);

  const [isSuccess, setIsSucess] = useState(false);

  const onJoinHandler = (e) => {
    const { name, value } = e.target;
    setJoinObj({
      ...joinObj,
      [name]: value
    });
  }

  const onPhoneNumberHandler = (e) => {
    e.currentTarget.value = e.currentTarget.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

    const { name, value } = e.target;
    setJoinObj({
      ...joinObj,
      [name]: value
    });
  }

  let correctCount = 0;
  const valueIsRight = () => {
    correctCount = 0;

    const isEmail = emailCheck(joinObj.email);
    if(isEmail === 'true'){
      setUnCorrectText(prev => ({...prev, email: ''}));
      correctCount += 1;
    } else {
      setUnCorrectText(prev => ({...prev, email: isEmail}));
    }

    const isPassword = passwordCheck(joinObj.password);
    if(isPassword === 'true'){
      setUnCorrectText(prev => ({...prev, password: ''}));
      correctCount += 1;
    } else {
      setUnCorrectText(prev => ({...prev, password: isPassword}));
    }

    const isConfirmPassword = confirmPasswordCheck(joinObj.confirmPassword, joinObj.password);
    if(isConfirmPassword === 'true'){
      setUnCorrectText(prev => ({...prev, confirmPassword: ''}));
      correctCount += 1;
    } else {
      setUnCorrectText(prev => ({...prev, confirmPassword: isConfirmPassword}));
    }

    const isUserName = userNameCheck(joinObj.userName);
    if(isUserName === 'true'){
      setUnCorrectText(prev => ({...prev, userName: ''}));
      correctCount += 1;
    } else {
      setUnCorrectText(prev => ({...prev, userName: isUserName}));
    }

    const isPhoneNumber = phoneNumberCheck(joinObj.phoneNumber);
    if(isPhoneNumber === 'true'){
      setUnCorrectText(prev => ({...prev, phoneNumber: ''}));
      correctCount += 1;
    } else {
      setUnCorrectText(prev => ({...prev, phoneNumber: isPhoneNumber}));
    }
  }

  //유효성 체크
  useEffect(()=>{  
    valueIsRight();
  },[joinObj])

  const CheckEmailDuplication = async () => {
    if(unCorrectText.email === '' && joinObj.email !== ' ') {
      try {
        const emailDuplicationApi = await api.get('/user/check');
        if(emailDuplicationApi.status === 200) {
          setIsDuplication(true);
          setUnCorrectText(prev => ({...prev, email: '사용가능한 이메일 입니다.'}));
        } else if(emailDuplicationApi.status === 409) {
          setUnCorrectText(prev => ({...prev, email: '이미 사용중인 이메일 입니다.'}));
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  //alert 띄워주는 redux
  const isAlert = useSelector(state => state.alertModal.open);
  const dispatch = useDispatch();

  const isAlertModal = (params) => {
    return (
      <Alert
        open={params}
        onClose={() => {
          dispatch(close())
        }}
      />
    )
  }

  const submitHandler = async() => {
    valueIsRight();

    const body = {
      email: joinObj.email,
      password: joinObj.password,
      name: joinObj.userName,
      phoneNumber: joinObj.phoneNumber,
      termsAgree: contentObj[0].isCheck,
      electronicAgree: contentObj[1].isCheck,
      personalInfoAgree: contentObj[2].isCheck,
      marketingAgree: contentObj[3].isCheck,
      emailAgree: contentObj[4].sub[0].isCheck,
      snsAgree: contentObj[4].sub[1].isCheck
    }

    const isRequireContent =  contentObj.filter((element) => element.isRequire === true );
    const isAllCheck = isRequireContent.filter((element) => element.isCheck === true);
    

    if(correctCount !== Object.keys(joinObj).length){
      const alertText = '회원정보를 확인해주세요';
      dispatch(open({text: alertText, type: 'warning'}));
    } else if(isRequireContent.length !== isAllCheck.length){
      const alertText = '필수항목을 동의해주세요';
      dispatch(open({text: alertText, type: 'warning'}));
    } else if(isDuplication === false) {
      const alertText = '이메일 중복 검사를 해주세요';
      dispatch(open({text: alertText, type: 'warning'}));
    } else if(correctCount === Object.keys(joinObj).length && isRequireContent.length === isAllCheck.length && isDuplication === true) {
      try {
        const joinApi = await api.post('/user/register', body);
        if(joinApi.status){
          setIsSucess(true);
        }
        console.log(body);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {isSuccess && <JoinSuccess />}
      <Styled.JoinContainer>
        <Link to='/'><CatButlerLogo /></Link>
          <div className='writeInformation'>
            <p>회원정보를 입력해주세요</p>
            <div className='InputContainer'>
              <div className='emailBox'>
                <Input 
                  type='text'
                  name='email'
                  placeholder='이메일'
                  onChange={onJoinHandler}
                />
                <button 
                  className='duplication' 
                  onClick={() => CheckEmailDuplication()}
                >
                  중복확인
                </button>
              </div>
              <p className='unRightText'>{unCorrectText.email}</p>
            </div>
            <div className='InputContainer'>
              <Input 
                type='password'
                name='password'
                autoComplete='off'
                placeholder='비밀번호 (8~20 글자 / 영문,숫자,특수문자 조합)'
                onChange={onJoinHandler}
              />
              <p className='unRightText'>{unCorrectText.password}</p>
            </div>
            <div className='InputContainer'>
              <Input 
                type='password'
                name='confirmPassword'
                autoComplete='off'
                placeholder='비밀번호 확인'
                onChange={onJoinHandler}
              />
              <p className='unRightText'>{unCorrectText.confirmPassword}</p>
            </div>
            <div className='InputContainer'>
              <Input 
                type='text'
                name='userName'
                placeholder='이름'
                onChange={onJoinHandler}
              />
              <p className='unRightText'>{unCorrectText.userName}</p>
            </div>
            <div className='InputContainer'>
              <Input 
                type='text'
                name='phoneNumber'
                maxLength={13}
                placeholder='핸드폰 번호 (숫자만 입력)'
                onChange={(e) => {onPhoneNumberHandler(e)}}
              />
              <p className='unRightText'>{unCorrectText.phoneNumber}</p>
            </div>
          </div>

          <div className='agreeBox'>
            <div className='agree'>
              <div className='checkContainer'>
                <div onClick={() => {isAllCheckHandler()}}>
                  <Checkbox 
                    width='30' 
                    height='30' 
                    content='전체 동의'
                    isCheck={isAllCheck}
                  />
                </div>
              </div>
            </div>

              {contentObj && contentObj.map((element) => {
                return(
                  <div className='consentItems' key={element.id}>
                    <div>
                      <div className='checkContainer'>
                        <div onClick={()=> {isCheckHandler(element.id)}}>
                          <Checkbox 
                            width='25' 
                            height='25'
                            isRequire = {element.isRequire}
                            content={element.content}
                            isCheck={element.isCheck}
                          />
                        </div>
                      </div>
                      <ArrowIcon width='10' />
                    </div>
                    <div className='advertisementAgree'>
                      {element.sub && element.sub.map((elem) => {
                        return(
                          <div className='checkContainer' key={elem.id}>
                            <div onClick={()=> {isCheckHandler(elem.id)}}>
                              <Checkbox 
                                width='25' 
                                height='25'
                                isRequire= {elem.isRequire} 
                                content={elem.content}
                                isCheck={elem.isCheck}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
              
          </div>
          <Btn onClick={() => {submitHandler()}}>회원가입</Btn>
      </Styled.JoinContainer>
      {isAlert && isAlertModal()}
    </>
  )
}