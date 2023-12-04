import styled from 'styled-components';

export const ListWrapper = styled.section`
  width: 50%;

  h3{
    display: inline;
    margin-left: 75px;
    font-weight: 500;
  }

  ul {
    padding: 33px 5px 30px 75px;
    line-height: 1.097;
  }

  li{
    display: flex;
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
