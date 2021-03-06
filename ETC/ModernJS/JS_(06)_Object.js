// ๐ช problem

/* 1.
์ฝ๋ ํ ์ค๋ก ์๋ ๋ฌธ์ ๋ฅผ ๊ฐ๊ฐ ํ์ด๋ณด์ธ์.
๋น ๊ฐ์ฒด user๋ฅผ ๋ง๋ญ๋๋ค.
user์ ํค๊ฐ name, ๊ฐ์ด John์ธ ํ๋กํผํฐ๋ฅผ ์ถ๊ฐํ์ธ์.
user์ ํค๊ฐ surname, ๊ฐ์ด Smith์ธ ํ๋กํผํฐ๋ฅผ ์ถ๊ฐํ์ธ์.
name์ ๊ฐ์ Pete๋ก ์์ ํด๋ณด์ธ์.
user์์ ํ๋กํผํฐ name์ ์ญ์ ํ์ธ์.*/


/* 2.

๊ฐ์ฒด์ ํ๋กํผํฐ๊ฐ ํ๋๋ ์๋ ๊ฒฝ์ฐ true, ๊ทธ๋ ์ง ์์ ๊ฒฝ์ฐ false๋ฅผ ๋ฐํํด์ฃผ๋ ํจ์ isEmpty(obj)๋ฅผ ๋ง๋ค์ด ๋ณด์ธ์.

์๋์ ๊ฐ์ด ๋์ํด์ผ ํฉ๋๋ค.

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
 */

/*3.
๋ชจ๋  ํ์์ ์๊ธ์ ๋ํ ์ ๋ณด๋ฅผ ๋ด๊ณ  ์๋ ๊ฐ์ฒด๊ฐ ์๋ค๊ณ  ํด๋ด์๋ค.*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
/*
๋ชจ๋  ํ์์ ์๊ธ์ ํฉํ ๊ฐ์ ๊ตฌํ๊ณ , ๊ทธ ๊ฐ์ ๋ณ์ sum์ ์ ์ฅํด์ฃผ๋ ์ฝ๋๋ฅผ ์์ฑํด๋ณด์ธ์. sum์ 390์ด ์ ์ฅ๋์ด์ผ๊ฒ ์ฃ ?

์ฃผ์: salaries๊ฐ ๋น์ด์๋ค๋ฉด sum์ 0์ด ์ ์ฅ๋์ด์ผ ํฉ๋๋ค.
*/


/*4.

๊ฐ์ฒด obj์ ํ๋กํผํฐ ๊ฐ์ด ์ซ์์ธ ๊ฒฝ์ฐ ๊ทธ ๊ฐ์ ๋ ๋ฐฐ ํด์ฃผ๋ ํจ์ multiplyNumeric(obj)์ ๋ง๋ค์ด๋ณด์ธ์.

์์:

// ํจ์ ํธ์ถ ์ 
*/

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

/*
multiplyNumeric(menu);

// ํจ์ ํธ์ถ ํ
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
multiplyNumeric์ ์๋ฌด๊ฒ๋ ๋ฐํํ์ง ์์๋ ๊ด์ฐฎ์ต๋๋ค. ๊ฐ์ฒด ์์ฒด๋ฅผ ์์ ํด์ฃผ๊ธฐ๋ง ํ๋ฉด ๋ฉ๋๋ค.

ํํธ) typeof๋ฅผ ์ฌ์ฉํ๋ฉด ํ๋กํผํฐ ๊ฐ์ด ์ซ์์ธ์ง ํ์ธํ  ์ ์์ต๋๋ค.*/


// ๐ Answer


//โญ๏ธ 1.
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;


//โโโ 2.
isEmpty = ((schedule) => {
  for (let key in schedule) {
    return false;
  }

  return true;
})

let schedule = {};


console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false


//โญ๏ธ 3.
let sum = 0;
for (let value in salaries) {
  sum = sum + salaries[value];
}
console.log(sum);


//โญ๏ธ 4.
multiplyNumeric = ((menu) => {
  for (let key in menu) {
    if ((typeof menu[key]) == 'number') {
      menu[key] = menu[key] * 2;
    }
  };
  return menu;
});

multiplyNumeric(menu);

console.log(menu);

