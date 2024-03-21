export const emailCheck = ( value ) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const isRight = emailRegex.test(value);
  if(isRight) {
    return 'true';
  } else if(!value) {
    return '이메일을 입력해주세요';
  } else if(value === ' ') {
    return '';
  } else if(value && !isRight && value !== ' ' ) {
    return '이메일 형식이 올바르지 않습니다.'
  }
}

export const passwordCheck = ( value ) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
  const isRight = passwordRegex.test(value);
  if(isRight) {
    return 'true';
  } else if(!value) {
    return '비밀번호를 입력해주세요';
  } else if(value === ' ') {
    return '';
  } else if(value && !isRight && value !== ' ') {
    return '비밀번호 형식이 올바르지 않습니다.'
  }
}

export const confirmPasswordCheck = ( value, passwordValue ) => {
  if(value === passwordValue && value !== ' '){
    return 'true';
  } else if(!value) {
    return '비밀번호 확인을 해주세요';
  } else if(value === ' ') {
    return '';
  } else if(value && value !== passwordValue && value !== ' '){
    return '비밀번호가 일치하지 않습니다.'
  }
}

export const userNameCheck = ( value ) => {
  if(value && value !== '' && value !== ' '){
    return 'true';
  } else if(value === ' ') {
    return '';
  } else if(!value) {
    return '이름을 입력해주세요';
  }
}

export const phoneNumberCheck = ( value ) => {
  const phoneNumberRegex = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
  const isRight = phoneNumberRegex.test(value);
  if(isRight) {
    return 'true';
  } else if(!value) {
    return '핸드폰 번호를 입력해주세요';
  } else if(value === ' ') {
    return '';
  } else if(value && !isRight && value !== ' ') {
    return '핸드폰 번호 형식이 올바르지 않습니다.'
  }
}

export const loginPasswordCheck = ( value ) => {
  if(value && value !== ''){
    return 'true';
  } else if(value === ' ') {
    return '';
  } else if(!value) {
    return '비밀번호를 입력해주세요';
  }
}