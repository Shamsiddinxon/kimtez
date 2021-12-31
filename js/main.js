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

  elResultPiyoda.textContent = speed(inputValue, piyoda);
  elResultVelo.textContent = speed(inputValue, velo);
  elResultAuto.textContent = speed(inputValue, auto);
  elResultPlan.textContent = speed(inputValue, plan);
});

// TEMPERATURA

let elTempForm = document.querySelector(".temp__form");
let elTempInput = document.querySelector(".temp__input");
let elTempReturn = document.querySelector(".temp__return");

const selse = function (tempValue) {
  let age = (tempValue * 9) / 5 + 32;
  return age;
};

elTempForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let tempValue = elTempInput.value;
  tempValue = tempValue * 1;

  elTempReturn.textContent = `${selse(tempValue)} F`;
});

// HAYO'Q

let elHaForm = document.querySelector(".ha__form");
let elHaInput = document.querySelector(".ha__input");
let elHaCeckout = document.querySelector(".ha__checkout");
let HaCheckout1 = document.querySelector(".ha__checkout1");
let elFormHeadingHa = document.querySelector(".ha__heading");
let elFormHeadingYoq = document.querySelector(".yoq__heading");



elHaForm.addEventListener("change", function (evt) {
  evt.preventDefault();

  let haInputValue = elHaInput.value;
  haInputValue = haInputValue * 1;

  elHaCeckout = Boolean(elHaCeckout)

  elFormHeadingHa.style.color = "blac";
    elFormHeadingYoq.style.color = "blac";

  if ((haInputValue > 5) && !elHaCeckout ){
    elFormHeadingHa.style.color = "green";
    elFormHeadingYoq.style.color = "blac";

    console.log(elHaCeckout);
  } else if (elHaCeckout) {
    elFormHeadingYoq.style.color = "red";
    elFormHeadingHa.style.color = "blac";

  } else {

  }
})