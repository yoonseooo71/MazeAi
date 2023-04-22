import styled from "styled-components";
import Text from "./Text";
const ResetBtn = ({clickHandler})=>{
  return (
    <Wrapper onMouseDown={clickHandler}> 
      <Text size="32px" color="turquoise">초기화</Text>
    </Wrapper>
  )
};
const Wrapper = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 40px;
  background-color: ${({theme})=>theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-top: 15px;
  cursor: pointer;
  :hover {
    border: ${({theme})=>theme.colors.turquoise} 2px solid;
  }
`
export default ResetBtn ; 