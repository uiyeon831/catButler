import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Checkbox from '../../components/Checkbox';

//styled-components
import * as Styled from './style';
import { Btn, Input } from '../../components/style';

//icon
import CatButlerLogo from "../../components/CatButlerLogo";
import ArrowIcon from './../../components/icons/ArrowIcon';

export default function JoinPage() {
  const agreeContent = [
    {id: 1, isRequire: true, content: '냥집사 이용약관 동의', isCheck: false},
    {id: 2, isRequire: true, content: '전자금융거래 이용약관 동의', isCheck: false},
    {id: 3, isRequire: true, content: '개인정보 수집 및 이용 동의', isCheck: false},
    {id: 4, isRequire: false, content: '마케팅 목적의 개인정보 수집 및 이용 동의', isCheck: false},
    {id: 5, isRequire: false, content: '광고성 정보 수신 동의', isCheck: false}
  ]

  const [contentObj, setContentObj] = useState(agreeContent);
  const [isAllCheck, setIsAllCheck] = useState(false);

  const isCheckHandler = (id) => {
    const changeStatus = contentObj.map(status => {
      if(status.id === id) {
        return {
          ...status,
          isCheck: !status.isCheck
        }
      } else {
        return {
          ...status
        }
      }
    })
    setContentObj(changeStatus);
  }

  const isAllCheckHandler = () => {
    const changeCheckTrue = contentObj.map((element) => {
      return{
        ...element,
        isCheck: !isAllCheck
      }
    })
    setContentObj(changeCheckTrue);
  }

  useEffect(() => {
    let count = 0;
    
    for(let i = 0; i < contentObj.length; i++) {
      if(contentObj[i].isCheck) {
        count += 1;
      }
    }

    if(count === contentObj.length) {
      setIsAllCheck(true);
    } else {
      setIsAllCheck(false);
    }

  }, [contentObj])

  return (
    <>
      <Styled.JoinContainer>
        <Link to='/'><CatButlerLogo /></Link>
        <div className='writeInformation'>
          <p>회원정보를 입력해주세요</p>
          <form>
            <Input type="text" placeholder='이메일' />
            <Input type="password" placeholder='비밀번호' autoComplete='off'  />
            <Input type="password" placeholder='비밀번호 확인'  autoComplete='off' />
            <Input type="text" placeholder='이름' />
            <Input type="text" placeholder='휴대폰 번호' />
          </form>
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
                <div className='consentItems'>
                  <div key={element.id}>
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
                </div>
              )
            })}
            
        </div>
        <Btn>회원가입</Btn>
      </Styled.JoinContainer>
    </>
  )
}