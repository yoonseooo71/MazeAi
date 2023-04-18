import styled from "styled-components";

const BalloonPop = ({location, closePop, nodeSetting}) => {
  return(
    <Wrapper top={location.top} left={location.left} onMouseLeave={closePop}>
      <Row>
        <TypeBtn color="green" onClick={()=>nodeSetting("S",location.id)}>시작</TypeBtn>
        <TypeBtn color="yellow" onClick={()=>nodeSetting("E",location.id)}>도착</TypeBtn>
      </Row>
      <Row>
        <TypeBtn color="red" onClick={()=>nodeSetting("W",location.id)}>벽</TypeBtn>
        <TypeBtn color="white" onClick={()=>nodeSetting("R",location.id)}>빈칸</TypeBtn>
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
  cursor: pointer;
`
const Row = styled.div`

`
export default BalloonPop ; 