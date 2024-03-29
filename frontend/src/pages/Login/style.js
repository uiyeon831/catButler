import styled from "styled-components";
import { greyBeige ,darkPrimary,white } from "../../components/styleVariables";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 3.5rem;

  .whetherMember {
    display: flex;
    
    > div {
      width: 14rem;
      height: 3.8rem;
      text-align: center;
      line-height: 3.8rem;
      border: solid 1px ${darkPrimary};
      background-color: ${greyBeige};
      
      &:hover {
        cursor: pointer;
      }
    }
    .member{
      background-color: white;
      border-bottom: none;
      border-right: none;
    }
  }

  .loginBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .inputBox {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .checkContainer {
      width: 27rem;
      height: 1.4rem;
      align-items: center;
      display: flex;
      gap: 1rem;
    }
  }

  .findPassword {
    display: flex;
    gap: 2rem;
    font-size: 0.8rem;
  }
`