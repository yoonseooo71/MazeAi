export default function findRoad([...paret]) {
  const [width, height] = [6, 6];
  const moves = [1, -1, width, -width];
  const check = { 1: [1, 0], "-1": [-1, 0], 6: [0, 1], "-6": [0, -1] };
  let start = undefined;
  let end = undefined;
  paret.forEach((element, index) => { //시작,도착지점 위치 확인
    if (element === "S") start = index;
    else if (element === "E") end = index;
  });
  if(start=== undefined || end===undefined) return "is not start or end";
  paret[start] = 1;
  let queue = [start];
  while (queue.length!==0) {
    let breakKey = false;
    const node = queue.shift();
    for (let move of moves) {
      if ((0 <= (node % width) + check[move][0])&&((node % width) + check[move][0] < width)) { //가로 범위 벗어나는지 체크 
        if ((0 <= parseInt(node / width) + check[move][1] )&&(parseInt(node / width) + check[move][1] < height)) {//세로 범위 벗어나는지 체크 
          if (paret[node + move] === "R" || paret[node + move] === "E") { //길 또는 도착지점인지 체크 
            paret[node + move] = paret[node] + 1;
            queue.push(node + move);
            if (node + move === end) { //도착지점일때
              breakKey = true;
              break;
            }
          }
        }
      }
    }
    if (breakKey) break;
  }
  if (paret[end]==="E") return "don't find way"; //길이 없을때 
  const route = [end];
  queue = [end];
  while (queue.length!==0) {
    const node = queue.shift();
    for (let move of moves) {
      if ((0 <= (node % width) + check[move][0]) && ((node % width) + check[move][0] < width)) {
        if ((0 <= parseInt(node / width) + check[move][1]) &&(parseInt(node / width) + check[move][1] < height)) {
          if (paret[node + move] < paret[node]) {
            queue.push(node + move);
            route.unshift(node + move);
            if (node + move === start) return route;
            break;
          }
        }
      }
    }
  }
}