import styled from "styled-components";

export const SeletElement = styled.div`
  select {
    width: 100%;
    padding: 0 1.5rem;
    height: 5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    margin-top: 1.4rem;

    background: #e7e9ee;
    font-weight: 400;
    font-size: 1.6rem;

    &:placeholder {
      color: var(--text-body);
    }
  }
`;

/* .select-block {
  position: relative;
}

.select-block + .select-block {
  margin-top: 1.4rem;
}

.select-block label {
  font-size: 1.4rem;
}

.select-block select {
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
}

.select-block:focus-within::after {
  width: cal(100% - 3.2rem);
  height: 2px;
  content: "";
  background: var(--color-primary-light);
  position: absolute;
  left: 1.6rem;
  right: 1.6rem;
  bottom: 0;
} */
