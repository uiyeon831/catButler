import styled from "styled-components";

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
`