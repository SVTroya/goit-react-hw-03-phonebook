import styled from 'styled-components';

export const FilterInputStyled = styled.input`
  display: inline;
  width: 100%;
  height: 30px;
  border: none;
  padding: 2px 10px;
  box-shadow: inset 1px 1px 3px 1px gray;
  font-size: 18px;
  border-radius: 2px;
  margin-right: 5px;

  &:hover, &:focus {
    outline: none;
  }
`;
