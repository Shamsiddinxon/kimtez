let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elResultPiyoda = document.querySelector(".result__piyoda");
let elResultVelo = document.querySelector(".result__velo");
let elResultAuto = document.querySelector(".result__auto");
let elResultPlan = document.querySelector(".result__plan");

let piyoda = 3.6;
let velo = 20.1;
let auto = 70;
let plan = 800;



const speed = function (inputValue, age) {
  let speed = (inputValue / age).toFixed(2);
  return `${speed} soat`;
};

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elFormInput.value;
  inputValue = inputValue * 1;

  console.log(inputValue);

  elResultPiyoda.textContent = speed(inputValue,piyoda);
  elResultVelo.textContent = speed(inputValue,velo);
  elResultAuto.textContent = speed(inputValue,auto);
  elResultPlan.textContent = speed(inputValue,plan);

});
