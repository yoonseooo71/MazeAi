import styled from "styled-components";

const BalloonPop = ({location, closePop}) => {
  return(
    <Wrapper top={location.top} left={location.left} onMouseLeavet={closePop}>
      <Row>
        <TypeBtn color="green">시작</TypeBtn>
        <TypeBtn color="yellow">도착</TypeBtn>
      </Row>
      <Row>
        <TypeBtn color="red">벽</TypeBtn>
        <TypeBtn color="white">빈칸</TypeBtn>
      </Row>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 250px;
  height: 150px;
  background-color: #D9D9D9;
  border-radius: 50px;
  position: absolute;
  top:${({top})=> `calc(${top}px - 165px)`};
  left:${({left})=> `calc(${left}px - 125px)`} ;
  display: flex ; 
  justify-content: center ; 
  align-items: center ; 
  :after {
    border-top:15px solid #D9D9D9;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    top: 150px;
    left:calc(250px / 2 - 15px);
  }
`
const TypeBtn = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 30px;
  background-color: ${({theme,color})=>theme.colors[color]};
  color: black;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 10px;
`
const Row = styled.div`

`
export default BalloonPop ; 