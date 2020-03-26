import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px 0;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s linear;

    svg {
      margin-right: 8px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input,
  textarea {
    margin-top: 8px;
  }

  div {
    display: flex;

    input + input {
      margin-left: 8px;
    }
  }
`;
