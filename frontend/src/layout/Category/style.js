import { styled } from "styled-components";
import { primary } from "../../components/styleVariables";

export const categoryContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;

  .categoryContent {
    color: ${primary};
    font-size: 1.2rem;
    font-weight: 600;

    &:hover {
      color: black;
      cursor: pointer;
    }
  }
`