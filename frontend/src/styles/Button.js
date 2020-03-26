import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'submit'
})`
  width: 100%;
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

  &:hover {
    filter: brightness(90%);
  }
`;

export default Button;
