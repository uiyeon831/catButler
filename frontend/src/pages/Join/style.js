import styled from "styled-components";
import { primary } from "../../components/styleVariables";

export const JoinContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 3.5rem;
  padding-bottom: 10rem;

  .writeInformation {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 2.5rem;
    border-top: solid 1px ${primary};
    border-bottom: solid 1px ${primary};
    >p {
      padding-bottom: 0.5rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .agreeBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 25rem;
  }

  .agree {
    display: flex;
    gap: 1rem;
    line-height: 1.8rem;
    font-size: 1.3rem;
  }

  .checkContainer {
    width: 27rem;
    height: 1.4rem;
    align-items: center;
    display: flex;
    gap: 1rem;
  }

  .consentItems {  
    height: 2rem;
    display: flex;
    flex-direction: column;      
    align-items: center;
    padding: 1rem 0 0 1.3rem;
    gap: 1.5rem;
    
    > div {
      height: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 1.4rem;
      font-size: 1rem;

      > svg {
        &:hover{
          cursor: pointer;
        }
      }
    }

    .advertisementAgree{
      display: flex;
      flex-direction: column;
      padding-left: 3.5rem;
      gap: 1.2rem;
    }
  }
`