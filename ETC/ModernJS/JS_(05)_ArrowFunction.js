// πͺ problem
// Function to Arrow function

/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "λμνμ­λκΉ?",
    function () { alert("λμνμ¨μ΅λλ€."); },
    function () { alert("μ·¨μ λ²νΌμ λλ₯΄μ¨μ΅λλ€."); }
);
*/


// π Answer

ask = ((question, yes, no) => {
  if (confirm(question)) yes()
  else no();
});

ask(
  "λμνμ­λκΉ?",
  () => alert("λμνμ¨μ΅λλ€."),
  () => alert("μ·¨μ λ²νΌμ λλ₯΄μ¨μ΅λλ€.")
);

// βοΈβοΈ Window.confirm() λ©μλλ νμΈκ³Ό μ·¨μ λ λ²νΌμ κ°μ§λ©° λ©μμ§λ₯Ό μ§μ ν  μ μλ λͺ¨λ¬ λν μμλ₯Ό λμλλ€.
// βοΈβοΈ note func as parameter!