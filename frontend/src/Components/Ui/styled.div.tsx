import styled from "styled-components";
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  padding: 0px;
  min-height: screen;
  overflow-x: hidden;
  
`;
export default Wrapper; 
