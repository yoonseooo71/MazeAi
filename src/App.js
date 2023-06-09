import styled from "styled-components";
import Text from "./components/Text";
import CompleteBtn from "./components/CompleteBtn";
import ResetBtn from "./components/ResetBtn";
import { useState } from "react";
import BalloonPop from "./components/BalloonPop";
import findRoad from "./lib/findRoad";
function App() {
  const firstParet = [ //R:빈칸(road),S:시작(start),E:도착(end),W:벽(wall),way:미로길
    "R","R","R","R","R","R",
    "R","R","R","R","R","R",
    "R","R","R","R","R","R",
    "R","R","R","R","R","R",
    "R","R","R","R","R","R",
    "R","R","R","R","R","R"
  ] 
  const [isPop,setIsPop] = useState(false); 
  const [isResult,setIsResult] = useState(false);
  const [popLocation,setPopLocation] = useState(undefined); 
  const [paret,setParet] = useState(firstParet);
  const nodeColor = {
    "S": "green",
    "E": "yellow",
    "W": "red",
    "R": "white",
    "way": "lightGreen"
  }
  const nodeClickHandler=(e)=>{ //노드 타입 설정하는 팝업띄우는 핸들러
    if (!isResult) {
      setIsPop(true) ;
      setPopLocation({left: e.clientX,top: e.clientY,id:e.target.id})
    } else {
      alert("pleas click reset button");
    }
  }
  const nodeSetting=(type,index)=>{ //노드 타입 설정하는 함수 (노드타입,변경위치)
    const temp = [...paret] ;
    temp[index] = type ; 
    setParet(temp) ;  
  }
  const completeBtnClick=()=>{ //길찾고 결과 띄우기
    const result = findRoad(paret); 
    if (result === "is not start or end") {
      alert("is not start or end");
    } else if(result === "can't find way") {
      alert("can't find way");
    } else {
      console.log(result);
      const temp = [...paret] ; 
      result.forEach((node)=>{
        temp[node] = "way"
      })
      setParet(temp);
      setIsResult(true);
    }
  }
  const resetBtnClick=()=>{
    setParet(firstParet);
  setIsResult(false);
  }
  return (
    <Background>
      {isPop && <BalloonPop location={popLocation} closePop={()=>{setIsPop(false)}} nodeSetting={nodeSetting}/>}
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
        {!isResult ? <CompleteBtn clickHandler={completeBtnClick}/> : <ResetBtn clickHandler={resetBtnClick}/>}
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
