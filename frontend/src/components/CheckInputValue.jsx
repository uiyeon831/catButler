import { useEffect, useState } from "react";

import { styled } from "styled-components";
import { Input } from '../components/style';

export default function CheckInputValue({ 
  id, type, placeholder, 
  joinObj, index, joinHandler
}) 
{
  const [text, setText] = useState('');
  const [inputValue, setInputValue] = useState(' ');

  useEffect(()=> {
    if(id === 'email') {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
      const isRight = emailRegex.test(inputValue);
      if(isRight){
        setText('');
        joinHandler(joinObj, index, inputValue);
      } else if(inputValue === ' ') {
        setText('');
      } else if (!inputValue) {
        setText('이메일을 입력해주세요');
      } else if(inputValue && !isRight) {
        setText('이메일 형식이 올바르지 않습니다.');
      }
    } else if(id === 'password') {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
      const isRight = passwordRegex.test(inputValue);
      if(isRight){
        setText('');
        joinHandler(joinObj, index, inputValue);
      } else if(inputValue === ' ') {
        setText('');
      } else if (!inputValue) {
        setText('비밀번호를 입력해주세요');
      } else if(inputValue && !isRight) {
        setText('비밀번호 형식이 올바르지 않습니다.');
      }
    } else if(id === 'repassword') {
      if(joinObj[index-1].value === inputValue) {

      }else if(inputValue === ' ') {
        setText('');
      } else if (!inputValue) {
        setText('비밀번호 확인을 해주세요');
      }
    } else if(id === 'userName') {
      if(inputValue === ' ') {
        setText('');
      } else if (!inputValue) {
        setText('이름을 입력해주세요');
      } else {
        joinHandler(joinObj, index, inputValue);
      }
    } else if(id === 'phoneNumber') {
      const phoneNumberRegex = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
      const isRight = phoneNumberRegex.test(inputValue);
      if(isRight){
        setText('');
        joinHandler(joinObj, index, inputValue);
      } else if(inputValue === ' ') {
        setText('');
      } else if (!inputValue) {
        setText('전화번호를 입력해주세요');
      } else if(inputValue && !isRight) {
        setText('전화번호 형식이 올바르지 않습니다.');
      }
    } else if(id === 'loginPassword') {
      if(inputValue === ' ') {
        setText('');
      } else if (!inputValue) {
        setText('비밀번호를 입력해주세요');
      }
    }
  },[inputValue])

  const onInputHandler = (e) => {
    setInputValue(e.currentTarget.value);
  }

  return (
    <InputContainer>
      <Input 
        className="joinInput"
        id={id} 
        type={type} 
        placeholder={placeholder} 
        autoComplete='off' 
        onChange={onInputHandler} 
      />
      <p className="unRightText">
        {text}
      </p>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .unRightText {
    color: red;
    font-size: 0.8rem;
    padding-left: 1rem;
  }
`