import styled from "styled-components";
import Text from "./Text";
const CompleteBtn = ()=>{
  return (
    <Wrapper> 
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
`
export default CompleteBtn ; 