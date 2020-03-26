import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const Form = styled.form`
  margin-top: 100px;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
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
