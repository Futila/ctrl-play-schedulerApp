import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  main {
    flex: 1;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: 2rem auto 0;

      h1 {
        color: var(--color-text-complement);
      }

      button {
        font-size: 1.6rem;
        color: #fff;
        background: var(--color-primary);
        padding: 0 2rem;
        height: 5rem;
        border: 0;
        border-radius: 0.55rem;

        transion: filter 0.2s;

        &:hover {
          filter: brightness(0.6);
        }
      }
    }

    form {
      margin: 0 auto;
      width: 90%;
    }

    table {
      font-size: 14rem;
    }
  }
`;
