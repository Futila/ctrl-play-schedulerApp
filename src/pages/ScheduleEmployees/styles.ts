import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  main {
    flex: 1;

    h1 {
      color: var(--color-text-complement);
      margin: 2rem 0 0 2rem;
    }

    header {
      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
      }
    }
  }
`;
