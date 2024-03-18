import styled from "styled-components";

export const headerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  .searchInput {
    width: 30rem;
    height: 2.5rem;
    border: solid 1px black;
    border-radius: 2rem;
    padding: 1rem;
  }

  .iconBox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-right: 1rem;
  }
`