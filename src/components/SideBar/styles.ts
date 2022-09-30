import styled from "styled-components";

export const Container = styled.aside`
  background: var(--color-primary);
  color: var(--color-text);
  width: 350px;
  height: 100vh;

  h1 {
    padding: 2rem 0 0 2rem;
    font-size: 3.2rem;
  }

  nav {
    width: 100%;
    margin-top: 4rem;

    ul {
      list-style: none;

      li {
        padding-bottom: 1.3rem;
        border-bottom: 0.1rem solid var(--color-background);
        & + li {
          margin-top: 1rem;
        }
        a {
          color: var(--color-text);
          margin-left: 1em;
          transition: color 0.2s;
          &:hover {
            color: var(--color-text-hover);
          }
        }
      }
    }
  }
`;
