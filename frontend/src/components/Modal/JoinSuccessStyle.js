import styled from "styled-components";
import { primary, lightPrimary, white, darkPrimary, greyBeige } from "../styleVariables";
import { Btn } from '../style.js';

export const JoinSuccessModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40;
  position: fixed;
  
  .container {
    width: 40rem;
    height: 38rem;
    background-color: ${greyBeige};
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  .title {
    font-size: 2rem;
    font-weight: 800;
  }

  .textBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .btnBox {
    display: flex;
    gap: 2rem;
  }
`

export const ModalBtn = styled(Btn)`
  width: 10rem;
  height: 4rem;
  font-size: 1rem;
  border: solid 1px ${primary};
  border-radius: 1rem;
  background-color: ${props => props.$color ? primary : white };
  color: ${props => props.$color ? white : darkPrimary };
`