import styled from 'styled-components';

export const Name = styled.span`
  color: #004242;
  font-weight: 400;
  font-family: 'Dancing Script', cursive;
`;

export const Phone = styled.span`
  color: #004242;
  font-style: italic;
  margin-left: auto;
  font-size: 24px;
  padding-top: 3px;
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: color .25s ease-in-out;

  &:hover {
    color: red;
  }
`;
