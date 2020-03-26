import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    height: 60px;
    background-color: #e02041;
    border-radius: 8px;
    color: #fff;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    font-size: 18px;
    line-height: 60px;
    border: none;
    transition: filter 0.2s linear;
    margin-top: 0;
    margin-left: auto;

    &:hover {
      filter: brightness(90%);
    }
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background-color: transparent;
    margin-left: 16px;
    transition: border-color 0.2;
  }
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  li {
    background-color: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }

    p + strong {
      margin-top: 32px;
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;
    }

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
