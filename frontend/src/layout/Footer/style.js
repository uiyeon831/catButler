import { styled } from "styled-components";
import { darkPrimary, primary } from './../../components/styleVariables';

export const footerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${primary};
  position : relative;
  padding: 2rem 3rem;

  .companyContent {

  }

  .textBox {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    color: ${darkPrimary};
  }

  .title {
    font-weight: 600;
  }
`