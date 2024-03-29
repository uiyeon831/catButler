import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Checkbox from '../../components/Checkbox';

//styled-components
import * as Styled from './style';
import { Btn, Input } from '../../components/style';

//icon
import CatButlerLogo from "../../components/CatButlerLogo";
import ArrowIcon from './../../components/icons/ArrowIcon';
import CheckInputValue from './../../components/CheckInputValue';

export default function JoinPage() {
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


  const inputContent = [
    {id: 'email', type: 'text', placeholder: '이메일'},
    {id: 'password', type: 'password', placeholder: '비밀번호',  maxLength: '20'},
    {id: 'repassword', type: 'password', placeholder: '비밀번호 확인', maxLength: '20'},
    {id: 'userName', type: 'text', placeholder: '이름'},
    {id: 'phoneNumber', type: 'number', placeholder: '핸드폰 번호', maxLength: '13'},
  ]

  return (
    <>
      <Styled.JoinContainer>
        <Link to='/'><CatButlerLogo /></Link>
          <form>
            <div className='writeInformation'>
              <p>회원정보를 입력해주세요</p>
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
            <Btn>회원가입</Btn>
          </form>
      </Styled.JoinContainer>
    </>
  )
}