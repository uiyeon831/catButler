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
  padding: 4rem 10rem 4rem 8rem;
  color: ${darkPrimary};

  .companyContent {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .textBox {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .title {
    font-weight: 600;
  }

  .customerService {
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: center;
    gap: 0.7rem;
  }

  .companyNumber {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .serviceContent{
    width: 10rem;
    display: flex;
    justify-content: right;
  }
`