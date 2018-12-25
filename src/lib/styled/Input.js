import styled from 'styled-components'

const Input = styled.input`
  background: white;
  border: none;
  border-radius: 3px;
  outline: none;
  font-size: large;
  display: inline-block;
  width: 100%;
  font-weight: 300;
  color: gray;
  &::-webkit-input-placeholder {
    font-weight: 100;
    font-style: italic;
    color: gray;
  }
`;

export default Input;