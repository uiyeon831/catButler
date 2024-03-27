import { styled } from "styled-components";

export const AlertContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 2%;
  z-index: 40;

  animation: ${props => props.$isOpen ? 'alertOpen 0.1s linear' : 'alertClose 0.1s linear'};

  @keyframes alertOpen {
    from {
      opacity: 0;
      transform: translatey(-40%);
    }
    to {
      opacity: 1;
      transform: translatey(0%);
    }
  }

  @keyframes alertClose {
    from {
      opacity: 1;
      transform: translatey(0%);
    }
    to {
      opacity: 0;
      transform: translatey(-40%);
    }
  }

  .alertContainer {
    width: 35rem;
    height: 6rem;
    background-color: ${(props) => props.$type === 'success' && '#F6FFED'};
    background-color: ${(props) => props.$type === 'informational' && '#E6F4FF'};
    background-color: ${(props) => props.$type === 'warning' && '#FFFBE6'};
    background-color: ${(props) => props.$type === 'error' && '#FFF2F0'};
    border: solid 1px;
    border-color: ${(props) => props.$type === 'success' && '#B7EB8F'};
    border-color: ${(props) => props.$type === 'informational' && '#91CAFF'};
    border-color: ${(props) => props.$type === 'warning' && '#FFE58F'};
    border-color: ${(props) => props.$type === 'error' && '#FFCCC7'};
    border-radius: 1.5rem;
    opacity: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    > button {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .textBox {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
`