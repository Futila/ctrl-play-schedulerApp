import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--color-text-complement);
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    background: #e7e9ee;
    font-weight: 400;
    font-size: 1.6rem;

    &:placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 5rem;
    margin-top: 1.5rem;
    font-size: 1.6rem;
    border-radius: 0.25rem;
    border: 0;
    font-weight: 600;
    color: #fff;
    background: var(--color-primary);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
