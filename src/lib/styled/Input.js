import styled from 'styled-components'

const Input = styled.input`
  background: #F1F3F4;
  border: none;
  border-radius: 3px;
  outline: none;
  font-size: large;
  display: inline-block;
  width: 100%;
  color: #69626D;
  font-weight: 400;
  &::-webkit-input-placeholder {
    font-weight: 100;
    font-style: italic;
    color: #69626D;
  }
`;

export default Input;