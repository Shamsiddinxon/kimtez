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

const speed = function (masofa, age) {
  let time = masofa / age;
  let soat = Math.floor(time);
  let minut = Math.round((time.toFixed(2) - soat) * 60);

  if (soat > 0) {
    return `${soat}soat, ${minut}min`;
  } else if(soat <= 0) {
    return `${minut}min`;
  }

};

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let masofa = elFormInput.value;
  masofa = masofa * 1;


  elResultPiyoda.textContent = speed(masofa, piyoda);
  elResultVelo.textContent = speed(masofa, velo);
  elResultAuto.textContent = speed(masofa, auto);
  elResultPlan.textContent = speed(masofa, plan);
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
let elYomgir = document.querySelector(".ha__yomgir");
let elZal = document.querySelector(".ha__zal");
let elFormHeadingHa = document.querySelector(".ha__heading");
let elFormHeadingYoq = document.querySelector(".yoq__heading");

elHaForm.addEventListener("change", function () {
  let temperatura = elHaInput.value;
  temperatura = temperatura * 1;

  if (temperatura >= 5 && temperatura <= 30 && !elYomgir.checked) {
    elFormHeadingHa.classList.add("text-success");
    elFormHeadingYoq.classList.remove("text-danger");
    console.log(temperatura);
  } else if (elZal.checked && temperatura >= 5) {
    elFormHeadingHa.classList.add("text-success");
    elFormHeadingYoq.classList.remove("text-danger");
  } else if ((elYomgir.checked && !elZal.checked) || temperatura <= 4) {
    elFormHeadingHa.classList.remove("text-success");
    elFormHeadingYoq.classList.add("text-danger");
  } else if (elZal.checked && temperatura <= 5) {
    elFormHeadingHa.classList.add("text-success");
    elFormHeadingYoq.classList.remove("text-danger");
  }
});
