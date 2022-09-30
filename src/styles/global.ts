import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
  font-size: 60%;

--color-background: #f0f0f7;
  --color-primary: #0693e3;
  --color-text: #fff;
  --color-text-hover: #fcb900;
  --color-text-complement: #9c98a6;

  --color-line-in-white: #e6e6f0;
  --color-input-background: #f8f8fc;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    body{
      background: var(--background);

      -webkit-font-smoothing: antialiased;
    }

    body, button, input, textarea{
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
    }

    button{
      cursor: pointer;
    }
    a{
      text-decoration: none;
    }

    [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

    h1,h2,h3,h4,h5,h6,strong {
    font-weight: 600;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var( --color-text);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }

.MuiPaper-root {
  margin-top: 4rem;
  overflow: scroll;
  height: 450px;
}

table .MuiTableCell-root {
  font-size: 1.6rem;
}

.MuiTableCell-root.actions{
  display: flex;
  gap: 1rem;
}
.MuiTableCell-root.actions button{
  background: none;
  border: 0;
}
  @media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
`;
