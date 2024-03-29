// 🟪 Problem

//(1)아래 코드를 실행했을 때 얼럿 창에 마지막으로 뜨는 값은 무엇일까요? 이유도 함께 설명해보세요.

let i = 3;

while (i) {
  console.log(i--);
}

//(2)while 반복문이 순차적으로 실행될 때마다 얼럿 창에 어떤 값이 출력될지 예상해보세요. 아래 두 예시는 같은 값을 출력할까요?

i = 0;
while (++i < 5) console.log(i);


i = 0;
while (i++ < 5) console.log(i);


//(3)for 반복문이 순차적으로 실행될 때마다 얼럿 창에 어떤 값이 출력될지 예상해보세요. 아래 두 예시는 같은 값을 출력할까요?

for (i = 0; i < 5; i++) console.log(i);

for (i = 0; i < 5; ++i) console.log(i);


//(4)for 반복문을 이용하여 2부터 10까지 숫자 중 짝수만을 출력해보세요.

//(5)for 반복문을 while 반복문으로 바꾸되, 동작 방식에는 변화가 없도록 해보세요. 출력 결과도 동일해야 합니다.

for (i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

/*(6)사용자가 100보다 큰 숫자를 입력하도록 안내하는 프롬프트 창을 띄워보세요. 사용자가 조건에 맞지 않은 값을 입력한 경우 반복문을 사용해 동일한 프롬프트 창을 띄워줍시다.

사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우, 혹은 아무것도 입력하지 않고 확인 버튼을 누른 경우엔 더는 프롬프트 창을 띄워주지 않아도 됩니다.

사용자가 오직 숫자만 입력한다고 가정하고 답안을 작성하도록 해봅시다. 숫자가 아닌 값이 입력되는 예외 상황은 처리하지 않아도 됩니다.*/

/*(7)소수(prime number)는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수입니다.

다시 말해서 1과 그 수 자신 이외의 자연수로는 나눌 수 없는 자연수를 소수라고 부르죠.

5는 2나 3, 4로 나눌 수 없기 때문에 소수입니다. 5를 이들 숫자로 나누면 나머지가 있기 때문이죠.

2부터 n까지의 숫자 중 소수만 출력해주는 코드를 작성해봅시다.

n = 10이라면 결과는 2,3,5,7이 되어야겠죠.

주의: 작성한 코드는 임의의 숫자 n에 대해 동작해야 합니다.*/



//----------------------------------------------------------------------------------------


// 💜 Answer

console.clear();

// ❌ 1. While(i) 는 i가 0일 때까지 돌아간다. 
// but postfix operators operate the number after compute.


// ❌ 2. 처음 건 1~4 까지, 다음 건 1~5까지 출력이 된다..!
/*

❗️❗️ below two are the same!!!!

while (++i < 5) console.log(i);

while (++i < 5) 
  console.log(i);

*/


// ⭕️ 3. results are 0,1,2,3,4 !
// the order of calc is (i = 0) -> (i < 3) -> console.log -> i++
// so above two expressions are the same.


// ⭕️ 4. 
let result4;

for (i = 2; i < 11; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(i);
}

//


// ⭕️ 5.
i = 0;
while (i < 3) {
  console.log(`number ${++i}`);
}


// ❤️ 6.
let a = prompt('100을 초과하는 숫자를 입력해 주세요.');
if (a <= 100) {
  while (a <= 100 && a) {
    a = prompt('100을 초과하는 숫자를 입력해 주세요.');
  }
}
// 취소 버튼을 누르면 null이 들어가는데, 이게 들어가면 while안의 조건문이 true가 된다. (null ==0 이므로!)


// 7. 

let num = Number(prompt('Enter the number you wanna know!'));
let checkEven = 0;

for (i = 1; i < num + 1; i++) {
  for (l = 1; l < i + 1; l++) {
    if (i % l == 0) {
      checkEven = ++checkEven
    }
  }
  if (checkEven == 2) {
    console.log(i);
  }
  checkEven = 0;
}