import styled from "styled-components";

export const InputElement = styled.div`
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
`;
