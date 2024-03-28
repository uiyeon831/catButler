import styled from "styled-components";
import { darkPrimary, lightPrimary, primary } from "../../components/styleVariables";

export const headerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  .searchBox {
    align-items: center;
    position: relative;
    display: flex;
  }

  .searchInput {
    width: 35rem;
    height: 3rem;
    border: solid 1px black;
    border-radius: 2rem;
    padding: 1rem;
  }

  .searchIcon {
    position: absolute;
    right: 3.5%;
    &:hover {
      cursor: pointer;
    }
  }

  .iconBox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-right: 1rem;
  }

  .personIconBox {
    > svg {
      &:hover {
        cursor: pointer;
      }
    }
  }
`

export const HoverContainer = styled.div`
  width: 21rem;
  height: 28rem;
  position: fixed;
  top: 8.5%;
  right: 1%;
  display: flex;
  justify-content: center;
  align-items: center;

  .hoverBox{
    width: 20rem;
    height: 27rem;
    background-color: white;
    border: solid 1px ${primary};
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.3rem;
  }
  

  .textBox {
    width: 13rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      cursor: pointer;
      font-weight: 600;
    }
  }

  .logout {
    width: 13rem;
    display: flex;
    justify-content: right;
    
    > p {
      text-decoration: underline;

      &:hover {
        cursor: pointer;
        font-weight: 600;
      }
    }
  }

  .textContainer {
    width: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    gap: 0.5rem;
  }

  .lineContainer {
    padding: 0.4rem 0;
  }

  .line {
    width: 16rem;
    height: 1px;
    background-color: ${primary};
  }

  .btnContainer {
    display: flex;
    flex-direction: row;
    gap: 0.6rem;

    button {
      width: 8rem;
      height: 3rem;
      border-radius: 1.2rem;
      font-size: 1rem;
    }
    > :last-child > button {
      background-color: ${lightPrimary};
      color: ${darkPrimary};
    }

  }
`