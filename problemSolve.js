

// function User () {
//     this.name = "KS";
//     this.isAdmin = false;
// }


// let User = (name) => {
//     this.name = name;
//     this.isAdmin = false;
// }


// let user = new User();

// console.dir(user);
//  console.dir(User.prototype)
//  console.dir(User.prototype.constructor)


//-----------------------------------------------------------------


//  function myFunction (){
//      this.a = this.foo;
//  }

//  function Foo (){
//      this.greet = "hello world";    // Foo 생성자 함수에서 greet이라는 속성을 추가합니다.
//  }

//  myFunction.prototype.foo =  function Foo (){
//     this.greet = "hello world";    // Foo 생성자 함수에서 greet이라는 속성을 추가합니다.
// }

// console.log(myFunction.foo());
 




//  myFunction.prototype.constructor.construct_val = "생성자 값";


//  var myFunction_instance = new myFunction(); //으로 myFunction의 인스턴스를 만들고,

//  console.log(myFunction_instance.proto_val); //로 콘솔을 찍어보면 원하는 값인 '원형 값'이 나옵니다.

//  Object.prototype.say = function(){
//      console.log(`say : '원형', ${this.greet}`); //Object의 프로토타입에 say라는 메서드를 추가합니다.
//  }
 
//  function Foo (){
//      this.greet = "hello world";    // Foo 생성자 함수에서 greet이라는 속성을 추가합니다.
//  }
 
//  var foo_instance = new Foo();     //인스턴스를 생성합니다.
 
//  console.log(`foo_instance.greet : ${foo_instance.greet}`) // hello world
//  console.log(Foo.prototype);
//  console.log(foo_instance);
//  console.log(Foo);
//  console.log(`Object.prototype : ${Object.prototype}`);

//  console.log(Foo.prototype)

//  console.log(`foo_instance.say() : ${foo_instance.say()}`) // 원형 hello world
 
// let animal = {
//     eats: true
//   };
  
//   // 프로토타입이 animal인 새로운 객체를 생성합니다.
//   let rabbit = Object.create(animal);
  
//  console.log(Object.getPrototypeOf(rabbit));


// function fun() {
//     this.name = "하이";
//     return {
//       name: "바이",
//       speak: function () {
//         console.log(this.name);
//       },
//     };
//   }
  
//   function arrFun() {
//     this.name = "하이";
//     return {
//       name: "바이",
//       speak: () => {
//         console.log(this.name);
//       },
//     };
//   }
  
//   const fun1 = new fun();
//   fun1.speak(); // 바이
  
//   const fun2 = new arrFun();
//   fun2.speak(); // 하이

// ** 전역변수 name 선언
let name2 = 'error';

// ** 객체 내부 변수 name 선언
const person = {
  name2: 'Lee',
};
  
// ** 함수 선언식으로 method 설정
person.sayHi = () => {
  console.log(this);
  console.log(`Hi ${this.name2}`);
};

// ** 결과
person.sayHi();

// const person = {
//     name: 'Lee',
//   };
  
//   person.sayHi = function() {
//     console.log(this);
//     console.log(`Hi ${this.name}`);
//   };
  
//   person.sayHi(); // Hi Lee

