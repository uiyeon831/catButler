import { styled } from "styled-components";
import { ivory, lightPrimary } from "../components/styleVariables";

export const mainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .mainSlide {
    width: 100%;
    height: 80rem;
    background-color: ${lightPrimary};
  }
  
  .bestItem {
    width: 100%;
    height: 80rem;
    background-color: ${ivory};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .title {
      font-size: 1.5rem;
      font-weight: 600;
    }

  }
`