const elForm = document.querySelector("form");
const elInput = document.querySelector("#input");
const elWeekDay = document.querySelector("#week-day");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let number = Number(elInput.value);
  switch (number) {
    case 1:
      elWeekDay.textContent = "dushanba";
      break;
    case 2:
      elWeekDay.textContent = "seshanba";
      break;
    case 3:
      elWeekDay.textContent = "chorshanba";
      break;
    case 4:
      elWeekDay.textContent = "payshanba";
      break;
    case 5:
      elWeekDay.textContent = "juma";
      break;
    case 6:
      elWeekDay.textContent = "shanba";
      break;
    case 7:
      elWeekDay.textContent = "yakshanba";
      break;
  }
});
