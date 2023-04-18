import styled from "styled-components";
import Text from "./components/Text";
import CompleteBtn from "./components/CompleteBtn";
import { useState } from "react";
import BalloonPop from "./components/BalloonPop";
function App() {
  const [isPop,setIsPop] = useState(false); 
  const [popLocation,setPopLocation] = useState(undefined); 
  const nodeColor = {
    "S": "green",
    "E": "yellow",
    "W": "red",
    "R": "white"
  }
  const paret =[
    "S","W","R","R","R","R",
    "R","R","R","R","R","R",
    "R","W","R","R","R","R",
    "R","R","R","W","R","R",
    "R","R","R","R","R","R",
    "R","R","R","R","R","E"
  ]
  const nodeClickHandler=(e)=>{
    setIsPop(true) ;
    setPopLocation({left: e.clientX,top: e.clientY})
  }
  return (
    <Background>
      {isPop && <BalloonPop location={popLocation} closePop={()=>{setIsPop(false)}}/>}
      <Text size="96px" color="turquoise">
        Maze AI
      </Text>
      <Main>
        <TextBox>
          <Text size="48px" color="turquoise">
            make maze
          </Text>
        </TextBox>
        <Paret>
          {paret.map((element,index)=><Node color={nodeColor[element]} key={index} id={index} onClick={nodeClickHandler}/>)}
        </Paret>
        <CompleteBtn />
      </Main>
    </Background>
  );
}
const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBox = styled.div`
  width: 640px;
  display: flex;
  justify-content: space-between;
`;
const Paret = styled.div`
  width: 600px;
  height: 600px;
  display: grid;
  border: 20px ${({ theme }) => theme.colors.gray} solid;
  box-sizing: content-box;
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: repeat(6, 100px);
`;
const Node = styled.div`
  background-color: ${({ theme, color }) => theme.colors[color]};
  border: black 1px solid;
`;

export default App;
