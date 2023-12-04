import styled from 'styled-components';
import background from '../images/notebook.webp'

export const ContactsList = styled.div`
  width: 1153px;
  height: 783px;
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: #010101;
  background-image: url("${background}") ;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 30px auto;
  gap: 100px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 1px 1px 6px 2px gray;
`;
