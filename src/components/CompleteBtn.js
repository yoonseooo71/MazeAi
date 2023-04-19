import styled from "styled-components";
import Text from "./Text";
const CompleteBtn = ({clickHandler})=>{
  return (
    <Wrapper onMouseDown={clickHandler}> 
      <Text size="32px" color="gray">완료</Text>
    </Wrapper>
  )
};
const Wrapper = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 40px;
  background-color: ${({theme})=>theme.colors.turquoise};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    border: ${({theme})=>theme.colors.gray} 2px solid;
  }
`
export default CompleteBtn ; 