const heightEl = document.getElementById("height");
const WeightEl = document.getElementById("Weight");
const bmiResultEl = document.getElementById("bmi-result");
const btnEl = document.getElementById("btn");
const weightCondition = document.getElementById("weight-condition");

btnEl.addEventListener("click", () => {
  const heightCM = heightEl.value;
  const heightM = heightCM / 100;
  const Weight = WeightEl.value;
  const result = Weight / (heightM * heightM);
  bmiResultEl.value = result

  if (18.5 > result) {
    weightCondition.innerText = " You are underweight"
  }else if (result >= 18.5 && result <= 24.9) {
    weightCondition.innerText = " You have a normal weight";
  }else if (25 <= result && result <= 29.9) {
    weightCondition.innerText = " You are overweight";
  } else {
    weightCondition.innerText = " you're fat"

  }



});

