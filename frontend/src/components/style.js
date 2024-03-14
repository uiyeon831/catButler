import styled from "styled-components";

import { white, primary, darkPrimary } from '../components/styleVariables';

export const Btn = styled.button`
  width: 28rem;
  height: 4.8rem;
  background-color: ${primary};
  border-radius: 1.4rem;

  font-weight: 800;
  font-size: 1.8rem;
  color: ${white};

  &:hover {
    cursor: pointer;
  }
`

export const Input = styled.input`
  width: 28rem;
  height: 3.5rem;
  border: solid 1px ${darkPrimary};
  border-radius: 1.3rem;
  padding: 1.2rem;
`