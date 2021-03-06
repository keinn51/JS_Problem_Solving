// ๐บ problem

//1.
/*new A()==new B()๊ฐ ์ฑ๋ฆฝ ๊ฐ๋ฅํ ํจ์ A์ B๋ฅผ ๋ง๋๋ ๊ฒ ๊ฐ๋ฅํ ๊น์?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
๋ง์ฝ ๊ฐ๋ฅํ๋ค๋ฉด, ์คํ ๊ฐ๋ฅํ ์์๋ฅผ ์์ฑํด ๋ณด์ธ์.*/


//2.
/*
๊ณ์ฐ๊ธฐ ๋ง๋ค๊ธฐ
์ค์๋: 5
์๋์ ๊ฐ์ ์ธ ๊ฐ์ ๋ฉ์๋๋ฅผ ๊ฐ์ง ์์ฑ์ ํจ์, Calculator๋ฅผ ๋ง๋ค์ด๋ณด์ธ์.

read() โ prompt ํจ์๋ฅผ ์ด์ฉํด ์ฌ์ฉ์๋ก๋ถํฐ ๊ฐ ๋ ๊ฐ๋ฅผ ๋ฐ๊ณ , ์ด๋ฅผ ๊ฐ์ฒด ํ๋กํผํฐ์ ์ ์ฅํฉ๋๋ค.
sum() โ ํ๋กํผํฐ์ ์ ์ฅ๋ ๊ฐ ๋ ๊ฐ๋ฅผ ๋ํ ํ ๋ฐํํฉ๋๋ค.
mul() โ ํ๋กํผํฐ์ ์ ์ฅ๋ ๊ฐ ๋ ๊ฐ๋ฅผ ๊ณฑํ ํ ๋ฐํํฉ๋๋ค.
์์:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/


//3.
/*
๋์ฐ๊ธฐ ๋ง๋ค๊ธฐ
์ค์๋: 5
์์ฑ์ ํจ์ Accumulator(startingValue)๋ฅผ ๋ง๋ค์ด ๋ณด์ธ์.

Accumulator(startingValue)๋ฅผ ์ด์ฉํด ๋ง๋๋ ๊ฐ์ฒด๋ ์๋์ ๊ฐ์ ์๊ฑด์ ์ถฉ์กฑํด์ผ ํฉ๋๋ค.

ํ๋กํผํฐ value์ ํ์ฌ ๊ฐ(current value)์ ์ ์ฅํฉ๋๋ค. 
์ต์ด ํธ์ถ ์์ ์์ฑ์ ํจ์์ ์ธ์, startingValue์์ ์์๊ฐ(starting value)์ ๋ฐ์์ต๋๋ค.
๋ฉ์๋ read()์์  prompt ํจ์๋ฅผ ์ฌ์ฉํด ์ฌ์ฉ์๋ก๋ถํฐ ์ซ์๋ฅผ ๋ฐ์์ค๊ณ , ๋ฐ์ ์ซ์๋ฅผ value์ ๋ํด์ค๋๋ค.
ํ๋กํผํฐ value์ startingValue์ ์ฌ์ฉ์๊ฐ ์๋ ฅํ ๋ชจ๋  ๊ฐ์ ์ดํฉ์ด ๋ํด์ ธ ์ ์ฅ๋ฉ๋๋ค.

๋ฐ๋ชจ๋ฅผ ์ํ ์ฝ๋๋ ๋ค์๊ณผ ๊ฐ์ต๋๋ค.

let accumulator = new Accumulator(1); // ์ต์ด๊ฐ: 1

accumulator.read(); // ์ฌ์ฉ์๊ฐ ์๋ ฅํ ๊ฐ์ ๋ํด์ค
accumulator.read(); // ์ฌ์ฉ์๊ฐ ์๋ ฅํ ๊ฐ์ ๋ํด์ค

alert(accumulator.value); // ์ต์ด๊ฐ๊ณผ ์ฌ์ฉ์๊ฐ ์๋ ฅํ ๋ชจ๋  ๊ฐ์ ๋ํด ์ถ๋ ฅํจ
*/



//---------------------------------------------------------------------------------------------



// ๐บ Answer

// 1. 
let X = {};

function A() {
  return X;
}
function B() {
  return X;
}

let a = new A;
let b = new B;

alert(a == b); // true

// ๊ฐ์ฒด๋ฅผ ๋ฐํํ๊ฒ ํ๋ฉด ๋ ํจ์๊ฐ ๊ฐ์ ๊ฒ์ด ๊ฐ๋ฅํ๋ค...! (๋ณ์๋ ๊ฐ์ง ์๋ค!)



//2.
function Calculator() {

  this.read = function () {
    this.a = +prompt('Enter the number1');
    this.b = +prompt('Enter the number2');
    // ๋ฌธ์์ด ์์ +๋ฅผ ๋ถ์ฌ์ฃผ๋ฉด ๋ฌธ์ -> ์ซ์๋ก ๋ณํํ๋ค!!!
    return this.a, this.b;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  }
};

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());



//3.
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.a = +prompt('Accumulator: Enter the number');
    this.value += this.a;
    return this.value;
  }
}

let accumulator = new Accumulator(1); // ์ต์ด๊ฐ: 1

accumulator.read(); // ์ฌ์ฉ์๊ฐ ์๋ ฅํ ๊ฐ์ ๋ํด์ค
accumulator.read(); // ์ฌ์ฉ์๊ฐ ์๋ ฅํ ๊ฐ์ ๋ํด์ค

alert(accumulator.value);


// โ Think!!!: why we can't make the Accumulator with arrow func!??