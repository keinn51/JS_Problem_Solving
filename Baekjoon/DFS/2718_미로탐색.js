/*
https://www.acmicpc.net/problem/2178
*/

const input = require("fs").readFileSync("text.txt").toString().split("\n");
// N과 M은 각각 높이와 폭
const [N, M] = input[0].split(" ").map(function (a) {
  return parseInt(a);
});

// graph 는 map
let graph = new Array(N).fill([]).map(() => new Array(M));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) graph[i][j] = input[i + 1][j];
}

// 상하좌우를 갈 수 있도록 두 개의 배열 설정
const dx = [1, 0, -1, 0], dy = [0, 1, 0, -1];
let total = 10000;

function iter(a,b, cnt)
{
  let nx, ny;
  graph[a][b] = 'V';
  // 끝에 도달하면 리턴
  if (a === N - 1 && b === M - 1)
  {
    total = Math.min(total, cnt)
    return cnt;
  }
  for (let i = 0; i < 4; i++)
  {
    nx = a + dx[i];
    ny = b + dy[i];
    if (0 <= nx && nx < N && 0 <= ny && ny < M)
      if (graph[nx][ny] !== 'V' && graph[nx][ny] === '1')
      {
        cnt = iter(nx, ny, cnt + 1);
        cnt--;
        graph[nx][ny] = '1';
      }
  }
  return cnt;
}

iter(0, 0, 1);

console.log(total);